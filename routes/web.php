<?php

use App\Http\Controllers\MovieController;
use App\Http\Controllers\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

// 

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/profile/resetpassword', [ProfileController::class, 'resetPass'])->name('profile.resetPass');
    Route::get('/profile/removecompte', [ProfileController::class, 'removecompte'])->name('profile.removecompte');
    Route::get('/profile/favorite_movie', [ProfileController::class, 'favorite_movie'])->name('profile.favorite_movie');

});

require __DIR__.'/auth.php';


//ckeck auth
Route::get('/auth-check', function () {
    $user = Auth::user();

    return response()->json([
        'authenticated' => Auth::check(),
        'name' => $user ? $user->name : null,
        'userId'=> $user->id,
    ]);
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');


