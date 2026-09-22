<?php

namespace Tests\Feature\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;
use Tests\TestCase;

class AuthControllerTest extends TestCase
{
    use LazilyRefreshDatabase;

    public function test_valid_credentials_authenticate_the_admin(): void
    {
        $admin = User::factory()->create(['password' => 'a-secure-password']);

        $this->post('/admin/login', [
            'email' => $admin->email,
            'password' => 'a-secure-password',
        ])->assertRedirect('/admin');

        $this->assertAuthenticatedAs($admin);
    }

    public function test_invalid_credentials_return_a_login_error(): void
    {
        $admin = User::factory()->create(['password' => 'a-secure-password']);

        $this->post('/admin/login', [
            'email' => $admin->email,
            'password' => 'wrong-password',
        ])->assertInvalid(['email']);

        $this->assertGuest();
    }
}
