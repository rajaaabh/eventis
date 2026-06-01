<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Localisation;
use App\Models\Categorie;
use App\Models\Organisateur;
use App\Models\Evenement;
use App\Models\Inscription;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
        ]);

        Localisation::factory(10)->create();
        Categorie::factory(8)->create();
        Organisateur::factory(10)->create();
        Evenement::factory(15)->create();
        Inscription::factory(20)->create();
    }
}
