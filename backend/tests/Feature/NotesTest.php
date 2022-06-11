<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class NotesTest extends TestCase
{
  use RefreshDatabase;

  private function register_user($name, $email)
  {
    $response = $this->post('/register', [
      'name' => $name,
      'email' => $email,
      'password' => '00000000',
      'password_confirmation' => '00000000',
    ]);

    return $response;
  }

  private function logout()
  {
    $this->postJson('/logout');
  }

  private function create_note_on_user_email($user_email, $title, $body)
  {
    $response = $this->postJson(
      'api/users/' . $user_email . '/notes',
      [
        'title' => $title,
        'body' => $body
      ]
    );

    return $response;
  }

  public function test_should_return_403_when_get_notes_on_unauthenticated()
  {
    $response = $this->getJson('/api/users/k@k/notes');
    $response->assertStatus(403);
  }

  public function test_should_return_200_when_get_notes_on_owns_id()
  {
    $this->register_user('Kaka', 'k@k');

    $response = $this->getJson('/api/users/k@k/notes');
    $response->dump();
    $response->assertStatus(200);
  }

  public function test_should_return_403_when_get_notes_on_other_id()
  {
    $this->register_user('Kaka', 'k@k');
    $this->logout();
    $this->register_user('Jojo', 'j@j');

    $response = $this->getJson('/api/users/k@k/notes');
    $response->assertStatus(403);

    $this->logout();
  }

  public function test_should_return_403_when_create_note_on_unauthorized_user()
  {
    $response = $this->create_note_on_user_email('k@k', 'Title', 'Body');
    $response->assertStatus(403);
  }

  public function test_should_return_422_when_create_note_with_invalid_data()
  {
    $this->register_user('Kaka', 'k@k');
    $response = $this->create_note_on_user_email('k@k', null, null);
    $response->assertStatus(422);

  }

  /*   public function test_should_return_created_note_when_create_note_on_authorized_user()
  {
    $this->register_user('Kaka', 'k@k');

    $response = $this->create_note_on_user_email('k@k');
    $response->assertStatus(201);
  } */
}
