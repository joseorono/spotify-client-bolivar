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
     * Buscar pintas usando un query dado y la Spotify API
     */
    public function searchTracks()
    {   
        $request = request();
        // Get the query from the request url (e.g. /search/tracks?query=hello)
        if ($request->has('query')) {
            $query = $request->input('query');
            //$results = Spotify::searchTracks($query)->limit(10);
            $results = Spotify::searchTracks($query)->get();
            //Log::info('Some message here.');
            //Log::info($results);
            return response()->json($results);
        } else {
            return response()->json([
                'error' => 'No query provided'
            ]);
        }
    }
}
