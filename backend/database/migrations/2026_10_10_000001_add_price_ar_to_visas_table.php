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
        Schema::table('visas', function (Blueprint $table) {
            $table->string('price_ar')->nullable()->after('price');
        });

        $arabicPrices = [
            'schengen' => '450 ريال',
            'uk' => '380 ريال',
            'usa' => '650 ريال',
            'japan' => '350 ريال',
            'turkey' => '280 ريال',
            'canada' => '590 ريال',
        ];

        foreach ($arabicPrices as $slug => $priceAr) {
            DB::table('visas')->where('slug', $slug)->update(['price_ar' => $priceAr]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('visas', function (Blueprint $table) {
            $table->dropColumn('price_ar');
        });
    }
};
