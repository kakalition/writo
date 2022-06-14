<?php

use App\Http\Controllers\NoteController;
use App\Http\Controllers\NoteTagController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use App\Models\NoteTag;
use App\Models\User;
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

Route::apiResource('users/{user_email}/tags', TagController::class)
  ->parameters(['tags' => 'name']);

Route::apiResource('users/{user_email}/notes', NoteController::class)
  ->parameters(['notes' => 'title']);

Route::post('users/{user_email}/note-tags', [NoteTagController::class, 'store']);
Route::delete('users/{user_email}/note-tags', [NoteTagController::class, 'destroy']);