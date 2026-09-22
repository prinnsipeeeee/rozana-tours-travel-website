<?php

namespace Database\Factories;

use App\Models\TourPackage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<TourPackage>
 */
class TourPackageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'slug' => fake()->unique()->slug(),
            'title' => fake()->city().' Holiday Package',
            'location' => fake()->city().', '.fake()->country(),
            'flag_url' => fake()->imageUrl(40, 30),
            'category' => fake()->randomElement(['tropical', 'europe', 'arabian']),
            'duration' => fake()->numberBetween(3, 10).' Days',
            'price' => fake()->numberBetween(1500, 9000).' SAR',
            'rating' => fake()->randomFloat(1, 3.5, 5),
            'reviews' => fake()->numberBetween(0, 500),
            'image_url' => fake()->imageUrl(800, 600),
            'popular' => fake()->boolean(),
            'inclusions' => [fake()->sentence(3), fake()->sentence(3)],
            'itinerary' => [['day' => 'Day 1', 'detail' => fake()->sentence()]],
            'active' => true,
            'sort_order' => fake()->numberBetween(0, 100),
        ];
    }
}
