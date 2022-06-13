<?php

namespace App\Http\Controllers;

use App\Models\NoteTag;
use App\Services\IEntityService;
use Illuminate\Http\Request;

class NoteTagController extends Controller
{
  private $service;

  public function __construct(IEntityService $service)
  {
    $this->service = $service;
  }

  public function index()
  {
    return response(json_encode(NoteTag::all()));
  }

  public function store(Request $request)
  {
    $notetag = NoteTag::create([
      'note_id' => $request->input('note_id'),
      'tag_id' => $request->input('tag_id'),
    ]);

    return response(json_encode($notetag));
  }

  public function show(NoteTag $notetag)
  {
    return response(json_encode($notetag));
  }

  public function destroy(NoteTag $notetag)
  {
    return response(json_encode($notetag->delete()));
  }
}
