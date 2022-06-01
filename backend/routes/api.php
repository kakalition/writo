<?php

use App\Http\Controllers\NoteController;
use App\Http\Controllers\TagController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

Route::get('notes', [NoteController::class, 'all']);

Route::get('tags', [TagController::class, 'all']);
Route::post('tags', [TagController::class, 'store']);
Route::patch('tags', [TagController::class, 'patch']);
Route::put('tags', [TagController::class, 'put']);
Route::delete('tags', [TagController::class, 'delete']);
