<?php

namespace App\Http\Controllers;

use Illuminate\View\View;
//use Spotify; // Add this line to import the 'Spotify' class
// From https://github.com/aerni/laravel-spotify/issues/45
use Aerni\Spotify\Facades\SpotifyFacade as Spotify;

// Temporal
use Illuminate\Support\Facades\Log;

class SearchController extends Controller
{
    
    /**
     * Buscar pistas usando un query dado y la API de Spotify 
     */
    public function searchTracks() {
        $request = request();
        // Get the query from the request url (e.g. /search/tracks?query=hello)
        if ($request->has('query')) {
            $query = $request->input('query');
            $query = htmlspecialchars(strip_tags($query), ENT_QUOTES, 'UTF-8', false);
            $results = Spotify::searchTracks($query)->limit(10)->get();
            return response()->json($results);
        } else {
            return response()->json([
                'error' => 'No query provided.'
            ]);
        }
    }

    /**
     * Buscar albums usando un query dado y la API de Spotify 
     */
    public function searchAlbums() {   
        $request = request();
        // Get the query from the request url (e.g. /search/tracks?query=hello)
        if ($request->has('query')) {
            $query = $request->input('query');
            $query = htmlspecialchars(strip_tags($query), ENT_QUOTES, 'UTF-8', false);
            $results = Spotify::searchAlbums($query)->limit(10)->get();
            return response()->json($results);
        } else {
            return response()->json([
                'error' => 'No query provided.'
            ]);
        }
    }

    /**
     * Buscar artistas usando un query dado y la API de Spotify 
     */
    public function searchArtists() {   
        $request = request();
        // Get the query from the request url (e.g. /search/tracks?query=hello)
        if ($request->has('query')) {
            $query = $request->input('query');
            $query = htmlspecialchars(strip_tags($query), ENT_QUOTES, 'UTF-8', false);
            $results = Spotify::searchArtists($query)->limit(10)->get();
            return response()->json($results);
        } else {
            return response()->json([
                'error' => 'No query provided.'
            ]);
        }
    }



}
