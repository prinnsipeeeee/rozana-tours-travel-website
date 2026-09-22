<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TourPackageResource;
use App\Http\Resources\UmrahPackageResource;
use App\Http\Resources\VisaResource;
use App\Models\SiteSetting;
use App\Models\TourPackage;
use App\Models\UmrahPackage;
use App\Models\Visa;
use Illuminate\Http\JsonResponse;

class SiteContentController extends Controller
{
    public function __invoke(): JsonResponse
    {
        return response()->json([
            'settings' => SiteSetting::allAsArray(),
            'visas' => VisaResource::collection(Visa::query()->where('active', true)->orderBy('sort_order')->orderBy('country')->get()),
            'tourPackages' => TourPackageResource::collection(TourPackage::query()->where('active', true)->orderBy('sort_order')->orderBy('title')->get()),
            'umrahPackages' => UmrahPackageResource::collection(UmrahPackage::query()->where('active', true)->orderBy('sort_order')->orderBy('title')->get()),
        ]);
    }
}
