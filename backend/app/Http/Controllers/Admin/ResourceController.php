<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SaveContentRequest;
use App\Models\TourPackage;
use App\Models\UmrahPackage;
use App\Models\Visa;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

class ResourceController extends Controller
{
    private const RESOURCES = [
        'visas' => [
            'label' => 'Visas', 'singular' => 'Visa', 'model' => Visa::class,
            'title' => 'country', 'secondary' => 'category',
            'fields' => [
                'slug' => ['label' => 'Slug', 'type' => 'text', 'required' => true],
                'country' => ['label' => 'Country / visa name', 'type' => 'text', 'required' => true],
                'flag_url' => ['label' => 'Flag image URL', 'type' => 'url'],
                'category' => ['label' => 'Category', 'type' => 'select', 'required' => true, 'options' => ['europe' => 'Europe & UK', 'americas' => 'North America', 'asia' => 'Asia & Turkey']],
                'processing_time' => ['label' => 'Processing time', 'type' => 'text', 'required' => true],
                'validity' => ['label' => 'Validity', 'type' => 'text', 'required' => true],
                'price' => ['label' => 'Price', 'type' => 'text', 'required' => true],
                'description' => ['label' => 'Description', 'type' => 'textarea', 'required' => true],
                'requirements' => ['label' => 'Requirements (one per line)', 'type' => 'lines', 'required' => true],
                'popular' => ['label' => 'Mark as popular', 'type' => 'checkbox'],
                'active' => ['label' => 'Visible on website', 'type' => 'checkbox'],
                'sort_order' => ['label' => 'Display order', 'type' => 'number'],
            ],
        ],
        'tour-packages' => [
            'label' => 'Tour packages', 'singular' => 'Tour package', 'model' => TourPackage::class,
            'title' => 'title', 'secondary' => 'location',
            'fields' => [
                'slug' => ['label' => 'Slug', 'type' => 'text', 'required' => true],
                'title' => ['label' => 'Package title', 'type' => 'text', 'required' => true],
                'location' => ['label' => 'Location', 'type' => 'text', 'required' => true],
                'flag_url' => ['label' => 'Flag image URL', 'type' => 'url'],
                'category' => ['label' => 'Category', 'type' => 'select', 'required' => true, 'options' => ['tropical' => 'Tropical Islands', 'europe' => 'European Escapes', 'arabian' => 'Arabian Luxury']],
                'duration' => ['label' => 'Duration', 'type' => 'text', 'required' => true],
                'price' => ['label' => 'Price', 'type' => 'text', 'required' => true],
                'rating' => ['label' => 'Rating', 'type' => 'number', 'step' => '0.1'],
                'reviews' => ['label' => 'Review count', 'type' => 'number'],
                'image_url' => ['label' => 'Main image URL', 'type' => 'text'],
                'image_file' => ['label' => 'Or upload a main image', 'type' => 'file'],
                'inclusions' => ['label' => 'Inclusions (one per line)', 'type' => 'lines', 'required' => true],
                'itinerary' => ['label' => 'Itinerary (Day | Details, one per line)', 'type' => 'itinerary', 'required' => true],
                'popular' => ['label' => 'Mark as popular', 'type' => 'checkbox'],
                'active' => ['label' => 'Visible on website', 'type' => 'checkbox'],
                'sort_order' => ['label' => 'Display order', 'type' => 'number'],
            ],
        ],
        'umrah-packages' => [
            'label' => 'Umrah packages', 'singular' => 'Umrah package', 'model' => UmrahPackage::class,
            'title' => 'title', 'secondary' => 'duration',
            'fields' => [
                'slug' => ['label' => 'Slug', 'type' => 'text', 'required' => true],
                'title' => ['label' => 'Package title', 'type' => 'text', 'required' => true],
                'makkah_hotel' => ['label' => 'Makkah hotel', 'type' => 'text', 'required' => true],
                'madinah_hotel' => ['label' => 'Madinah hotel', 'type' => 'text', 'required' => true],
                'duration' => ['label' => 'Duration', 'type' => 'text', 'required' => true],
                'price' => ['label' => 'Price', 'type' => 'text', 'required' => true],
                'rating' => ['label' => 'Rating', 'type' => 'number', 'step' => '0.1'],
                'transport' => ['label' => 'Transport', 'type' => 'text', 'required' => true],
                'inclusions' => ['label' => 'Inclusions (one per line)', 'type' => 'lines', 'required' => true],
                'popular' => ['label' => 'Mark as popular', 'type' => 'checkbox'],
                'active' => ['label' => 'Visible on website', 'type' => 'checkbox'],
                'sort_order' => ['label' => 'Display order', 'type' => 'number'],
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

        return redirect()->route('admin.resources.index', $resource)->with('status', $config['singular'].' created.');
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
        $model->update($this->validatedData($request, $config, $model));

        return redirect()->route('admin.resources.index', $resource)->with('status', $config['singular'].' updated.');
    }

    public function destroy(string $resource, int $record): RedirectResponse
    {
        $config = $this->config($resource);
        $model = $config['model']::findOrFail($record);
        $this->deleteUploadedImage($model);
        $model->delete();

        return back()->with('status', $config['singular'].' deleted.');
    }

    private function config(string $resource): array
    {
        abort_unless(isset(self::RESOURCES[$resource]), 404);

        return self::RESOURCES[$resource];
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
