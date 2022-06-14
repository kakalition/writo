<?php

namespace App\Services;

use App\Helpers\FindTagTrait;
use App\Helpers\FindUserIdTrait;
use App\Models\Tag;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class TagService implements IEntityService
{
  use FindUserIdTrait;
  use FindTagTrait;

  public function create_entity(FormRequest $request): ServiceResult
  {
    $validated = $request->validated();
    $user_id = $this->find_user_id($request->route('user_email'));
    $tag = Tag::create([
      'user_id' => $user_id,
      'name' => $validated['name'],
      'background_color' => $validated['background_color'],
      'text_color' => $validated['text_color'],
    ]);

    return new ServiceResult($tag, 201);
  }

  public function read_entity(FormRequest $request): ServiceResult
  {
    $user_id = $this->find_user_id($request->route('user_email'));
    $formatted_name = str_replace('-', ' ', $request->route('name'));

    $tag = $this->find_tag($user_id, $formatted_name);

    if ($tag == null) {
      return new ServiceResult('Tag not found.', 404);
    }

    return new ServiceResult($tag, 200);
  }

  public function read_entities(FormRequest $request): ServiceResult
  {
    $user_id = $this->find_user_id($request->route('user_email'));
    $tags = Tag::where('user_id', $user_id)
      ->get();

    return new ServiceResult($tags, 200);
  }

  public function update_entity(FormRequest $request): ServiceResult
  {
    $validated = $request->validated();
    $user_id = $this->find_user_id($request->route('user_email'));
    $formatted_name = str_replace('-', ' ', $request->route('name'));
    $tag = $this->find_tag($user_id, $formatted_name);

    $name_input = $validated['name'];
    $background_color_input = $validated['background_color'];
    $text_color_input = $validated['text_color'];

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

  public function delete_entity(FormRequest $request): ServiceResult
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
