<?php

namespace Database\Factories;

use App\Models\Categorie;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategorieFactory extends Factory
{
    protected $model = Categorie::class;

    public function definition(): array
    {
        $libelles = [
            'Musique', 'Culture', 'Sport', 'Business',
            'Formation', 'Gastronomie', 'Technologie', 'Art'
        ];

        return [
            'libelle' => $this->faker->unique()->randomElement($libelles),
        ];
    }
}
