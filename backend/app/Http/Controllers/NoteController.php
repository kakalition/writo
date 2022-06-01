<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
  public function index(Request $request)
  {
    $collection = Note::all();
    return response(json_encode($collection));
  }

  public function store(Request $request)
  {
    $note = Note::create([
      'user_id' => $request->input('user_id'),
      'title' => $request->input('title'),
      'body' => $request->input('body'),
    ]);

    return response($note);
  }

  public function show(Note $note)
  {
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
}
