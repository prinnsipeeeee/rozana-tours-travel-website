<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceResource;
use App\Http\Resources\TourPackageResource;
use App\Http\Resources\UmrahPackageResource;
use App\Http\Resources\VisaResource;
use App\Models\Section;
use App\Models\Service;
use App\Models\SiteSetting;
use App\Models\TourPackage;
use App\Models\TourPackageCategory;
use App\Models\UmrahPackage;
use App\Models\Visa;
use App\Models\VisaCategory;
use Illuminate\Http\JsonResponse;

class SiteContentController extends Controller
{
    public function __invoke(): JsonResponse
    {
        return response()->json([
            'settings' => SiteSetting::allAsArray(),
            'services' => ServiceResource::collection(Service::query()->where('active', true)->orderBy('sort_order')->orderBy('title_en')->get()),
            'visas' => VisaResource::collection(Visa::query()->where('active', true)->orderBy('sort_order')->orderBy('country')->get()),
            'visaCategories' => VisaCategory::query()->where('active', true)->orderBy('sort_order')->orderBy('name_en')->get(['slug', 'name_en', 'name_ar']),
            'tourPackages' => TourPackageResource::collection(TourPackage::query()->where('active', true)->orderBy('sort_order')->orderBy('title')->get()),
            'tourPackageCategories' => TourPackageCategory::query()->where('active', true)->orderBy('sort_order')->orderBy('name_en')->get(['slug', 'name_en', 'name_ar']),
            'umrahPackages' => UmrahPackageResource::collection(UmrahPackage::query()->where('active', true)->orderBy('sort_order')->orderBy('title')->get()),
            'sections' => Section::query()
                ->where('active', true)
                ->orderBy('sort_order')
                ->orderBy('name_en')
                ->with([
                    'categories' => fn ($query) => $query->where('active', true)->orderBy('sort_order')->orderBy('name_en'),
                    'items' => fn ($query) => $query->where('active', true)->orderBy('sort_order')->orderBy('title_en'),
                ])
                ->get()
                ->map(fn (Section $section) => [
                    'slug' => $section->slug,
                    'name_en' => $section->name_en,
                    'name_ar' => $section->name_ar,
                    'badge_en' => $section->badge_en,
                    'badge_ar' => $section->badge_ar,
                    'heading_en' => $section->heading_en,
                    'heading_ar' => $section->heading_ar,
                    'highlight_en' => $section->highlight_en,
                    'highlight_ar' => $section->highlight_ar,
                    'description_en' => $section->description_en,
                    'description_ar' => $section->description_ar,
                    'categories' => $section->categories->map(fn ($category) => [
                        'slug' => $category->slug,
                        'name_en' => $category->name_en,
                        'name_ar' => $category->name_ar,
                    ])->values(),
                    'items' => $section->items->map(fn ($item) => [
                        'slug' => $item->slug,
                        'title_en' => $item->title_en,
                        'title_ar' => $item->title_ar,
                        'image_url' => $item->image_url,
                        'category' => $item->category,
                        'spec1_label_en' => $item->spec1_label_en,
                        'spec1_value_en' => $item->spec1_value_en,
                        'spec1_label_ar' => $item->spec1_label_ar,
                        'spec1_value_ar' => $item->spec1_value_ar,
                        'spec2_label_en' => $item->spec2_label_en,
                        'spec2_value_en' => $item->spec2_value_en,
                        'spec2_label_ar' => $item->spec2_label_ar,
                        'spec2_value_ar' => $item->spec2_value_ar,
                        'price' => $item->price,
                        'description_en' => $item->description_en,
                        'description_ar' => $item->description_ar,
                        'bullets_en' => $item->bullets_en,
                        'bullets_ar' => $item->bullets_ar,
                        'popular' => $item->popular,
                    ])->values(),
                ])->values(),
        ]);
    }
}
