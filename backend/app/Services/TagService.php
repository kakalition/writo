<?php

namespace App\Services;

use App\Helpers\FindTagTrait;
use App\Helpers\FindUserIdTrait;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagService implements IEntityService
{
  use FindUserIdTrait;
  use FindTagTrait;

  public function create_entity(Request $request): ServiceResult
  {
    $user_id = $this->find_user_id($request->route('user_email'));
    $tag = Tag::create([
      'user_id' => $user_id,
      'name' => $request->input('name'),
      'background_color' => $request->input('background_color'),
      'text_color' => $request->input('text_color'),
    ]);

    return new ServiceResult($tag, 201);
  }

  public function read_entity(Request $request): ServiceResult
  {
    $user_id = $this->find_user_id($request->route('user_email'));
    $formatted_name = str_replace('-', ' ', $request->route('name'));

    $tag = $this->find_tag($user_id, $formatted_name);

    if ($tag == null) {
      return new ServiceResult('Tag not found.', 404);
    }

    return new ServiceResult($tag, 200);
  }

  public function read_entities(Request $request): ServiceResult
  {
    $user_id = $this->find_user_id($request->route('user_email'));
    $tags = Tag::where('user_id', $user_id)
      ->get();

    return new ServiceResult($tags, 200);
  }

  public function update_entity(Request $request): ServiceResult
  {
    $user_id = $this->find_user_id($request->route('user_email'));
    $formatted_name = str_replace('-', ' ', $request->route('name'));
    $tag = $this->find_tag($user_id, $formatted_name);

    $name_input = $request->input('name');
    $background_color_input = $request->input('background_color');
    $text_color_input = $request->input('text_color');

    if ($tag == null) {
      return new ServiceResult('Tag not found.', 404);
    }

    if ($name_input != null) {
      $tag->name = $name_input;
    }

    if ($background_color_input != null) {
      $tag->background_color = $background_color_input;
    }

    if ($text_color_input != null) {
      $tag->text_color = $text_color_input;
    }

    $tag->save();
    return new ServiceResult($tag, 200);
  }

  public function delete_entity(Request $request): ServiceResult
  {
    $user_id = $this->find_user_id($request->route('user_email'));
    $formatted_name = str_replace('-', ' ', $request->route('name'));

    $tag = $this->find_tag($user_id, $formatted_name);

    if ($tag == null) {
      return new ServiceResult('Tag not found.', 404);
    }

    $tag->delete();
    return new ServiceResult('', 204);
  }
}
