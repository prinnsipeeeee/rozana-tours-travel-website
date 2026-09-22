<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->text('value')->nullable();
            $table->timestamps();
        });

        Schema::create('visas', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('country');
            $table->string('flag_url')->nullable();
            $table->string('category')->index();
            $table->boolean('popular')->default(false);
            $table->string('processing_time');
            $table->string('validity');
            $table->string('price');
            $table->text('description');
            $table->json('requirements');
            $table->boolean('active')->default(true)->index();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('tour_packages', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->string('location');
            $table->string('flag_url')->nullable();
            $table->string('category')->index();
            $table->string('duration');
            $table->string('price');
            $table->decimal('rating', 2, 1)->default(5);
            $table->unsignedInteger('reviews')->default(0);
            $table->text('image_url')->nullable();
            $table->boolean('popular')->default(false);
            $table->json('inclusions');
            $table->json('itinerary');
            $table->boolean('active')->default(true)->index();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('umrah_packages', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->string('makkah_hotel');
            $table->string('madinah_hotel');
            $table->string('duration');
            $table->string('price');
            $table->decimal('rating', 2, 1)->default(5);
            $table->boolean('popular')->default(false);
            $table->string('transport');
            $table->json('inclusions');
            $table->boolean('active')->default(true)->index();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('umrah_packages');
        Schema::dropIfExists('tour_packages');
        Schema::dropIfExists('visas');
        Schema::dropIfExists('site_settings');
    }
};
