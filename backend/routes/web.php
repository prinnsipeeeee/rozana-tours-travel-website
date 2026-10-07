<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\CategorySectionController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\LocaleController;
use App\Http\Controllers\Admin\ResourceController;
use App\Http\Controllers\Admin\SectionController;
use App\Http\Controllers\Admin\ServiceSectionController;
use App\Http\Controllers\Admin\SettingsController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/admin');

Route::middleware('guest')->group(function () {
    Route::get('/admin/login', [AuthController::class, 'create'])->name('admin.login');
    Route::post('/admin/login', [AuthController::class, 'store'])->name('admin.login.store');
});

Route::prefix('admin')->name('admin.')->middleware('auth')->group(function () {
    Route::get('/', DashboardController::class)->name('dashboard');
    Route::post('/locale', LocaleController::class)->name('locale.update');
    Route::post('/logout', [AuthController::class, 'destroy'])->name('logout');
    Route::get('/settings', [SettingsController::class, 'edit'])->name('settings.edit');
    Route::put('/settings', [SettingsController::class, 'update'])->name('settings.update');

    Route::get('/services', [ServiceSectionController::class, 'index'])->name('services.index');
    Route::get('/services/{service:slug}/edit', [ServiceSectionController::class, 'edit'])->name('services.edit');
    Route::put('/services/{service:slug}', [ServiceSectionController::class, 'update'])->name('services.update');

    Route::post('/tour-package-categories', [ResourceController::class, 'categoryStore'])->defaults('resource', 'tour-package-categories')->name('categories.store');
    Route::put('/tour-package-categories/{record}', [ResourceController::class, 'categoryUpdate'])->defaults('resource', 'tour-package-categories')->name('categories.update')->whereNumber('record');
    Route::delete('/tour-package-categories/{record}', [ResourceController::class, 'categoryDestroy'])->defaults('resource', 'tour-package-categories')->name('categories.destroy')->whereNumber('record');

    Route::post('/visa-categories', [ResourceController::class, 'categoryStore'])->defaults('resource', 'visa-categories')->name('visa-categories.store');
    Route::put('/visa-categories/{record}', [ResourceController::class, 'categoryUpdate'])->defaults('resource', 'visa-categories')->name('visa-categories.update')->whereNumber('record');
    Route::delete('/visa-categories/{record}', [ResourceController::class, 'categoryDestroy'])->defaults('resource', 'visa-categories')->name('visa-categories.destroy')->whereNumber('record');

    Route::get('/categories', [CategorySectionController::class, 'index'])->name('categories.index');

    Route::get('/sections', [SectionController::class, 'index'])->name('sections.index');
    Route::post('/sections', [SectionController::class, 'store'])->name('sections.store');
    Route::put('/sections/{record}', [SectionController::class, 'update'])->whereNumber('record')->name('sections.update');
    Route::delete('/sections/{record}', [SectionController::class, 'destroy'])->whereNumber('record')->name('sections.destroy');
    Route::get('/sections/{section}', [SectionController::class, 'show'])->whereNumber('section')->name('sections.show');
    Route::post('/sections/{section}/categories', [SectionController::class, 'categoryStore'])->whereNumber('section')->name('sections.categories.store');
    Route::put('/sections/{section}/categories/{record}', [SectionController::class, 'categoryUpdate'])->whereNumber('section')->whereNumber('record')->name('sections.categories.update');
    Route::delete('/sections/{section}/categories/{record}', [SectionController::class, 'categoryDestroy'])->whereNumber('section')->whereNumber('record')->name('sections.categories.destroy');
    Route::get('/sections/{section}/items/create', [SectionController::class, 'itemCreate'])->whereNumber('section')->name('sections.items.create');
    Route::post('/sections/{section}/items', [SectionController::class, 'itemStore'])->whereNumber('section')->name('sections.items.store');
    Route::get('/sections/{section}/items/{record}/edit', [SectionController::class, 'itemEdit'])->whereNumber('section')->whereNumber('record')->name('sections.items.edit');
    Route::put('/sections/{section}/items/{record}', [SectionController::class, 'itemUpdate'])->whereNumber('section')->whereNumber('record')->name('sections.items.update');
    Route::delete('/sections/{section}/items/{record}', [SectionController::class, 'itemDestroy'])->whereNumber('section')->whereNumber('record')->name('sections.items.destroy');

    Route::get('/{resource}', [ResourceController::class, 'index'])->name('resources.index');
    Route::get('/{resource}/create', [ResourceController::class, 'create'])->name('resources.create');
    Route::post('/{resource}', [ResourceController::class, 'store'])->name('resources.store');
    Route::get('/{resource}/{record}/edit', [ResourceController::class, 'edit'])->name('resources.edit');
    Route::put('/{resource}/{record}', [ResourceController::class, 'update'])->name('resources.update');
    Route::delete('/{resource}/{record}', [ResourceController::class, 'destroy'])->name('resources.destroy');
})->where(['resource' => 'visas|tour-packages', 'record' => '[0-9]+']);
