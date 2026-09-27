<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TourPackageCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug', 'name_en', 'name_ar', 'active', 'sort_order',
    ];

    protected function casts(): array
    {
        return ['active' => 'boolean'];
    }

    public function tourPackages(): HasMany
    {
        return $this->hasMany(TourPackage::class, 'category', 'slug');
    }
}
