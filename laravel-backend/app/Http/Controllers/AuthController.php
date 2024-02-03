<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

// https://taufanfadhilahiskandar.medium.com/three-ways-to-using-laravel-socialite-5f1280ed3c47
class AuthController extends Controller
{
    /**
     * Buscar pintas usando un query dado y la Spotify API
     */
    public function redirectToProvider()
    {
        Socialite::with('spotify')->stateless()->redirect();
    }

    public function handleProviderCallback()
    {
        $user = Socialite::with('spotify')->stateless()->user();
        return response()->json([
            'user' => $user,
            //'token' => $user->token,
        ]);
    }
}
