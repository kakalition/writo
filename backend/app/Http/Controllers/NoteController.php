<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Services\NoteService;
use App\Services\ServiceDataHolder;
use App\Services\ServiceDataStatus;
use Illuminate\Http\Request;

class NoteController extends Controller
{
  private $service;

  public function __construct()
  {
    $this->service = new NoteService();
  }

  public function index($user_email)
  {
    $this->authorize('viewAny', [Note::class, $user_email]);

    $result = $this->service
      ->get_user_notes($user_email);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function store(Request $request, $user_email)
  {
    $this->authorize('create', [Note::class, $user_email]);

    $validated_data = $request->validate([
      'title' => 'required|max:255',
      'body' => 'required',
    ]);

    $result = $this
      ->service
      ->create_note($request, $user_email);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function show(Note $note)
  {
    $note->tags;
    return response(json_encode($note));
  }

  public function update(Request $request, Note $note)
  {
    if ($request->input('title') != null) {
      $note->title = $request->input('title');
    }

    if ($request->input('body') != null) {
      $note->body = $request->input('body');
    }

    $note->save();

    return response(json_encode($note));
  }

  public function destroy(Note $note)
  {
    $note->delete();
  }

  public function tags(Note $note)
  {
    return response(json_encode($note->tags));
  }
}
