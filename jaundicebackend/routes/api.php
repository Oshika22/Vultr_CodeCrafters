<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', function () {
    return response()->json(['message' => 'This is a test route']);
});
use App\Http\Controllers\PredictionController;

Route::post('/predict', [PredictionController::class, 'getPrediction']);
