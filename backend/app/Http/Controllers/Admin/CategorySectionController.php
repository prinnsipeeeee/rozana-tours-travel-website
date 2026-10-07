<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VisaCategory;
use Illuminate\View\View;

class CategorySectionController extends Controller
{
    public function index(): View
    {
        return view('admin.categories.index', [
            'categories' => VisaCategory::query()
                ->withCount('visas')
                ->orderBy('sort_order')
                ->orderBy('name_en')
                ->get(),
        ]);
    }
}
