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
            $table->string('country_ar')->nullable()->after('country');
            $table->string('processing_time_ar')->nullable()->after('processing_time');
            $table->string('validity_ar')->nullable()->after('validity');
            $table->text('description_ar')->nullable()->after('description');
            $table->json('requirements_ar')->nullable()->after('requirements');
        });

        $translations = [
            'schengen' => ['تأشيرة شنغن (أوروبا)', '3 - 5 أيام عمل', 'تصل إلى 90 يوماً / دخول متعدد', 'سافر بحرية عبر 29 دولة أوروبية تشمل فرنسا وإيطاليا وألمانيا وإسبانيا.', ['جواز سفر أصلي صالح لمدة 6 أشهر فأكثر', 'صورة من الهوية الوطنية أو الإقامة', 'صورتان شخصيتان بخلفية بيضاء', 'كشف حساب بنكي مختوم', 'حجوزات طيران وفندق']],
            'uk' => ['المملكة المتحدة (بريطانيا)', '24 - 48 ساعة', '6 أشهر / 2 إلى 5 سنوات', 'إجراءات سريعة لتأشيرة الزيارة إلى لندن ومدن بريطانيا.', ['نسخة واضحة من جواز السفر', 'صورة الهوية أو الإقامة', 'تفاصيل حجز الطيران والإقامة', 'تعبئة النموذج الإلكتروني']],
            'usa' => ['الولايات المتحدة (B1/B2)', '5 - 7 أيام عمل', 'تصل إلى 10 سنوات دخول متعدد', 'مساعدة متكاملة للتأشيرة السياحية والتجارية الأمريكية وحجز المقابلة ومراجعة المستندات.', ['صفحة تأكيد استمارة DS-160', 'جواز سفر ساري وصورة أمريكية', 'تأكيد موعد السفارة', 'خطاب الراتب وكشف الحساب']],
            'japan' => ['اليابان وشرق آسيا', '3 - 4 أيام عمل', '90 يوماً', 'استكشف طوكيو وكيوتو مع إجراءات التأشيرة الإلكترونية الرسمية.', ['نسخة جواز السفر', 'صورة شخصية بخلفية بيضاء', 'كشف حساب بنكي', 'حجز طيران مؤكد']],
        ];

        foreach ($translations as $slug => [$country, $processingTime, $validity, $description, $requirements]) {
            DB::table('visas')->where('slug', $slug)->update([
                'country_ar' => $country,
                'processing_time_ar' => $processingTime,
                'validity_ar' => $validity,
                'description_ar' => $description,
                'requirements_ar' => json_encode($requirements, JSON_UNESCAPED_UNICODE),
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('visas', function (Blueprint $table) {
            $table->dropColumn(['country_ar', 'processing_time_ar', 'validity_ar', 'description_ar', 'requirements_ar']);
        });
    }
};
