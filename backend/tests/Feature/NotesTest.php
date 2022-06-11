<?php

use App\Models\Note;
use Illuminate\Foundation\Testing\RefreshDatabase;

use function Pest\Laravel\getJson;

uses(RefreshDatabase::class);

test('should return 403 when get notes on unauthenticated', function () {
  $response = getJson('/api/users/k@k/notes');
  $response->assertStatus(403);
});

test('should return 200 when get notes on owns id', function () {
  register_user('Kaka', 'k@k');

  $response = getJson('/api/users/k@k/notes');
  $response->assertStatus(200);
});

test('should return 403 when get notes on other id', function () {
  register_user('Kaka', 'k@k');
  logout();
  register_user('Jojo', 'j@j');

  $response = getJson('/api/users/k@k/notes');
  $response->assertStatus(403);
});

test('should return 403 when create note on unauthorized user', function () {
  $response = create_note_on_user_email('k@k', 'Title', 'Body');
  $response->assertStatus(403);
});

test('should return 422 when create note with invalid data', function () {
  register_user('Kaka', 'k@k');
  $response = create_note_on_user_email('k@k', null, null);
  $response->assertStatus(422);
});

test('should return 201 and correct data when create note with valid data', function () {
  register_user('Kaka', 'k@k');

  $response = create_note_on_user_email('k@k', 'Title', 'Body');
  $response->assertStatus(201);
  $response->assertJson([
    'title' => 'Title',
    'body' => 'Body',
  ]);
});