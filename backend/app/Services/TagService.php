<?php

namespace App\Services;

use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class TagService
{
  private function find_user_id($user_email)
  {
    $user_id = User::where('email', $user_email)
      ->first()
      ->id;

    return $user_id;
  }

  private function find_tag($user_id, $name)
  {
    $tag = Tag::where('user_id', $user_id)
      ->where('name', $name)
      ->first();

    return $tag;
  }

  public function get_tags($user_email)
  {
    $user_id = $this->find_user_id($user_email);
    $tags = Tag::where('user_id', $user_id)
      ->get();

    return new ServiceDataHolder($tags, 200);
  }

  public function create_tag(Request $request, $user_email)
  {
    $user_id = User::where('email', $user_email)->first()->id;
    $name = $request->input('name');

    $request->validate([
      'name' => [
        'required',
        'string',
        Rule::unique('tags')->where(function ($query) use ($user_id, $name) {
          return $query
            ->where('user_id', $user_id)
            ->where('name', $name);
        }),
      ],
      'background_color' => 'required|string|size:7',
      'text_color' => 'required|string|size:7',
    ]);

    $user_id = $this->find_user_id($user_email);

    $tag = Tag::create([
      'user_id' => $user_id,
      'name' => $request->input('name'),
      'background_color' => $request->input('background_color'),
      'text_color' => $request->input('text_color'),
    ]);

    return new ServiceDataHolder($tag, 201);
  }

  public function get_tag($user_email, $name)
  {
    $user_id = $this->find_user_id($user_email);
    $formatted_name = str_replace('-', ' ', $name);

    $tag = $this->find_tag($user_id, $formatted_name);

    if ($tag == null) {
      return new ServiceDataHolder('Tag not found.', 404);
    }

    return new ServiceDataHolder($tag, 200);
  }

  public function delete_tag($user_email, $name)
  {
    $user_id = $this->find_user_id($user_email);
    $formatted_name = str_replace('-', ' ', $name);

    $tag = $this->find_tag($user_id, $formatted_name);

    if ($tag == null) {
      return new ServiceDataHolder('Tag not found.', 404);
    }

    return new ServiceDataHolder('', 204);
  }

  public function update_tag(Request $request, $user_email, $name)
  {
    $user_id = $this->find_user_id($user_email);
    $formatted_name = str_replace('-', ' ', $name);
    $tag = $this->find_tag($user_id, $formatted_name);

    $name_input = $request->input('name');
    $background_color_input = $request->input('background_color');
    $text_color_input = $request->input('text_color');

    if ($tag == null) {
      return new ServiceDataHolder('Tag not found.', 404);
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
    return new ServiceDataHolder($tag, 200);
  }
}
