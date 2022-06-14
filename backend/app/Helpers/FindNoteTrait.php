<?php

namespace App\Helpers;

use App\Models\Note;

trait FindNoteTrait
{
  function find_note($user_id, $title)
  {
    return Note::where('user_id', $user_id)
      ->where('title', $title)
      ->first();
  }
}
