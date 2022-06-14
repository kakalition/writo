<?php

use function Pest\Laravel\deleteJson;
use function Pest\Laravel\getJson;
use function Pest\Laravel\postJson;

use Illuminate\Foundation\Testing\RefreshDatabase;

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
