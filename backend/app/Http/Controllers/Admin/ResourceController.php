<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SaveContentRequest;
use App\Models\TourPackage;
use App\Models\TourPackageCategory;
use App\Models\UmrahPackage;
use App\Models\Visa;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class ResourceController extends Controller
{
    private const RESOURCES = [
        'visas' => [
            'label' => 'admin.resources.visas', 'singular' => 'admin.resources.visa', 'model' => Visa::class,
            'title' => 'country', 'secondary' => 'category',
            'fields' => [
                'slug' => ['label' => 'admin.fields.slug', 'type' => 'text', 'required' => true],
                'country' => ['label' => 'admin.fields.country', 'type' => 'text', 'required' => true],
                'flag_url' => ['label' => 'admin.fields.flag_url', 'type' => 'url'],
                'category' => ['label' => 'admin.fields.category', 'type' => 'select', 'required' => true, 'options' => ['europe' => 'admin.categories.europe_uk', 'americas' => 'admin.categories.north_america', 'asia' => 'admin.categories.asia_turkey']],
                'processing_time' => ['label' => 'admin.fields.processing_time', 'type' => 'text', 'required' => true],
                'validity' => ['label' => 'admin.fields.validity', 'type' => 'text', 'required' => true],
                'price' => ['label' => 'admin.fields.price', 'type' => 'text', 'required' => true],
                'description' => ['label' => 'admin.fields.description', 'type' => 'textarea', 'required' => true],
                'requirements' => ['label' => 'admin.fields.requirements', 'type' => 'lines', 'required' => true],
                'popular' => ['label' => 'admin.fields.popular', 'type' => 'checkbox'],
                'active' => ['label' => 'admin.fields.active', 'type' => 'checkbox'],
                'sort_order' => ['label' => 'admin.fields.sort_order', 'type' => 'number'],
            ],
        ],
        'tour-packages' => [
            'label' => 'admin.resources.tour_packages', 'singular' => 'admin.resources.tour_package', 'model' => TourPackage::class,
            'title' => 'title', 'secondary' => 'location',
            'fields' => [
                'slug' => ['label' => 'admin.fields.slug', 'type' => 'text', 'required' => true],
                'title' => ['label' => 'admin.fields.title', 'type' => 'text', 'required' => true],
                'location' => ['label' => 'admin.fields.location', 'type' => 'text', 'required' => true],
                'flag_url' => ['label' => 'admin.fields.flag_url', 'type' => 'url'],
                'category' => ['label' => 'admin.fields.category', 'type' => 'select', 'required' => true, 'options' => []],
                'duration' => ['label' => 'admin.fields.duration', 'type' => 'text', 'required' => true],
                'price' => ['label' => 'admin.fields.price', 'type' => 'text', 'required' => true],
                'rating' => ['label' => 'admin.fields.rating', 'type' => 'number', 'step' => '0.1'],
                'reviews' => ['label' => 'admin.fields.reviews', 'type' => 'number'],
                'image_url' => ['label' => 'admin.fields.image_url', 'type' => 'text'],
                'image_file' => ['label' => 'admin.fields.image_file', 'type' => 'file'],
                'inclusions' => ['label' => 'admin.fields.inclusions', 'type' => 'lines', 'required' => true],
                'itinerary' => ['label' => 'admin.fields.itinerary', 'type' => 'itinerary', 'required' => true],
                'popular' => ['label' => 'admin.fields.popular', 'type' => 'checkbox'],
                'active' => ['label' => 'admin.fields.active', 'type' => 'checkbox'],
                'sort_order' => ['label' => 'admin.fields.sort_order', 'type' => 'number'],
            ],
        ],
        'tour-package-categories' => [
            'label' => 'admin.resources.tour_package_categories', 'singular' => 'admin.resources.tour_package_category', 'model' => TourPackageCategory::class,
            'title' => 'name_en', 'secondary' => 'slug',
            'fields' => [
                'slug' => ['label' => 'admin.fields.slug', 'type' => 'text', 'required' => true],
                'name_en' => ['label' => 'admin.fields.name_en', 'type' => 'text', 'required' => true],
                'name_ar' => ['label' => 'admin.fields.name_ar', 'type' => 'text', 'required' => true],
                'active' => ['label' => 'admin.fields.active', 'type' => 'checkbox'],
                'sort_order' => ['label' => 'admin.fields.sort_order', 'type' => 'number'],
            ],
        ],
        'umrah-packages' => [
            'label' => 'admin.resources.umrah_packages', 'singular' => 'admin.resources.umrah_package', 'model' => UmrahPackage::class,
            'title' => 'title', 'secondary' => 'duration',
            'fields' => [
                'slug' => ['label' => 'admin.fields.slug', 'type' => 'text', 'required' => true],
                'title' => ['label' => 'admin.fields.title', 'type' => 'text', 'required' => true],
                'makkah_hotel' => ['label' => 'admin.fields.makkah_hotel', 'type' => 'text', 'required' => true],
                'madinah_hotel' => ['label' => 'admin.fields.madinah_hotel', 'type' => 'text', 'required' => true],
                'duration' => ['label' => 'admin.fields.duration', 'type' => 'text', 'required' => true],
                'price' => ['label' => 'admin.fields.price', 'type' => 'text', 'required' => true],
                'rating' => ['label' => 'admin.fields.rating', 'type' => 'number', 'step' => '0.1'],
                'transport' => ['label' => 'admin.fields.transport', 'type' => 'text', 'required' => true],
                'inclusions' => ['label' => 'admin.fields.inclusions', 'type' => 'lines', 'required' => true],
                'popular' => ['label' => 'admin.fields.popular', 'type' => 'checkbox'],
                'active' => ['label' => 'admin.fields.active', 'type' => 'checkbox'],
                'sort_order' => ['label' => 'admin.fields.sort_order', 'type' => 'number'],
            ],
        ],
    ];

    public function index(string $resource): View
    {
        $config = $this->config($resource);

        return view('admin.resources.index', [
            'resource' => $resource,
            'config' => $config,
            'records' => $config['model']::query()->orderBy('sort_order')->orderBy($config['title'])->get(),
        ]);
    }

    public function create(string $resource): View
    {
        return view('admin.resources.form', [
            'resource' => $resource, 'config' => $this->config($resource), 'record' => null,
        ]);
    }

    public function store(SaveContentRequest $request, string $resource): RedirectResponse
    {
        $config = $this->config($resource);
        $config['model']::create($this->validatedData($request, $config));

        return redirect()->route('admin.resources.index', $resource)->with('status', __('admin.flash.created', ['resource' => __($config['singular'])]));
    }

    public function edit(string $resource, int $record): View
    {
        $config = $this->config($resource);

        return view('admin.resources.form', [
            'resource' => $resource, 'config' => $config, 'record' => $config['model']::findOrFail($record),
        ]);
    }

    public function update(SaveContentRequest $request, string $resource, int $record): RedirectResponse
    {
        $config = $this->config($resource);
        $model = $config['model']::findOrFail($record);
        $data = $this->validatedData($request, $config, $model);

        if ($model instanceof TourPackageCategory && $model->slug !== $data['slug']) {
            DB::transaction(function () use ($model, $data) {
                TourPackage::query()->where('category', $model->slug)->update(['category' => $data['slug']]);
                $model->update($data);
            });
        } else {
            $model->update($data);
        }

        return redirect()->route('admin.resources.index', $resource)->with('status', __('admin.flash.updated', ['resource' => __($config['singular'])]));
    }

    public function destroy(string $resource, int $record): RedirectResponse
    {
        $config = $this->config($resource);
        $model = $config['model']::findOrFail($record);
        if ($model instanceof TourPackageCategory && $model->tourPackages()->exists()) {
            return back()->withErrors(__('admin.resources.category_in_use'));
        }
        $this->deleteUploadedImage($model);
        $model->delete();

        return back()->with('status', __('admin.flash.deleted', ['resource' => __($config['singular'])]));
    }

    private function config(string $resource): array
    {
        abort_unless(isset(self::RESOURCES[$resource]), 404);

        $config = self::RESOURCES[$resource];
        if ($resource === 'tour-packages') {
            $labelColumn = app()->getLocale() === 'ar' ? 'name_ar' : 'name_en';
            $config['fields']['category']['options'] = TourPackageCategory::query()
                ->orderBy('sort_order')->orderBy($labelColumn)->pluck($labelColumn, 'slug')->all();
        }

        return $config;
    }

    private function validatedData(SaveContentRequest $request, array $config, ?Model $model = null): array
    {
        $data = $request->validated();

        foreach ($config['fields'] as $name => $field) {
            if ($field['type'] === 'checkbox') {
                $data[$name] = $request->boolean($name);
            } elseif ($field['type'] === 'lines') {
                $data[$name] = $this->lines($request->string($name)->toString());
            } elseif ($field['type'] === 'itinerary') {
                $data[$name] = collect($this->lines($request->string($name)->toString()))
                    ->map(function (string $line) {
                        [$day, $detail] = array_pad(array_map('trim', explode('|', $line, 2)), 2, '');

                        return ['day' => $day, 'detail' => $detail];
                    })->values()->all();
            }
        }

        unset($data['image_file']);
        if (isset($config['fields']['rating']) && ($data['rating'] ?? null) === null) {
            $data['rating'] = 5;
        }
        if (isset($config['fields']['reviews']) && ($data['reviews'] ?? null) === null) {
            $data['reviews'] = 0;
        }
        if (($data['sort_order'] ?? null) === null) {
            $data['sort_order'] = 0;
        }

        if ($request->hasFile('image_file')) {
            if ($model) {
                $this->deleteUploadedImage($model);
            }
            $data['image_url'] = '/storage/'.$request->file('image_file')->store('packages', 'public');
        }

        return $data;
    }

    private function lines(string $value): array
    {
        return collect(preg_split('/\r\n|\r|\n/', $value))->map('trim')->filter()->values()->all();
    }

    private function deleteUploadedImage(Model $model): void
    {
        if ($model instanceof TourPackage && str_starts_with((string) $model->image_url, '/storage/')) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $model->image_url));
        }
    }
}
