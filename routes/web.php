<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OAuth\OAuthController;
use App\Http\Controllers\GmailController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::prefix("oauth")->group(function () {
        Route::get("/",[OAuthController::class,"show"]);
        Route::get("/redirect",[OAuthController::class,"redirect"]);
        Route::get("/callback",[OAuthController::class,"callback"]);
        Route::post("/process",[OAuthController::class,"processOAuthData"]);
        Route::get("/user",[OAuthController::class,"getUser"]);
    });

    Route::prefix("gmail")->group(function () {
        Route::get("/",[GmailController::class,"index"]);
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
