<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\LocaleController;
use App\Http\Controllers\Admin\ResourceController;
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

    Route::get('/{resource}', [ResourceController::class, 'index'])->name('resources.index');
    Route::get('/{resource}/create', [ResourceController::class, 'create'])->name('resources.create');
    Route::post('/{resource}', [ResourceController::class, 'store'])->name('resources.store');
    Route::get('/{resource}/{record}/edit', [ResourceController::class, 'edit'])->name('resources.edit');
    Route::put('/{resource}/{record}', [ResourceController::class, 'update'])->name('resources.update');
    Route::delete('/{resource}/{record}', [ResourceController::class, 'destroy'])->name('resources.destroy');
})->where(['resource' => 'visas|tour-packages', 'record' => '[0-9]+']);
