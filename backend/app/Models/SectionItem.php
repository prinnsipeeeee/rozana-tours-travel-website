<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SectionItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'section_id', 'slug', 'title_en', 'title_ar', 'image_url', 'category',
        'spec1_label_en', 'spec1_value_en', 'spec1_label_ar', 'spec1_value_ar',
        'spec2_label_en', 'spec2_value_en', 'spec2_label_ar', 'spec2_value_ar',
        'price', 'description_en', 'description_ar',
        'bullets_en', 'bullets_ar',
        'popular', 'active', 'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'active' => 'boolean',
            'popular' => 'boolean',
            'bullets_en' => 'array',
            'bullets_ar' => 'array',
        ];
    }

    public function section(): BelongsTo
    {
        return $this->belongsTo(Section::class);
    }
}
