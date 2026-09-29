<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title_en');
            $table->string('title_ar');
            $table->string('subtitle_en');
            $table->string('subtitle_ar');
            $table->string('href');
            $table->string('icon');
            $table->boolean('active')->default(true)->index();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        $now = now();
        DB::table('services')->insert([
            ['slug' => 'visa', 'title_en' => 'Visa Services', 'title_ar' => 'خدمات التأشيرات', 'subtitle_en' => 'Schengen, UK, USA', 'subtitle_ar' => 'شنغن، بريطانيا، وأمريكا', 'href' => '#visa', 'icon' => 'visa', 'active' => true, 'sort_order' => 0, 'created_at' => $now, 'updated_at' => $now],
            ['slug' => 'embassy', 'title_en' => 'Embassy Services', 'title_ar' => 'خدمات السفارات', 'subtitle_en' => 'MOFA & Embassy Attestation', 'subtitle_ar' => 'تصديقات وزارة الخارجية والسفارات', 'href' => '#embassy', 'icon' => 'embassy', 'active' => true, 'sort_order' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['slug' => 'translation', 'title_en' => 'Certified Translation', 'title_ar' => 'الترجمة المعتمدة', 'subtitle_en' => 'Official Sworn Translation', 'subtitle_ar' => 'ترجمة معتمدة لجميع اللغات', 'href' => '#translation', 'icon' => 'translation', 'active' => true, 'sort_order' => 2, 'created_at' => $now, 'updated_at' => $now],
            ['slug' => 'license', 'title_en' => 'International License', 'title_ar' => 'رخصة القيادة الدولية', 'subtitle_en' => 'Accepted in 150+ countries', 'subtitle_ar' => 'معتمدة في أكثر من 150 دولة', 'href' => '#license', 'icon' => 'license', 'active' => true, 'sort_order' => 3, 'created_at' => $now, 'updated_at' => $now],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
