<?php

namespace App\Services;

use App\Helpers\FindNoteTrait;
use App\Helpers\FindUserIdTrait;
use App\Http\Resources\NoteResource;
use App\Models\Note;
use Illuminate\Foundation\Http\FormRequest;

class NoteService implements IEntityService
{
  use FindUserIdTrait;
  use FindNoteTrait;

  public function create_entity(FormRequest $request): ServiceResult
  {
    $validated = $request->validated();
    $user_id = $this->find_user_id($request->route('user_email'));

    $note = Note::create([
      'user_id' => $user_id,
      'title' => $validated['title'],
      'body' => $validated['body'],
    ]);

    return new ServiceResult($note, 201);
  }

  public function read_entity(FormRequest $request): ServiceResult
  {
    $user_id = $this->find_user_id($request->route('user_email'));
    $formatted_title = str_replace('-', ' ', $request->route('title'));

    $note = Note::where('user_id', $user_id)
      ->where('title', $formatted_title)
      ->first();

    if ($note == null) {
      return new ServiceResult('Note not found.', 404);
    }

    return new ServiceResult(new NoteResource($note), 200);
  }

  public function read_entities(FormRequest $request): ServiceResult
  {
    $user_id = $this->find_user_id($request->route('user_email'));
    $notes = Note::where('user_id', $user_id)
      ->get();

    return new ServiceResult(NoteResource::collection($notes), 200);
  }

  public function update_entity(FormRequest $request): ServiceResult
  {
    $validated = $request->validated();
    $user_id = $this->find_user_id($request->route('user_email'));
    $formatted_title = str_replace('-', ' ', $request->route('title'));

    $note = $this->find_note($user_id, $formatted_title);

    if ($note == null) {
      return new ServiceResult('Note not found.', 404);
    }

    $title = $validated['title'];
    if ($title != null) {
      $note->title = $title;
    }

    $body = $validated['body'];
    if ($body != null) {
      $note->body = $body;
    }

    $note->save();
    return new ServiceResult($note, 200);
  }

  public function delete_entity(FormRequest $request): ServiceResult
  {
    $user_id = $this->find_user_id($request->route('user_email'));
    $formatted_title = str_replace('-', ' ', $request->route('title'));

    $status = $this->find_note($user_id, $formatted_title);

    if ($status == true) {
      return new ServiceResult('', 204);
    }

    return new ServiceResult('Note not found.', 404);
  }
}
