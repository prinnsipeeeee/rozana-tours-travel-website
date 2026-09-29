<?php

namespace Tests\Feature\Http\Controllers\Admin;

use App\Models\Service;
use App\Models\User;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;
use Tests\TestCase;

class ServiceSectionControllerTest extends TestCase
{
    use LazilyRefreshDatabase;

    public function test_admin_can_open_the_services_menu_and_each_section_editor(): void
    {
        $admin = User::factory()->create();

        $this->actingAs($admin)->get('/admin/services')
            ->assertOk()
            ->assertSee('خدمات التأشيرات')
            ->assertSee('خدمات السفارات')
            ->assertSee('الترجمة المعتمدة')
            ->assertSee('رخصة القيادة الدولية');

        $this->actingAs($admin)->get('/admin/services/visa/edit')
            ->assertOk()
            ->assertSee('Fast-Track Worldwide Visas');
    }

    public function test_admin_can_update_navigation_and_full_section_content(): void
    {
        $admin = User::factory()->create();
        $service = Service::query()->where('slug', 'visa')->firstOrFail();
        $content = config('service_sections.visa');
        $content['badge_en'] = 'Updated visa heading';

        $this->actingAs($admin)->put('/admin/services/visa', [
            'title_en' => 'Visa Assistance',
            'title_ar' => $service->title_ar,
            'subtitle_en' => $service->subtitle_en,
            'subtitle_ar' => $service->subtitle_ar,
            'href' => '#visa',
            'icon' => 'visa',
            'active' => '1',
            'sort_order' => '8',
            'content' => $this->formContent($content),
        ])->assertRedirect();

        $service->refresh();

        $this->assertSame('Visa Assistance', $service->title_en);
        $this->assertSame(8, $service->sort_order);
        $this->assertSame('Updated visa heading', $service->content['badge_en']);
        $this->assertSame($content['tabs'][0]['label_en'], $service->content['tabs'][0]['label_en']);
    }

    public function test_invalid_section_update_is_rejected_without_changing_the_service(): void
    {
        $admin = User::factory()->create();
        $service = Service::query()->where('slug', 'visa')->firstOrFail();

        $this->actingAs($admin)->from('/admin/services/visa/edit')->put('/admin/services/visa', [
            'title_en' => '',
            'title_ar' => $service->title_ar,
            'subtitle_en' => $service->subtitle_en,
            'subtitle_ar' => $service->subtitle_ar,
            'href' => 'https://example.com',
            'icon' => 'unknown',
            'content' => $this->formContent(config('service_sections.visa')),
        ])->assertRedirect('/admin/services/visa/edit')
            ->assertInvalid(['title_en', 'href', 'icon']);

        $this->assertSame($service->title_en, $service->fresh()->title_en);
    }

    private function formContent(mixed $value): mixed
    {
        if (! is_array($value)) {
            return $value;
        }

        if (array_is_list($value) && ($value === [] || ! is_array($value[0]))) {
            return implode("\n", $value);
        }

        return collect($value)->map(fn (mixed $item): mixed => $this->formContent($item))->all();
    }
}
