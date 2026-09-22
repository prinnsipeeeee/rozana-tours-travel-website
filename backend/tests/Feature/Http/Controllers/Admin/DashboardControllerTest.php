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
}
