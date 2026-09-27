<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TourPackage extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug', 'title', 'location', 'flag_url', 'category', 'duration', 'price',
        'rating', 'reviews', 'image_url', 'popular', 'inclusions', 'itinerary',
        'active', 'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'inclusions' => 'array', 'itinerary' => 'array', 'popular' => 'boolean',
            'active' => 'boolean', 'rating' => 'float',
        ];
    }

    public function categoryRecord(): BelongsTo
    {
        return $this->belongsTo(TourPackageCategory::class, 'category', 'slug');
    }
}
