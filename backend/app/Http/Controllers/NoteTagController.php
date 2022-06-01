<?php

namespace App\Http\Controllers;

use App\Models\NoteTag;
use Illuminate\Http\Request;

class NoteTagController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return response(json_encode(NoteTag::all()));
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $notetag = NoteTag::create([
      'note_id' => $request->input('note_id'),
      'tag_id' => $request->input('tag_id'),
    ]);

    return response(json_encode($notetag));
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\NoteTag  $noteTag
   * @return \Illuminate\Http\Response
   */
  public function show(NoteTag $notetag)
  {
    return response(json_encode($notetag));
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\NoteTag  $noteTag
   * @return \Illuminate\Http\Response
   */
  public function destroy(NoteTag $notetag)
  {
    return response(json_encode($notetag->delete()));
  }
}
