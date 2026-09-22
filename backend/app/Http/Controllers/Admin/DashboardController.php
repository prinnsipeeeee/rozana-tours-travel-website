<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TourPackage;
use App\Models\UmrahPackage;
use App\Models\Visa;
use Illuminate\View\View;

class DashboardController extends Controller
{
    public function __invoke(): View
    {
        return view('admin.dashboard', ['counts' => [
            'Visas' => Visa::count(),
            'Tour packages' => TourPackage::count(),
            'Umrah packages' => UmrahPackage::count(),
        ]]);
    }
}
