<?php

namespace App\Helpers;

use App\Models\Tag;

trait FindTagTrait
{
  function find_tag($user_id, $name)
  {
    return Tag::where('user_id', $user_id)
      ->where('name', $name)
      ->first();
  }
}
