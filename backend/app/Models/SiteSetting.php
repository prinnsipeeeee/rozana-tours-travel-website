<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    use HasFactory;

    public const EDITABLE_KEYS = [
        'site_name',
        'whatsapp_number',
        'phone_primary',
        'phone_secondary',
        'email',
        'address',
        'hero_badge',
        'hero_title',
        'hero_highlight',
        'hero_description',
        'visa_heading',
        'visa_description',
        'packages_heading',
        'packages_description',
    ];

    protected $fillable = ['key', 'value'];

    public static function allAsArray(): array
    {
        $settings = static::query()->pluck('value', 'key')->all();

        if (!empty($settings['whatsapp_number'])) {
            $cleaned = preg_replace('/\D+/', '', $settings['whatsapp_number']);
            $cleaned = preg_replace('/^00/', '', $cleaned);
            if (str_starts_with($cleaned, '05') && strlen($cleaned) === 10) {
                $cleaned = '966' . substr($cleaned, 1);
            } elseif (str_starts_with($cleaned, '5') && strlen($cleaned) === 9) {
                $cleaned = '966' . $cleaned;
            }
            if (!empty($cleaned)) {
                $settings['whatsapp_number'] = $cleaned;
            }
        }

        return $settings;
    }
}
