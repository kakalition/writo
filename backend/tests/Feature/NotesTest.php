<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;

use function Pest\Laravel\deleteJson;
use function Pest\Laravel\getJson;
use function Pest\Laravel\patchJson;
use function Pest\Laravel\putJson;
use function PHPSTORM_META\map;

uses(RefreshDatabase::class);

/*****************
 * Read All Test *
 *****************/

test('should return 401 when get notes on unauthenticated user.', function () {
  $response = getJson('/api/users/k@k/notes');
  $response->assertUnauthorized();
});

test('should return 403 when get notes on other id.', function () {
  register_user('Kaka', 'k@k');
  logout();
  register_user('Jojo', 'j@j');

  $response = getJson('/api/users/k@k/notes');
  $response->assertForbidden();
});

test('should return 200 when get notes on owns id (empty).', function () {
  register_user('Kaka', 'k@k');

  $response = getJson('/api/users/k@k/notes');
  $response->assertOk();
  $response->assertJson([]);
});

test('should return 200 when get notes on owns id (with content).', function () {
  register_user('Kaka', 'k@k');
  create_note_on_user_email('k@k', 'Title', 'Body');

  $response = getJson('/api/users/k@k/notes');
  $response->assertOk();
  $response->assertJsonCount(1);
});

/***************
 * Create Test *
 ***************/

test('should return 401 when create note on unauthorized user.', function () {
  $response = create_note_on_user_email('k@k', 'Title', 'Body');
  $response->assertUnauthorized();
});

test('should return 403 when create note on other id.', function () {
  register_user('Kaka', 'k@k');
  logout();
  register_user('Jojo', 'j@j');

  $response = create_note_on_user_email('k@k', 'Title', 'Body');
  $response->assertForbidden();
});

test('should return 422 when create note with invalid data.', function () {
  register_user('Kaka', 'k@k');
  $response = create_note_on_user_email('k@k', null, null);
  $response->assertUnprocessable();
});

test('should return 422 when create note with duplicate title.', function () {
  register_user('Kaka', 'k@k');
  create_note_on_user_email('k@k', 'Title', 'Body');
  $response = create_note_on_user_email('k@k', 'Title', 'Body');
  $response->assertUnprocessable();
});

test('should return 201 and correct data when create note with valid data.', function () {
  register_user('Kaka', 'k@k');

  $response = create_note_on_user_email('k@k', 'Title', 'Body');
  $response->assertCreated();
  $response->assertJson([
    'title' => 'Title',
    'body' => 'Body',
  ]);
});

/*************
 * Read Test *
 *************/

test('should return 401 when get note on unauthenticated user.', function () {
  $response = getJson('api/users/k@k/notes/title-at');
  $response->assertUnauthorized();
});

test('should return 403 when get note on another user.', function () {
  register_user('Kaka', 'k@k');
  create_note_on_user_email('k@k', 'Title', 'Body');
  logout();

  register_user('Jojo', 'j@j');
  $response = getJson('api/users/k@k/notes/title-at');
  $response->assertForbidden();
});

test('should return 404 when get note on unrecognized title.', function () {
  register_user('Kaka', 'k@k');
  $response = getJson('api/users/k@k/notes/title-at');
  $response->assertNotFound();
});

test('should return 200 and correct data when get note on authorized user.', function () {
  register_user('Kaka', 'k@k');
  create_note_on_user_email('k@k', 'Title At', 'Body');

  $response = getJson('api/users/k@k/notes/title-at');
  $response->assertOk();
  $response->assertJson([
    'title' => 'Title At',
    'body' => 'Body'
  ]);
});

/*************
 * Update Test *
 *************/

test('should return 401 when update note on unauthenticated user.', function () {
  $response = patchJson('api/users/k@k/notes/title', [
    'title' => 'to'
  ]);
  $response->assertUnauthorized();
});

test('should return 403 when update note of another user.', function () {
  register_user('Kaka', 'k@k');
  create_note_on_user_email('k@k', 'Test Title', 'Test Body');
  logout();

  register_user('Jojo', 'j@j');

  $response_two = patchJson('api/users/k@k/notes/test-title', ['title' => 'Updated Title']);
  $response_two->assertForbidden();
});

test('should return 404 when update note with unrecognized title.', function () {
  register_user('Kaka', 'k@k');

  $response_two = patchJson('api/users/k@k/notes/test-title', ['title' => 'Updated Title']);
  $response_two->assertNotFound();
});

test('should return 200 and correct data when successfully update note.', function () {
  register_user('Kaka', 'k@k');
  create_note_on_user_email('k@k', 'Test Title', 'Test Body');

  $response = patchJson('api/users/k@k/notes/test-title', ['title' => 'Updated Title']);
  $response->assertOk();
  $response->assertJson(
    fn (AssertableJson $json) =>
    $json
      ->where('title', 'Updated Title')
      ->etc()
  );
});

/***************
 * Delete Test *
 ***************/

test('should return 401 when delete note on unauthenticated user.', function () {
  $response = deleteJson('api/users/k@k/notes/title-at');
  $response->assertUnauthorized();
});

test('should return 403 when delete note on other user.', function () {
  register_user('Kaka', 'k@k');
  create_note_on_user_email('k@k', 'Title', 'Body');
  logout();

  register_user('Jojo', 'j@j');
  $response = deleteJson('api/users/k@k/notes/title');
  $response->assertForbidden();
});

test('should return 404 when delete unrecognized note.', function () {
  register_user('Kaka', 'k@k');

  $response = deleteJson('api/users/k@k/notes/title');
  $response->assertNotFound();
});

test('should return 204 when delete valid note.', function () {
  register_user('Kaka', 'k@k');
  create_note_on_user_email('k@k', 'Title', 'Body');

  $response = deleteJson('api/users/k@k/notes/title');
  $response->assertNoContent();
});
