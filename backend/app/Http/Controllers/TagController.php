<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;

class TagController extends Controller
{
  public function index()
  {
    $collection = Tag::all();
    return response(json_encode($collection));
  }

  public function store(Request $request)
  {
    $tag = Tag::create([
      'user_id' => $request->input('user_id'),
      'name' => $request->input('name'),
      'background_color' => $request->input('background_color'),
      'text_color' => $request->input('text_color'),
    ]);

    return response($tag, 200);
  }

  public function show(Tag $tag)
  {
    return response(json_encode(response($tag));
  }

  public function update(Request $request, Tag $tag)
  {
    if ($request->input('name') != null) {
      $tag->name = $request->input('name');
    }

    if ($request->input('background_color') != null) {
      $tag->background_color = $request->input('background_color');
    }

    if ($request->input('text_color') != null) {
      $tag->text_color = $request->input('text_color');
    }

    $tag->save();

    return response(json_encode($tag));
  }

  public function destroy(Tag $tag)
  {
      $status = $tag->delete();
      return response($status);
  }
}
