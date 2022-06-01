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

Route::get('users/{user_id}/tags', [TagController::class, 'all']);
Route::post('users/{user_id}/tags', [TagController::class, 'store']);
Route::patch('users/{user_id}/tags/{tag_id}', [TagController::class, 'updatePatch']);
Route::put('users/{user_id}/tags/{tag_id}', [TagController::class, 'updatePut']);
Route::delete('users/{user_id}/tags/{tag_id}', [TagController::class, 'delete']);
