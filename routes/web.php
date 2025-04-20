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
Route::get('/report-plan', function () {
    return Inertia::render('plan/report_plan');
})->name('report_plan');

// activity
Route::get('/activity', function () {
    return Inertia::render('activity/activity');
})->name('activity');
Route::get('/report-activity', function () {
    return Inertia::render('activity/report_activity');
})->name('report_activity');

// archive
Route::get('/archive', function () {
    return Inertia::render('archive/archive');
})->name('archive');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
