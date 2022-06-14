<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;

use function Pest\Laravel\deleteJson;
use function Pest\Laravel\getJson;
use function Pest\Laravel\patchJson;

uses(RefreshDatabase::class);

/*****************
 * Read All Test *
 *****************/

test('should return 401 when get tags on unauthorized user.', function () {
  $response = getJson('api/users/k@k/tags');
  $response->assertUnauthorized();
});

test('should return 403 when get tags of other user.', function () {
  register_user('Kaka', 'k@k');

  $response = getJson('api/users/j@j/tags');
  $response->assertForbidden();
});

test('should return 200 when successfully get tags. (empty)', function () {
  register_user('Kaka', 'k@k');

  $response = getJson('api/users/k@k/tags');
  $response->assertOk();
  $response->assertJsonCount(0);
});

test('should return 200 when successfully get tags. (with content)', function () {
  register_user('Kaka', 'k@k');
  create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');

  $response = getJson('api/users/k@k/tags');
  $response->assertOk();
  $response->assertJsonCount(1);
});


/***************
 * Create Test *
 ***************/

test('should return 401 when create tag on unauthorized user.', function () {
  $response = create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');
  $response->assertUnauthorized();
});

test('should return 403 when create tag for other user.', function () {
  register_user('Kaka', 'k@k');
  logout();
  register_user('Jojo', 'j@j');

  $response = create_tag_on_user_email('k@k', 'Test Tag', '#000000', null);
  $response->assertForbidden();
});

test('should return 422 when create tag with invalid data.', function () {
  register_user('Kaka', 'k@k');

  $response = create_tag_on_user_email('k@k', 'Test Tag', '#000000', null);
  $response->assertUnprocessable();
});

test('should return 422 when create tag with duplicate name.', function () {
  register_user('Kaka', 'k@k');

  create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');
  $response = create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');
  $response->assertUnprocessable();
});

test('should return 201 with correct data when successfully create tag.', function () {
  register_user('Kaka', 'k@k');

  $response = create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');
  $response->assertCreated();
  $response->assertJson(function (AssertableJson $json) {
    return $json
      ->where('name', 'Test Tag')
      ->where('background_color', '#000000')
      ->where('text_color', '#FFFFFF')
      ->etc();
  });
});

test('should return 201 when create tag with same name but different user.', function () {
  register_user('Kaka', 'k@k');
  create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');
  logout();

  register_user('Jojo', 'j@j');
  $response = create_tag_on_user_email('j@j', 'Test Tag', '#000000', '#FFFFFF');
  $response->assertCreated();
  $response->assertJson(function (AssertableJson $json) {
    return $json
      ->where('name', 'Test Tag')
      ->where('background_color', '#000000')
      ->where('text_color', '#FFFFFF')
      ->etc();
  });
});

/*************
 * Read Test *
 *************/

test('should return 401 when get tag on unauthorized user.', function () {
  $response = getJson('api/users/k@k/tags/title');
  $response->assertUnauthorized();
});

test('should return 403 when get tag of other user.', function () {
  register_user('Kaka', 'k@k');
  create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');
  logout();

  register_user('Jojo', 'j@j');

  $response = getJson('api/users/k@k/tags/test-tag');
  $response->assertForbidden();
});

test('should return 404 when get unrecognized tag.', function () {
  register_user('Kaka', 'k@k');

  $response = getJson('api/users/k@k/tags/test-tag');
  $response->assertNotFound();
});

test('should return 200 when successfully get tag.', function () {
  register_user('Kaka', 'k@k');
  create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');

  $response = getJson('api/users/k@k/tags/test-tag');
  $response->assertOk();
  $response->assertJson(function (AssertableJson $json) {
    return $json
      ->where('name', 'Test Tag')
      ->where('background_color', '#000000')
      ->where('text_color', '#FFFFFF')
      ->etc();
  });
});

/*************
 * Update Test *
 *************/

test('should return 401 when update tag on unauthorized user.', function () {
  create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');

  $response = patchJson('api/users/k@k/tags/test-tag', [
    'name' => 'Updated Tag',
    'background_color' => '#212121',
    'text_color' => '#FAFAFA',
  ]);

  $response->assertUnauthorized();
});

test('should return 403 when update tag of other user.', function () {
  register_user('Kaka', 'k@k');
  create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');
  logout();

  register_user('Jojo', 'j@j');

  $response = patchJson('api/users/k@k/tags/test-tag', [
    'name' => 'Updated Tag',
    'background_color' => '#212121',
    'text_color' => '#FAFAFA',
  ]);

  $response->assertForbidden();
});

test('should return 404 when update unrecognized tag.', function () {
  register_user('Kaka', 'k@k');

  $response = patchJson('api/users/k@k/tags/test-tag', [
    'name' => 'Updated Tag',
    'background_color' => '#212121',
    'text_color' => '#FAFAFA',
  ]);

  $response->assertNotFound();
});

test('should return 200 with correct data when successfully update tag.', function () {
  register_user('Kaka', 'k@k');
  create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');

  $response = patchJson('api/users/k@k/tags/test-tag', [
    'name' => 'Updated Tag',
    'background_color' => '#212121',
    'text_color' => '#FAFAFA',
  ]);

  $response->assertOk();
  $response->assertJson(
    fn (AssertableJson $json) =>
    $json->where('name', 'Updated Tag')
      ->where('background_color', '#212121')
      ->where('text_color', '#FAFAFA')
      ->etc()
  );
});

/***************
 * Delete Test *
 ***************/

test('should return 401 when delete tag on unauthenticated user.', function () {
  register_user('Kaka', 'k@k');
  create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');
  logout();

  $request = deleteJson('api/users/k@k/tags/test-tag');
  $request->assertUnauthorized();
});

test('should return 403 when delete tag of other user.', function () {
  register_user('Kaka', 'k@k');
  create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');
  logout();

  register_user('Jojo', 'j@j');

  $request = deleteJson('api/users/k@k/tags/test-tag');
  $request->assertForbidden();
});

test('should return 404 when delete unrecognized tag.', function () {
  register_user('Kaka', 'k@k');

  $request = deleteJson('api/users/k@k/tags/test-tag');
  $request->assertNotFound();
});

test('should return 204 when delete successfully delete tag.', function () {
  register_user('Kaka', 'k@k');
  create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');

  $request = deleteJson('api/users/k@k/tags/test-tag');
  $request->assertNoContent();
});
