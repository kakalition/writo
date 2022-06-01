<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;

class TagController extends Controller
{
  public function all($user_id)
  {
    $collection = Tag::where('user_id', $user_id)
      ->get();
    return response(json_encode($collection));
  }

  public function store(Request $request, $user_id)
  {
    $tag = Tag::create([
      'user_id' => $user_id,
      'name' => $request->input('name'),
      'background_color' => $request->input('background_color'),
      'text_color' => $request->input('text_color'),
    ]);

    return response($tag, 200);
  }

  public function updatePatch(Request $request, $user_id, $tag_id)
  {
    $target = User::where('id', $user_id)
      ->first()
      ->tags
      ->where('id', $tag_id)
      ->first();

    if ($request->name != null) {
      $target->name = $request->name;
    }

    if ($request->background_color != null) {
      $target->background_color = $request->background_color;
    }

    if ($request->text_color != null) {
      $target->text_color = $request->text_color;
    }

    $target->save();

    return response(json_encode($target));
  }

  public function updatePut(Request $request, $user_id, $tag_id)
  {
    $target = User::where('id', $user_id)
      ->first()
      ->tags
      ->where('id', $tag_id)
      ->first()
      ->update([
        'name' => $request->name,
        'background_color' => $request->background_color,
        'text_color' => $request->text_color,
      ]);

    return response(json_encode($target));
  }

  public function destroy(Tag $tag)
  {
    //
  }
}
