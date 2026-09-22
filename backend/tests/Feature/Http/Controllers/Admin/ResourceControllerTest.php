<?php

namespace Tests\Feature\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Visa;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;
use Tests\TestCase;

class ResourceControllerTest extends TestCase
{
    use LazilyRefreshDatabase;

    public function test_unauthenticated_request_redirects_to_admin_login(): void
    {
        $this->get('/admin/visas')->assertRedirect('/admin/login');
    }

    public function test_valid_payload_creates_a_visible_visa(): void
    {
        $admin = User::factory()->create();

        $this->actingAs($admin)->post('/admin/visas', [
            'slug' => 'australia',
            'country' => 'Australia Tourist Visa',
            'flag_url' => 'https://flagcdn.com/w80/au.png',
            'category' => 'asia',
            'processing_time' => '5 working days',
            'validity' => '12 months',
            'price' => '500 SAR',
            'description' => 'Tourist visa assistance.',
            'requirements' => "Passport\nBank statement",
            'active' => '1',
            'sort_order' => '10',
        ])->assertRedirect('/admin/visas');

        $this->assertDatabaseHas('visas', [
            'slug' => 'australia',
            'country' => 'Australia Tourist Visa',
            'active' => true,
        ]);
        $this->assertSame(
            ['Passport', 'Bank statement'],
            Visa::query()->where('slug', 'australia')->firstOrFail()->requirements,
        );
    }

    public function test_invalid_payload_returns_validation_errors_without_creating_a_visa(): void
    {
        $admin = User::factory()->create();

        $this->actingAs($admin)->post('/admin/visas', [
            'slug' => 'invalid',
            'category' => 'unknown',
        ])->assertInvalid(['country', 'category', 'processing_time', 'validity', 'price', 'description', 'requirements']);

        $this->assertDatabaseMissing('visas', ['slug' => 'invalid']);
    }
}
