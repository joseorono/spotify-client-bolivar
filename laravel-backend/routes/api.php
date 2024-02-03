<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\authController;
use App\Http\Controllers\searchController;


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

/*
Route::get('/auth/redirect', function () {
    return Socialite::driver('spotify')->redirect();
});
*/
Route::get('/auth/redirect', [AuthController::class, 'redirectToProvider']);

Route::get('/spotify-callback', [AuthController::class, 'handleProviderCallback']);

Route::get('/search/tracks/', [SearchController::class, 'searchTracks']);

