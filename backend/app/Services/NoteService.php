<?php

namespace App\Services;

use App\Http\Resources\NoteResource;
use App\Models\Note;
use App\Models\User;
use Illuminate\Http\Request;

class NoteService
{
  private function find_user_id($user_email)
  {
    $user_id = User::where('email', $user_email)
      ->first()
      ->id;

    return $user_id;
  }

  public function get_user_notes($user_email)
  {
    $user_id = $this->find_user_id($user_email);
    $notes = Note::where('user_id', $user_id)
      ->get();

    return new ServiceDataHolder($notes, 200);
  }

  public function get_user_note($user_email, $title)
  {
    $user_id = $this->find_user_id($user_email);
    $formatted_title = str_replace('-', ' ', $title);

    $note = Note::where('user_id', $user_id)
      ->where('title', $formatted_title)
      ->first();

    if ($note == null) {
      return new ServiceDataHolder('Note not found.', 404);
    }

    return new ServiceDataHolder(new NoteResource($note), 200);
  }

  public function create_note(Request $request, $user_email)
  {
    $user_id = $this->find_user_id($user_email);

    $note = Note::create([
      'user_id' => $user_id,
      'title' => $request->input('title'),
      'body' => $request->input('body'),
    ]);

    return new ServiceDataHolder($note, 201);
  }

  public function update_note(Request $request, $user_email, $title)
  {
    $user_id = $this->find_user_id($user_email);
    $formatted_title = str_replace('-', ' ', $title);

    $note = Note::where('user_id', $user_id)
      ->where('title', $formatted_title)
      ->first();

    if ($note == null) {
      return new ServiceDataHolder('Note not found.', 404);
    }

    $title = $request->input('title');
    if ($title != null) {
      $note->title = $title;
    }

    $body = $request->input('body');
    if ($body != null) {
      $note->body = $body;
    }

    $note->save();
    return new ServiceDataHolder($note, 200);
  }

  public function delete_note($user_email, $title)
  {
    $user_id = $this->find_user_id($user_email);
    $formatted_title = str_replace('-', ' ', $title);

    $status = Note::where('user_id', $user_id)
      ->where('title', $formatted_title)
      ->delete();

    if ($status == true) {
      return new ServiceDataHolder('', 204);
    }

    return new ServiceDataHolder('Note not found.', 404);
  }
}
