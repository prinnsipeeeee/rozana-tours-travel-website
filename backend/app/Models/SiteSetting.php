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
        'umrah_heading',
        'umrah_description',
    ];

    protected $fillable = ['key', 'value'];

    public static function allAsArray(): array
    {
        return static::query()->pluck('value', 'key')->all();
    }
}
