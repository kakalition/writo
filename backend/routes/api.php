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

Route::get('tag/{user_id}/all', [TagController::class, 'all']);
Route::post('tag/{user_id}/add', [TagController::class, 'store']);
Route::patch('tag/{user_id}/update/{tag_id}', [TagController::class, 'updatePatch']);
Route::put('tag/{user_id}/update/{tag_id}', [TagController::class, 'updatePut']);
