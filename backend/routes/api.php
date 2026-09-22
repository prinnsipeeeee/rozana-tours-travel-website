<?php

use App\Http\Controllers\Api\SiteContentController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->name('api.v1.')->group(function () {
    Route::get('/content', SiteContentController::class)->name('content');
});
