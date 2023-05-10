<?php

use App\Http\Controllers\MovieController;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::post('/movies', [MovieController::class, 'store']);
Route::delete('/movies/{id}',[MovieController::class,'destroy']);


Route::get('/movies/{id}/exists', function ($id) {
    $movie = Movie::find($id);
    return response()->json(['exists' => $movie !== null]);
});