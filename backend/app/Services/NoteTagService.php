<?php

namespace App\Services;

use App\Models\Note;
use App\Models\NoteTag;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;

class NoteTagService implements IEntityService
{
  private function find_user_id($user_email)
  {
    $id = User::where('email', $user_email)
      ->first()
      ->id;

    return $id;
  }

  private function find_note_id($user_id, $title)
  {
    $note = Note::where('user_id', $user_id)
      ->where('title', $title)
      ->first()
      ?->id;

    return $note;
  }

  private function find_tag_id($user_id, $name)
  {
    $tag = Tag::where('user_id', $user_id)
      ->where('name', $name)
      ->first()
      ?->id;

    return $tag;
  }

  public function create_entity(Request $request): ServiceResult
  {
    $title = $request->input('note_title');
    $formatted_title = str_replace('-', ' ', $title);

    $tag_name = $request->input('tag_name');
    $formatted_tag_name = str_replace('-', ' ', $tag_name);

    $user_id = $this->find_user_id($request->route('user_email'));

    $note_id = $this->find_note_id($user_id, $formatted_title);
    if ($note_id == null) {
      return new ServiceResult('Note not found.', 404);
    }

    $tag_id = $this->find_tag_id($user_id, $formatted_tag_name);
    if ($tag_id == null) {
      return new ServiceResult('Tag not found.', 404);
    }

    $note_tag = NoteTag::create([
      'note_id' => $note_id,
      'tag_id' => $tag_id,
    ]);

    return new ServiceResult($note_tag, 201);
  }

  public function read_entity(Request $request): ServiceResult
  {
    return new ServiceResult(null, null);
  }

  public function read_entities(Request $request): ServiceResult
  {
    return new ServiceResult(null, null);
  }

  public function update_entity(Request $request): ServiceResult
  {
    return new ServiceResult(null, null);
  }

  public function delete_entity(Request $request): ServiceResult
  {
    $title = $request->input('note_title');
    $formatted_title = str_replace('-', ' ', $title);

    $tag_name = $request->input('tag_name');
    $formatted_tag_name = str_replace('-', ' ', $tag_name);

    $user_id = $this->find_user_id($request->route('user_email'));

    $note_id = $this->find_note_id($user_id, $formatted_title);
    if ($note_id == null) {
      return new ServiceResult('Note not found.', 404);
    }

    $tag_id = $this->find_tag_id($user_id, $formatted_tag_name);
    if ($tag_id == null) {
      return new ServiceResult('Tag not found.', 404);
    }

    $note_tag = NoteTag::where('note_id', $note_id)
      ->where('tag_id', $tag_id)
      ->delete();

    return new ServiceResult('', 204);
  }
}
