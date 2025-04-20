<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// user
Route::get('/user', function () {
    return Inertia::render('user/user');
})->name('user');

// plan
Route::get('/plan', function () {
    return Inertia::render('plan/plan');
})->name('plan`');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
