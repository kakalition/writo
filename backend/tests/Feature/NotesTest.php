<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class NotesTest extends TestCase
{

  use RefreshDatabase;

  private function register_user()
  {
    $this->post('/register', [
      'name' => 'Kaka',
      'email' => 'k@k',
      'password' => '00000000',
      'password_confirmation' => '00000000',
    ]);
  }

  public function test_should_return_404_when_get_notes_on_unidentified_user()
  {
    $response = $this->getJson('/api/users/1/notes');
    $response->assertStatus(404);
  }

  public function test_should_return_200_when_get_notes()
  {
    $this->register_user();

    $response = $this->getJson('/api/users/1/notes');
    $response->assertStatus(200);
  }
}
