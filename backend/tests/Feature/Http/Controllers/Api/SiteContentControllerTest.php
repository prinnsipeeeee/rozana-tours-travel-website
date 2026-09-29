<?php

namespace Tests\Feature\Http\Controllers\Api;

use App\Models\Service;
use App\Models\SiteSetting;
use App\Models\TourPackage;
use App\Models\UmrahPackage;
use App\Models\Visa;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;
use Tests\TestCase;

class SiteContentControllerTest extends TestCase
{
    use LazilyRefreshDatabase;

    public function test_returns_only_published_landing_page_content(): void
    {
        Service::query()->delete();
        SiteSetting::factory()->create(['key' => 'site_name', 'value' => 'Rozana Tours & Travels']);
        Service::factory()->create(['title_en' => 'Second Service', 'sort_order' => 2]);
        Service::factory()->create(['slug' => 'visa', 'title_en' => 'First Service', 'sort_order' => 1]);
        Service::factory()->create(['active' => false]);
        Visa::factory()->count(6)->create();
        Visa::factory()->create(['active' => false]);
        TourPackage::factory()->count(6)->create();
        UmrahPackage::factory()->count(3)->create();

        $this->getJson('/api/v1/content')
            ->assertOk()
            ->assertJsonPath('settings.site_name', 'Rozana Tours & Travels')
            ->assertJsonCount(2, 'services')
            ->assertJsonPath('services.0.title_en', 'First Service')
            ->assertJsonPath('services.0.content.badge_en', 'Fast-Track Worldwide Visas')
            ->assertJsonPath('services.1.title_en', 'Second Service')
            ->assertJsonCount(6, 'visas')
            ->assertJsonCount(6, 'tourPackages')
            ->assertJsonCount(3, 'tourPackageCategories')
            ->assertJsonCount(3, 'umrahPackages');
    }
}
