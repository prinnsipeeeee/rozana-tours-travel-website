<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class VisaCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug', 'name_en', 'name_ar', 'active', 'sort_order',
    ];

    protected function casts(): array
    {
        return ['active' => 'boolean'];
    }

    public function visas(): HasMany
    {
        return $this->hasMany(Visa::class, 'category', 'slug');
    }
}
