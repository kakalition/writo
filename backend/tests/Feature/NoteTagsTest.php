<?php

use function Pest\Laravel\deleteJson;
use function Pest\Laravel\getJson;
use function Pest\Laravel\postJson;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;

uses(RefreshDatabase::class);

beforeEach(function () {
  register_user('Kaka', 'k@k');
  create_note_on_user_email('k@k', 'Note Title', 'Note Body');
  create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');
  logout();
});

/*************
 * CREATE TEST
 *************/
test('should return 401 when create note tag on unauthorized user.', function () {
  $response = create_note_tag_on_user_email('k@k', 'note-title', 'test-tag');
  $response->assertUnauthorized();
});

test('should return 403 when create note tag for another user.', function () {
  register_user('Jojo', 'j@j');

  $response = create_note_tag_on_user_email('k@k', 'note-title', 'test-tag');
  $response->assertForbidden();
});

test('should return 404 when create note tag with invalid note data.', function () {
  login_user('k@k', '00000000');

  $response = postjson('api/users/k@k/note-tags', [
    'note_title' => 'title',
    'tag_name' => 'test-tag',
  ]);
  $response->assertnotfound();
});

test('should return 404 when create note tag with invalid tag data.', function () {
  login_user('k@k', '00000000');

  $response = postjson('api/users/k@k/note-tags', [
    'note_title' => 'note-title',
    'tag_name' => 'test',
  ]);
  $response->assertnotfound();
});

test('should return 201 with correct data when successfully create tag.', function () {
  login_user('k@k', '00000000');

  $response = create_note_tag_on_user_email('k@k', 'note-title', 'test-tag');
  $response->assertCreated();
});

/*************
 * DELETE TEST
 *************/
test('should return 401 when delete note tag on unauthorized user.', function () {
  $request = deleteJson('api/users/k@k/note-tags', [
    'note_title' => 'Note Title',
    'tag_name' => 'Test Tag',
  ]);

  $request->assertUnauthorized();
});

test('should return 403 when delete note tag for another user.', function () {
  register_user('Jojo', 'j@j');

  $request = deleteJson('api/users/k@k/note-tags', [
    'note_title' => 'Note Title',
    'tag_name' => 'Test Tag',
  ]);

  $request->assertForbidden();
});

test('should return 404 when delete not existed note tag.', function () {
  login_user('k@k', '00000000');

  $request = deleteJson('api/users/k@k/note-tags', [
    'note_title' => 'Note Title',
    'tag_name' => 'Test Tagsss',
  ]);

  $request->assertNotFound();
});

test('should return 204 when successfully delete note tag.', function () {
  login_user('k@k', '00000000');

  $request = deleteJson('api/users/k@k/note-tags', [
    'note_title' => 'Note Title',
    'tag_name' => 'Test Tag',
  ]);

  $request->assertNoContent();
});

/****************
 * GENERAL TEST *
 ****************/

test('should return correct note data when creating and deleting note tag.', function () {
  login_user('k@K', '00000000');

  $response_one = getJson('api/users/k@k/notes/note-title');
  $response_one->assertOk();
  $response_one->assertJson(function (AssertableJson $json) {
    return $json->where('title', 'Note Title')
      ->where('body', 'Note Body')
      ->where('tags', [])
      ->etc();
  });

  create_note_tag_on_user_email('k@k', 'note-title', 'test-tag');
  $response_two = getJson('api/users/k@k/notes/note-title');
  $response_two->assertOk();
  $response_two->assertJson(function (AssertableJson $json) {
    return $json->where('title', 'Note Title')
      ->where('body', 'Note Body')
      ->has('tags', 1)
      ->has(
        'tags.0',
        fn ($json) =>
        $json->where('name', 'Test Tag')
          ->where('background_color', '#000000')
          ->where('text_color', '#FFFFFF')
          ->etc()
      )
      ->etc();
  });

  create_tag_on_user_email('k@k', 'Tech', '#000000', '#FFFFFF');
  create_note_tag_on_user_email('k@k', 'note-title', 'tech');
  $response_three = getJson('api/users/k@k/notes/note-title');
  $response_three->assertOk();
  $response_three->assertJson(function (AssertableJson $json) {
    return $json->where('title', 'Note Title')
      ->where('body', 'Note Body')
      ->has('tags', 2)
      ->has(
        'tags.0',
        fn ($json) =>
        $json->where('name', 'Test Tag')
          ->where('background_color', '#000000')
          ->where('text_color', '#FFFFFF')
          ->etc()
      )
      ->has(
        'tags.1',
        fn ($json) =>
        $json->where('name', 'Tech')
          ->where('background_color', '#000000')
          ->where('text_color', '#FFFFFF')
          ->etc()
      )
      ->etc();
  });

  deleteJson('api/users/k@k/note-tags', ['note_title' => 'Note Title', 'tag_name' => 'Test Tag']);
  $response_four = getJson('api/users/k@k/notes/note-title');
  $response_four->assertOk();
  $response_four->assertJson(function (AssertableJson $json) {
    return $json->where('title', 'Note Title')
      ->where('body', 'Note Body')
      ->has('tags', 1)
      ->has(
        'tags.0',
        fn ($json) =>
        $json->where('name', 'Tech')
          ->where('background_color', '#000000')
          ->where('text_color', '#FFFFFF')
          ->etc()
      )
      ->etc();
  });
});
