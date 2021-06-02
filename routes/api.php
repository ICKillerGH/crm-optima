<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CitiesController;
use App\Http\Controllers\Api\ClientsActivitiesController;
use App\Http\Controllers\Api\StatesController;
use App\Http\Controllers\Api\ClientsController;
use Illuminate\Http\Request;

Route::middleware('auth:sanctum')->group(function() {
    Route::get('/profile', fn(Request $request) => $request->user());

    Route::prefix('/states')->name('states.')->group(function() {
        Route::get('/', [StatesController::class, 'index'])->name('index');
    });

    Route::prefix('/cities')->name('cities.')->group(function() {
        Route::get('/', [CitiesController::class, 'index'])->name('index');
    });

    Route::prefix('/clients')->name('clients.')->group(function() {
        Route::get('/', [ClientsController::class, 'index'])->name('index');
        Route::post('/', [ClientsController::class, 'store'])->name('store');
        Route::get('/{client}', [ClientsController::class, 'show'])->name('show');
        Route::put('/{client}', [ClientsController::class, 'update'])->name('update');
        Route::delete('/{client}', [ClientsController::class, 'delete'])->name('delete');

        Route::prefix('{client}/activities')->name('activities.')->group(function() {
            Route::post('/', [ClientsActivitiesController::class, 'store'])->name('store');
            Route::put('/{activity:id}', [ClientsActivitiesController::class, 'update'])->name('update');
            Route::delete('/{activity:id}', [ClientsActivitiesController::class, 'delete'])->name('delete');
        });
    });
});
