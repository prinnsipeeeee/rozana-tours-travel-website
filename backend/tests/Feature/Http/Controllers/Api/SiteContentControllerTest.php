<?php

namespace Tests\Feature\Http\Controllers\Api;

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
        SiteSetting::factory()->create(['key' => 'site_name', 'value' => 'Rozana Tours & Travels']);
        Visa::factory()->count(6)->create();
        Visa::factory()->create(['active' => false]);
        TourPackage::factory()->count(6)->create();
        UmrahPackage::factory()->count(3)->create();

        $this->getJson('/api/v1/content')
            ->assertOk()
            ->assertJsonPath('settings.site_name', 'Rozana Tours & Travels')
            ->assertJsonCount(6, 'visas')
            ->assertJsonCount(6, 'tourPackages')
            ->assertJsonCount(3, 'umrahPackages');
    }
}
