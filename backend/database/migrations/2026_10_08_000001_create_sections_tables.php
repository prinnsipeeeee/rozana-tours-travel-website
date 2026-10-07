<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sections', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name_en');
            $table->string('name_ar');
            $table->string('badge_en')->nullable();
            $table->string('badge_ar')->nullable();
            $table->string('heading_en')->nullable();
            $table->string('heading_ar')->nullable();
            $table->string('highlight_en')->nullable();
            $table->string('highlight_ar')->nullable();
            $table->text('description_en')->nullable();
            $table->text('description_ar')->nullable();
            $table->boolean('active')->default(true)->index();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('section_categories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('section_id')->constrained()->cascadeOnDelete();
            $table->string('slug');
            $table->string('name_en');
            $table->string('name_ar');
            $table->boolean('active')->default(true)->index();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
            $table->unique(['section_id', 'slug']);
        });

        Schema::create('section_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('section_id')->constrained()->cascadeOnDelete();
            $table->string('slug');
            $table->string('title_en');
            $table->string('title_ar')->nullable();
            $table->string('image_url')->nullable();
            $table->string('category')->nullable();
            $table->string('spec1_label_en')->nullable();
            $table->string('spec1_value_en')->nullable();
            $table->string('spec1_label_ar')->nullable();
            $table->string('spec1_value_ar')->nullable();
            $table->string('spec2_label_en')->nullable();
            $table->string('spec2_value_en')->nullable();
            $table->string('spec2_label_ar')->nullable();
            $table->string('spec2_value_ar')->nullable();
            $table->string('price')->nullable();
            $table->text('description_en')->nullable();
            $table->text('description_ar')->nullable();
            $table->json('bullets_en')->nullable();
            $table->json('bullets_ar')->nullable();
            $table->boolean('popular')->default(false);
            $table->boolean('active')->default(true)->index();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
            $table->unique(['section_id', 'slug']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('section_items');
        Schema::dropIfExists('section_categories');
        Schema::dropIfExists('sections');
    }
};
