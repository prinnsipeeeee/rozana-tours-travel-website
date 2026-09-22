<?php

namespace Database\Factories;

use App\Models\Visa;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Visa>
 */
class VisaFactory extends Factory
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
            'country' => fake()->country().' Tourist Visa',
            'flag_url' => fake()->imageUrl(80, 60),
            'category' => fake()->randomElement(['europe', 'americas', 'asia']),
            'popular' => fake()->boolean(),
            'processing_time' => fake()->numberBetween(1, 15).' working days',
            'validity' => fake()->randomElement(['30 days', '90 days', '1 year']),
            'price' => fake()->numberBetween(200, 900).' SAR',
            'description' => fake()->sentence(),
            'requirements' => [fake()->sentence(3), fake()->sentence(3)],
            'active' => true,
            'sort_order' => fake()->numberBetween(0, 100),
        ];
    }
}
