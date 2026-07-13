<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('evenements', function (Blueprint $table) {
            $table->string('statut')->default('publie')->change();
        });
    }

    public function down(): void
    {
        Schema::table('evenements', function (Blueprint $table) {
            $table->enum('statut', ['publie', 'annule', 'termine'])->default('publie')->change();
        });
    }
};
