<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visa extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug', 'country', 'flag_url', 'category', 'popular', 'processing_time',
        'validity', 'price', 'description', 'requirements', 'active', 'sort_order',
    ];

    protected function casts(): array
    {
        return ['requirements' => 'array', 'popular' => 'boolean', 'active' => 'boolean'];
    }
}
