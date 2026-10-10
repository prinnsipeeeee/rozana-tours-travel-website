<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VisaResource extends JsonResource
{
    /** @return array<string, mixed> */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'country' => $this->country,
            'country_ar' => $this->country_ar,
            'flag_url' => $this->flag_url,
            'category' => $this->category,
            'popular' => $this->popular,
            'processing_time' => $this->processing_time,
            'processing_time_ar' => $this->processing_time_ar,
            'validity' => $this->validity,
            'validity_ar' => $this->validity_ar,
            'price' => $this->price,
            'price_ar' => $this->price_ar,
            'description' => $this->description,
            'description_ar' => $this->description_ar,
            'requirements' => $this->requirements,
            'requirements_ar' => $this->requirements_ar,
        ];
    }
}
