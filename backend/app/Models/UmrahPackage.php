<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UmrahPackage extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug', 'title', 'makkah_hotel', 'madinah_hotel', 'duration', 'price',
        'rating', 'popular', 'transport', 'inclusions', 'active', 'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'inclusions' => 'array', 'popular' => 'boolean', 'active' => 'boolean',
            'rating' => 'float',
        ];
    }
}
