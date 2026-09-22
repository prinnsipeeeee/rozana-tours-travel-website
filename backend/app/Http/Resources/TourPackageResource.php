<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TourPackageResource extends JsonResource
{
    /** @return array<string, mixed> */
    public function toArray(Request $request): array
    {
        $imageUrl = $this->image_url;
        if (str_starts_with((string) $imageUrl, '/')) {
            $imageUrl = url($imageUrl);
        }

        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'title' => $this->title,
            'location' => $this->location,
            'flag_url' => $this->flag_url,
            'category' => $this->category,
            'duration' => $this->duration,
            'price' => $this->price,
            'rating' => $this->rating,
            'reviews' => $this->reviews,
            'image_url' => $imageUrl,
            'popular' => $this->popular,
            'inclusions' => $this->inclusions,
            'itinerary' => $this->itinerary,
        ];
    }
}
