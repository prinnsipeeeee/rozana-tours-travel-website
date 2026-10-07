<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Section extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug', 'name_en', 'name_ar',
        'badge_en', 'badge_ar', 'heading_en', 'heading_ar',
        'highlight_en', 'highlight_ar', 'description_en', 'description_ar',
        'active', 'sort_order',
    ];

    protected function casts(): array
    {
        return ['active' => 'boolean'];
    }

    public function categories(): HasMany
    {
        return $this->hasMany(SectionCategory::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(SectionItem::class);
    }
}
