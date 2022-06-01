<?php

use App\Http\Controllers\NoteController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
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

Route::get('users/{user}/notes', [UserController::class, 'notes']);
Route::get('users/{user}/tags', [UserController::class, 'tags']);

Route::apiResources([
  'tags' => TagController::class,
  'notes' => NoteController::class,
]);
