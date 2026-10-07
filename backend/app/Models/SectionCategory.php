<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SectionCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'section_id', 'slug', 'name_en', 'name_ar', 'active', 'sort_order',
    ];

    protected function casts(): array
    {
        return ['active' => 'boolean'];
    }

    public function section(): BelongsTo
    {
        return $this->belongsTo(Section::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(SectionItem::class, 'category', 'slug')
            ->whereColumn('section_items.section_id', 'section_categories.section_id');
    }
}
