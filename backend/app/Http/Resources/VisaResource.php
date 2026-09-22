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
            'flag_url' => $this->flag_url,
            'category' => $this->category,
            'popular' => $this->popular,
            'processing_time' => $this->processing_time,
            'validity' => $this->validity,
            'price' => $this->price,
            'description' => $this->description,
            'requirements' => $this->requirements,
        ];
    }
}
