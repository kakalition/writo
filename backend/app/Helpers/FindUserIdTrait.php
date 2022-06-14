<?php

namespace App\Helpers;

use App\Models\User;

trait FindUserIdTrait
{
  function find_user_id($user_email)
  {
    $user_id = User::where('email', $user_email)
      ->first()
      ->id;

    return $user_id;
  }
}
