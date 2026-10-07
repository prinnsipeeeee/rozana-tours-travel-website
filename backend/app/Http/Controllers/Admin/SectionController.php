<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Section;
use App\Models\SectionCategory;
use App\Models\SectionItem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class SectionController extends Controller
{
    public function index(): View
    {
        return view('admin.sections.index', [
            'sections' => Section::query()
                ->withCount(['categories', 'items'])
                ->orderBy('sort_order')
                ->orderBy('name_en')
                ->get(),
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $this->validatedSection($request);
        $section = Section::create($data);

        return response()->json(['section' => $section], 201);
    }

    public function update(Request $request, int $record): JsonResponse
    {
        $section = Section::findOrFail($record);
        $section->update($this->validatedSection($request, $section));

        return response()->json(['section' => $section->fresh()]);
    }

    public function destroy(int $record): JsonResponse
    {
        Section::findOrFail($record)->delete();

        return response()->noContent();
    }

    public function show(Section $section): View
    {
        return view('admin.sections.show', [
            'section' => $section,
            'categories' => $section->categories()
                ->withCount('items')
                ->orderBy('sort_order')
                ->orderBy('name_en')
                ->get(),
            'items' => $section->items()
                ->orderBy('sort_order')
                ->orderBy('title_en')
                ->get(),
        ]);
    }

    public function categoryStore(Request $request, Section $section): JsonResponse
    {
        $category = $section->categories()->create($this->validatedCategory($request, $section));

        return response()->json(['category' => $category], 201);
    }

    public function categoryUpdate(Request $request, Section $section, int $record): JsonResponse
    {
        $category = $section->categories()->findOrFail($record);
        $data = $this->validatedCategory($request, $section, $category);

        if ($category->slug !== $data['slug']) {
            DB::transaction(function () use ($section, $category, $data) {
                SectionItem::query()
                    ->where('section_id', $section->id)
                    ->where('category', $category->slug)
                    ->update(['category' => $data['slug']]);
                $category->update($data);
            });
        } else {
            $category->update($data);
        }

        return response()->json(['category' => $category->fresh()]);
    }

    public function categoryDestroy(Section $section, int $record): JsonResponse
    {
        $category = $section->categories()->findOrFail($record);

        if (SectionItem::query()->where('section_id', $section->id)->where('category', $category->slug)->exists()) {
            return response()->json(['message' => __('admin.resources.category_in_use_sections')], 422);
        }

        $category->delete();

        return response()->noContent();
    }

    public function itemCreate(Section $section): View
    {
        return view('admin.sections.item-form', [
            'section' => $section,
            'record' => null,
            'categoryOptions' => $this->categoryOptions($section),
        ]);
    }

    public function itemStore(Request $request, Section $section): RedirectResponse
    {
        $section->items()->create($this->validatedItem($request, $section));

        return redirect()->route('admin.sections.show', $section)->with('status', __('admin.flash.created', ['resource' => __('admin.sections.item_singular')]));
    }

    public function itemEdit(Section $section, int $record): View
    {
        return view('admin.sections.item-form', [
            'section' => $section,
            'record' => $section->items()->findOrFail($record),
            'categoryOptions' => $this->categoryOptions($section),
        ]);
    }

    public function itemUpdate(Request $request, Section $section, int $record): RedirectResponse
    {
        $section->items()->findOrFail($record)->update($this->validatedItem($request, $section, $record));

        return redirect()->route('admin.sections.show', $section)->with('status', __('admin.flash.updated', ['resource' => __('admin.sections.item_singular')]));
    }

    public function itemDestroy(Section $section, int $record): RedirectResponse
    {
        $section->items()->findOrFail($record)->delete();

        return back()->with('status', __('admin.flash.deleted', ['resource' => __('admin.sections.item_singular')]));
    }

    private function validatedSection(Request $request, ?Model $model = null): array
    {
        $data = $request->validate([
            'slug' => ['required', 'string', 'max:255', 'alpha_dash', Rule::unique('sections', 'slug')->ignore($model)],
            'name_en' => ['required', 'string', 'max:255'],
            'name_ar' => ['required', 'string', 'max:255'],
            'badge_en' => ['nullable', 'string', 'max:255'],
            'badge_ar' => ['nullable', 'string', 'max:255'],
            'heading_en' => ['nullable', 'string', 'max:255'],
            'heading_ar' => ['nullable', 'string', 'max:255'],
            'highlight_en' => ['nullable', 'string', 'max:255'],
            'highlight_ar' => ['nullable', 'string', 'max:255'],
            'description_en' => ['nullable', 'string', 'max:10000'],
            'description_ar' => ['nullable', 'string', 'max:10000'],
            'active' => ['nullable', 'boolean'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ]);

        return $this->withDefaults($data);
    }

    private function validatedCategory(Request $request, Section $section, ?Model $model = null): array
    {
        $data = $request->validate([
            'slug' => [
                'required', 'string', 'max:255', 'alpha_dash',
                Rule::unique('section_categories', 'slug')
                    ->where(fn ($query) => $query->where('section_id', $section->id))
                    ->ignore($model),
            ],
            'name_en' => ['required', 'string', 'max:255'],
            'name_ar' => ['required', 'string', 'max:255'],
            'active' => ['nullable', 'boolean'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ]);

        return $this->withDefaults($data);
    }

    private function validatedItem(Request $request, Section $section, ?int $record = null): array
    {
        $data = $request->validate([
            'slug' => [
                'required', 'string', 'max:255', 'alpha_dash',
                Rule::unique('section_items', 'slug')
                    ->where(fn ($query) => $query->where('section_id', $section->id))
                    ->ignore($record),
            ],
            'title_en' => ['required', 'string', 'max:255'],
            'title_ar' => ['nullable', 'string', 'max:255'],
            'image_url' => ['nullable', 'string', 'max:2000'],
            'category' => ['nullable', 'string', 'max:255', Rule::in($this->categoryOptions($section)->keys()->push('')->all())],
            'spec1_label_en' => ['nullable', 'string', 'max:255'],
            'spec1_value_en' => ['nullable', 'string', 'max:255'],
            'spec1_label_ar' => ['nullable', 'string', 'max:255'],
            'spec1_value_ar' => ['nullable', 'string', 'max:255'],
            'spec2_label_en' => ['nullable', 'string', 'max:255'],
            'spec2_value_en' => ['nullable', 'string', 'max:255'],
            'spec2_label_ar' => ['nullable', 'string', 'max:255'],
            'spec2_value_ar' => ['nullable', 'string', 'max:255'],
            'price' => ['nullable', 'string', 'max:255'],
            'description_en' => ['nullable', 'string', 'max:10000'],
            'description_ar' => ['nullable', 'string', 'max:10000'],
            'bullets' => ['nullable', 'string', 'max:10000'],
            'bullets_ar' => ['nullable', 'string', 'max:10000'],
            'popular' => ['nullable', 'boolean'],
            'active' => ['nullable', 'boolean'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ]);

        $data['bullets_en'] = $this->lines($request->string('bullets')->toString());
        $data['bullets_ar'] = $this->lines($request->string('bullets_ar')->toString());
        unset($data['bullets']);

        return $this->withDefaults($data);
    }

    private function withDefaults(array $data): array
    {
        $data['active'] = array_key_exists('active', $data) ? (bool) ($data['active'] ?? false) : false;
        $data['popular'] = (bool) ($data['popular'] ?? false);
        $data['sort_order'] = $data['sort_order'] ?? 0;

        return $data;
    }

    private function categoryOptions(Section $section): \Illuminate\Support\Collection
    {
        $labelColumn = app()->getLocale() === 'ar' ? 'name_ar' : 'name_en';

        return $section->categories()
            ->orderBy('sort_order')
            ->orderBy($labelColumn)
            ->pluck($labelColumn, 'slug');
    }

    private function lines(string $value): array
    {
        return collect(preg_split('/\r\n|\r|\n/', $value))->map('trim')->filter()->values()->all();
    }
}
