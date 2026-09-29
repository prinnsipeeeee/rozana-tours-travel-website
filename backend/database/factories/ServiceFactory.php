<?php

namespace Database\Factories;

use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Service>
 */
class ServiceFactory extends Factory
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
            'title_en' => fake()->words(2, true),
            'title_ar' => 'خدمة سفر',
            'subtitle_en' => fake()->sentence(4),
            'subtitle_ar' => 'وصف خدمة السفر',
            'href' => '#'.fake()->slug(),
            'icon' => fake()->randomElement(['visa', 'embassy', 'translation', 'license']),
            'active' => true,
            'sort_order' => fake()->numberBetween(0, 100),
        ];
    }
}
