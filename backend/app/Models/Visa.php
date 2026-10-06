<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visa extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug', 'country', 'country_ar', 'flag_url', 'category', 'popular', 'processing_time', 'processing_time_ar',
        'validity', 'validity_ar', 'price', 'description', 'description_ar', 'requirements', 'requirements_ar', 'active', 'sort_order',
    ];

    protected function casts(): array
    {
        return ['requirements' => 'array', 'requirements_ar' => 'array', 'popular' => 'boolean', 'active' => 'boolean'];
    }

    public function visaCategory()
    {
        return $this->belongsTo(VisaCategory::class, 'category', 'slug');
    }
}
