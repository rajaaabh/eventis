<?php

namespace Database\Factories;

use App\Models\Organisateur;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrganisateurFactory extends Factory
{
    protected $model = Organisateur::class;

    public function definition(): array
    {
        return [
            'nom'         => fake()->company(),
            'email'       => fake()->unique()->safeEmail(),
            'telephone'   => fake()->phoneNumber(),
            'description' => fake()->paragraph(),
        ];
    }
}

