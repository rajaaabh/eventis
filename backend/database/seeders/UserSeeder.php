<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'email'    => 'admin@eventis.ci',
            'password' => Hash::make('admin@12'),
        ]);
    }
}
