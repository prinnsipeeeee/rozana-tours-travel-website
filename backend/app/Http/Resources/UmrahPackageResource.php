<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UmrahPackageResource extends JsonResource
{
    /** @return array<string, mixed> */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'title' => $this->title,
            'makkah_hotel' => $this->makkah_hotel,
            'madinah_hotel' => $this->madinah_hotel,
            'duration' => $this->duration,
            'price' => $this->price,
            'rating' => $this->rating,
            'popular' => $this->popular,
            'transport' => $this->transport,
            'inclusions' => $this->inclusions,
        ];
    }
}
