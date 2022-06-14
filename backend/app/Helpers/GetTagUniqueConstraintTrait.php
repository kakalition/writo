<?php

namespace App\Helpers;

use Illuminate\Validation\Rule;

trait GetTagUniqueConstraintTrait
{
  function get_tag_unique_constraint()
  {
    return Rule::unique('tags')->where(function ($query) {
      return $query
        ->where('user_id', $this->user()->id)
        ->where('name', $this->input('name'));
    });
  }
}
