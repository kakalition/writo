<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;

class TagController extends Controller
{
  public function all(Request $request)
  {
    $collection = Tag::where('user_id', $request->query('user_id'))
      ->get();
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

  public function patch(Request $request)
  {
    $target = Tag::where('id', $request->input('tag_id'))
      ->first();

    if ($request->input('name') != null) {
      $target->name = $request->input('name');
    }

    if ($request->input('background_color') != null) {
      $target->background_color = $request->input('background_color');
    }

    if ($request->input('text_color') != null) {
      $target->text_color = $request->input('text_color');
    }

    $target->save();

    return response(json_encode($target));
  }

  public function put(Request $request)
  {
    $target = Tag::where('id', $request->input('tag_id'))
      ->first()
      ->update([
        'name' => $request->input('name'),
        'background_color' => $request->input('background_color'),
        'text_color' => $request->input('text_color'),
      ]);

    return response(json_encode($target));
  }

  public function delete(Request $request)
  {
    $target = Tag::where('id', $request->input('tag_id'))
      ->first()
      ->delete();
  }
}
