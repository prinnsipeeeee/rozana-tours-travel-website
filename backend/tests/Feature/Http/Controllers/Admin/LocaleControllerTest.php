<?php

namespace Tests\Feature\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;
use Tests\TestCase;

class LocaleControllerTest extends TestCase
{
    use LazilyRefreshDatabase;

    public function test_admin_defaults_to_arabic_and_right_to_left_layout(): void
    {
        $admin = User::factory()->create();

        $response = $this->actingAs($admin)->get('/admin');

        $response
            ->assertSee('<html lang="ar" dir="rtl">', false)
            ->assertSee('نظرة عامة')
            ->assertSee('لغة الواجهة');
    }

    public function test_arabic_admin_translates_resource_and_settings_forms_without_changing_content_fields(): void
    {
        $admin = User::factory()->create();

        $resourceResponse = $this->actingAs($admin)->get('/admin/visas/create');
        $settingsResponse = $this->get('/admin/settings');

        $resourceResponse
            ->assertSee('الدولة / اسم التأشيرة')
            ->assertSee('name="country"', false);
        $settingsResponse
            ->assertSee('بيانات النشاط')
            ->assertSee('name="site_name"', false);
    }

    public function test_authenticated_admin_can_switch_the_interface_to_english(): void
    {
        $admin = User::factory()->create();

        $response = $this->actingAs($admin)
            ->from('/admin')
            ->post('/admin/locale', ['locale' => 'en']);

        $response
            ->assertRedirect('/admin')
            ->assertSessionHas('admin_locale', 'en');

        $this->get('/admin')
            ->assertSee('<html lang="en" dir="ltr">', false)
            ->assertSee('Overview')
            ->assertSee('Interface language');
    }

    public function test_unsupported_locale_is_rejected_without_changing_the_interface(): void
    {
        $admin = User::factory()->create();

        $response = $this->actingAs($admin)
            ->from('/admin')
            ->post('/admin/locale', ['locale' => 'fr']);

        $response
            ->assertRedirect('/admin')
            ->assertSessionHasErrors('locale')
            ->assertSessionMissing('admin_locale');
    }

    public function test_guest_cannot_change_the_admin_interface_language(): void
    {
        $this->post('/admin/locale', ['locale' => 'en'])
            ->assertRedirect('/admin/login')
            ->assertSessionMissing('admin_locale');
    }
}
