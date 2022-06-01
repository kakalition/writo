<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
  public function all(Request $request)
  {
    $collection = Note::where('user_id', $request->query('user_id'))
      ->get();
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

  public function patch(Note $note)
  {
    //
  }

  public function put(Request $request, Note $note)
  {
    //
  }

  public function delete(Note $note)
  {
    //
  }
}
