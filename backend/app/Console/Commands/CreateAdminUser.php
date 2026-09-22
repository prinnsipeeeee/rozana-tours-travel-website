<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class CreateAdminUser extends Command
{
    protected $signature = 'admin:create {--name=} {--email=} {--password=}';

    protected $description = 'Create or update the administrator account';

    public function handle(): int
    {
        $name = $this->option('name') ?: $this->ask('Name', 'Rozana Administrator');
        $email = $this->option('email') ?: $this->ask('Email');
        $password = $this->option('password') ?: $this->secret('Password (at least 12 characters)');

        if (! filter_var($email, FILTER_VALIDATE_EMAIL) || strlen((string) $password) < 12) {
            $this->error('Use a valid email and a password with at least 12 characters.');

            return self::FAILURE;
        }

        User::updateOrCreate(['email' => $email], ['name' => $name, 'password' => $password]);
        $this->info('Administrator account is ready.');

        return self::SUCCESS;
    }
}
