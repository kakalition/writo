<?php

namespace App\Validators;

use App\Models\User;

class HelperValidator
{
  public function validate_user_availability($user_id)
  {
    $user = User::where('id', $user_id)->first();

    if ($user != null) {
      return new ValidatorDataHolder(ValidatorDataStatus::Success);
    }

    return new ValidatorDataHolder(ValidatorDataStatus::Failed, 'User not found.');
  }
}
