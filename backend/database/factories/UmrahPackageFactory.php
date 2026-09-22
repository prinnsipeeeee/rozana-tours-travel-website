<?php

namespace Database\Factories;

use App\Models\UmrahPackage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<UmrahPackage>
 */
class UmrahPackageFactory extends Factory
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
            'title' => fake()->words(4, true).' Umrah Package',
            'makkah_hotel' => fake()->company().' Makkah',
            'madinah_hotel' => fake()->company().' Madinah',
            'duration' => fake()->numberBetween(3, 10).' Days',
            'price' => fake()->numberBetween(1500, 6000).' SAR',
            'rating' => fake()->randomFloat(1, 3.5, 5),
            'popular' => fake()->boolean(),
            'transport' => fake()->randomElement(['Private SUV', 'Private sedan', 'Coach']),
            'inclusions' => [fake()->sentence(3), fake()->sentence(3)],
            'active' => true,
            'sort_order' => fake()->numberBetween(0, 100),
        ];
    }
}
