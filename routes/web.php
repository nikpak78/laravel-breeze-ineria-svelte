<?php

use App\Http\Controllers\LinkController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoriesController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

require __DIR__ . '/auth.php';

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/about', function () {
    return Inertia::render('About');
})->middleware(['auth', 'verified'])->name('about');
Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
Route::get('/posts', [PostController::class, 'index'])->name('posts.index');

// Links
Route::get('/links', [LinkController::class, 'index'])->middleware(['auth', 'verified'])->name('links.index');
Route::post('/links', [LinkController::class, 'store'])->name('links.store');
Route::delete('/links/{link}', [LinkController::class, 'destroy'])->name('links.destroy');

Route::post('/posts', [PostController::class, 'store']);
Route::delete('/posts/{post}', [PostController::class, 'destroy'])->name('post.destroy');
Route::get('/posts/{post:slug}', [PostController::class, 'show']);

Route::get("/categories", [CategoriesController::class, "index"])->name('categories');
Route::post("/categories", [CategoriesController::class, "store"]);
Route::get("/categories/{category:slug}", [CategoriesController::class, "show"]);
Route::delete("/categories/{category}", [CategoriesController::class, "destroy"])->name('category.destroy');
