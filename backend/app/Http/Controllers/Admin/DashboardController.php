<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\TourPackage;
use App\Models\Visa;
use Illuminate\View\View;

class DashboardController extends Controller
{
    public function __invoke(): View
    {
        return view('admin.dashboard', ['counts' => [
            __('admin.resources.services') => Service::count(),
            __('admin.resources.visas') => Visa::count(),
            __('admin.resources.tour_packages') => TourPackage::count(),
        ]]);
    }
}
