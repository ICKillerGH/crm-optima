<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CitiesController;
use App\Http\Controllers\Api\StatesController;
use App\Http\Controllers\Api\ClientsController;

Route::middleware('auth:sanctum')->group(function() {
    Route::prefix('/states')->name('states.')->group(function() {
        Route::get('/', [StatesController::class, 'index'])->name('index');
    });

    Route::prefix('/cities')->name('cities.')->group(function() {
        Route::get('/', [CitiesController::class, 'index'])->name('index');
    });

    Route::prefix('/clients')->name('clients.')->group(function() {
        Route::get('/', [ClientsController::class, 'index'])->name('index');
        Route::post('/', [ClientsController::class, 'create'])->name('create');
        Route::get('/{client}', [ClientsController::class, 'show'])->name('show');
    });
});
