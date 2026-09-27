<?php

namespace Tests\Feature\Http\Controllers\Admin;

use App\Models\TourPackage;
use App\Models\TourPackageCategory;
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

    public function test_tour_package_form_loads_category_options_from_database(): void
    {
        $admin = User::factory()->create();
        TourPackageCategory::query()->create([
            'slug' => 'adventure',
            'name_en' => 'Adventure Travel',
            'name_ar' => 'رحلات المغامرات',
            'active' => true,
            'sort_order' => 10,
        ]);

        $this->actingAs($admin)->get('/admin/tour-packages/create')
            ->assertOk()
            ->assertSee('value="adventure"', false)
            ->assertSee('رحلات المغامرات')
            ->assertSee('id="category-add"', false)
            ->assertSee('id="category-edit"', false)
            ->assertSee('id="category-delete"', false);

        $this->actingAs($admin)->get('/admin/tour-package-categories')->assertNotFound();
    }

    public function test_admin_can_create_and_edit_a_tour_package_category(): void
    {
        $admin = User::factory()->create();

        $this->actingAs($admin)->postJson('/admin/tour-package-categories', [
            'slug' => 'adventure',
            'name_en' => 'Adventure Travel',
            'name_ar' => 'رحلات المغامرات',
            'active' => '1',
            'sort_order' => '5',
        ])->assertCreated()->assertJsonPath('category.slug', 'adventure');

        $category = TourPackageCategory::query()->where('slug', 'adventure')->firstOrFail();
        TourPackage::factory()->create(['category' => 'adventure']);

        $this->actingAs($admin)->putJson("/admin/tour-package-categories/{$category->id}", [
            'slug' => 'active-adventure',
            'name_en' => 'Active Adventure',
            'name_ar' => 'مغامرات نشطة',
            'active' => '1',
            'sort_order' => '6',
        ])->assertOk()->assertJsonPath('category.slug', 'active-adventure');

        $this->assertDatabaseHas('tour_package_categories', ['slug' => 'active-adventure']);
        $this->assertDatabaseHas('tour_packages', ['category' => 'active-adventure']);
    }

    public function test_category_in_use_cannot_be_deleted_until_packages_are_updated(): void
    {
        $admin = User::factory()->create();
        $category = TourPackageCategory::query()->where('slug', 'tropical')->firstOrFail();
        $package = TourPackage::factory()->create(['category' => $category->slug]);

        $this->actingAs($admin)->deleteJson("/admin/tour-package-categories/{$category->id}")
            ->assertUnprocessable()
            ->assertJsonPath('message', __('admin.resources.category_in_use'));
        $this->assertDatabaseHas('tour_package_categories', ['id' => $category->id]);

        $package->update(['category' => 'europe']);
        $this->actingAs($admin)->deleteJson("/admin/tour-package-categories/{$category->id}")
            ->assertNoContent();
        $this->assertDatabaseMissing('tour_package_categories', ['id' => $category->id]);
    }
}
