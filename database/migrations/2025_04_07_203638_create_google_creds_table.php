<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('google_creds', function (Blueprint $table) {
            $table->id();
            $table->string("email")->unique();
            $table->string("avatar")->nullable();
            $table->integer("expiresIn");
            $table->string("token");
            $table->string("refreshToken")->nullable();
            $table->foreignId("user_id")->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('google_creds');
    }
};
