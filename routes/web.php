<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', fn() => Inertia::render('Login'));

Route::get('/otp', fn() => Inertia::render('Otp'));

Route::get('/appcard', fn() => Inertia::render('AppCard'));

Route::get('/authorize', fn() => Inertia::render('Authorize'));

Route::get('/sessions', fn() => Inertia::render('BrowserSession'));

Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
