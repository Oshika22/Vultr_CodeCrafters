<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PredictionController extends Controller
{
    public function getPrediction(Request $request)
    {
        // Send a POST request to the Flask API with the data from the request
        $response = Http::post('http://127.0.0.1:5000/predict', $request->all());

        // Return the JSON response from Flask
        return $response->json();
    }
}

