<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\AppController;
use App\Http\Controllers\Web\AuthController;

Route::middleware('guest')->group(function() {
    Route::get('/login', [AuthController::class, 'loginForm'])->name('login');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
});

Route::middleware('auth')->group(function() {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('/{any?}', AppController::class)->name('app')->where('any', '.*');
});


