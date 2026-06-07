<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('libelle')->unique();
            $table->timestamps();
            $table->softDeletes();
            $table->index('libelle');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
