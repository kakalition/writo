<?php

namespace App\Helpers;

use Illuminate\Validation\Rule;

trait GetNoteUniqueConstraintTrait
{
  function get_note_unique_constraint()
  {
    return Rule::unique('notes')->where(function ($query) {
      return $query
        ->where('user_id', $this->user()->id)
        ->where('title', $this->input('title'));
    });
  }
}
