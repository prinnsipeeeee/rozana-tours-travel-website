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
        Schema::create('tour_package_categories', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name_en');
            $table->string('name_ar');
            $table->boolean('active')->default(true)->index();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        $now = now();
        DB::table('tour_package_categories')->insert([
            ['slug' => 'tropical', 'name_en' => 'Tropical Islands', 'name_ar' => 'الجزر الاستوائية', 'active' => true, 'sort_order' => 0, 'created_at' => $now, 'updated_at' => $now],
            ['slug' => 'europe', 'name_en' => 'European Escapes', 'name_ar' => 'وجهات أوروبا', 'active' => true, 'sort_order' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['slug' => 'arabian', 'name_en' => 'Arabian Luxury', 'name_ar' => 'الفخامة العربية', 'active' => true, 'sort_order' => 2, 'created_at' => $now, 'updated_at' => $now],
        ]);

        DB::table('tour_packages')->distinct()->pluck('category')->each(function (?string $slug) use ($now) {
            if (! $slug || DB::table('tour_package_categories')->where('slug', $slug)->exists()) {
                return;
            }

            DB::table('tour_package_categories')->insert([
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

    public function down(): void
    {
        Schema::dropIfExists('tour_package_categories');
    }
};
