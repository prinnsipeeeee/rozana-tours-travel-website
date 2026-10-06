<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('visa_categories', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name_en');
            $table->string('name_ar');
            $table->boolean('active')->default(true)->index();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        $now = now();
        DB::table('visa_categories')->insert([
            ['slug' => 'europe', 'name_en' => 'Europe & UK', 'name_ar' => 'أوروبا وبريطانيا', 'active' => true, 'sort_order' => 0, 'created_at' => $now, 'updated_at' => $now],
            ['slug' => 'americas', 'name_en' => 'USA & Canada', 'name_ar' => 'أمريكا وكندا', 'active' => true, 'sort_order' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['slug' => 'asia', 'name_en' => 'Asia', 'name_ar' => 'آسيا وشرق آسيا', 'active' => true, 'sort_order' => 2, 'created_at' => $now, 'updated_at' => $now],
        ]);

        if (Schema::hasTable('visas')) {
            DB::table('visas')->distinct()->pluck('category')->each(function (?string $slug) use ($now) {
                if (! $slug || DB::table('visa_categories')->where('slug', $slug)->exists()) {
                    return;
                }

                DB::table('visa_categories')->insert([
                    'slug' => $slug,
                    'name_en' => Str::headline($slug),
                    'name_ar' => Str::headline($slug),
                    'active' => true,
                    'sort_order' => 100,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('visa_categories');
    }
};
