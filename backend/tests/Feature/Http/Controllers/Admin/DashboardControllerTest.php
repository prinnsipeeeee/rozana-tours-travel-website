<?php

namespace Tests\Feature\Http\Controllers\Admin;

use Tests\TestCase;

class DashboardControllerTest extends TestCase
{
    public function test_root_redirects_to_admin_and_guest_is_sent_to_login(): void
    {
        $this->get('/')->assertRedirect('/admin');
        $this->get('/admin')->assertRedirect('/admin/login');
    }

    public function test_login_defaults_to_arabic_and_right_to_left_layout(): void
    {
        $this->get('/admin/login')
            ->assertSee('<html lang="ar" dir="rtl">', false)
            ->assertSee('مرحباً بعودتك');
    }
}
