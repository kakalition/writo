<?php

namespace App\Services;

use App\Models\Note;
use App\Validators\ValidatorDataStatus;
use App\Validators\HelperValidator;
use App\Validators\NoteValidator;

class NoteService
{
  private $helper_validator;
  private $validator;

  public function __construct()
  {
    $this->helper_validator = new HelperValidator();
    $this->validator = new NoteValidator();
  }

  public function get_user_notes($user_id)
  {
    $user_validation = $this
      ->helper_validator
      ->validate_user_availability($user_id);

    if ($user_validation->get_status() == ValidatorDataStatus::Failed) {
      return new ServiceDataHolder($user_validation->get_message(), 404);
    }

    $notes = Note::where('user_id', $user_id)
      ->get();

    return new ServiceDataHolder($notes, 200);
  }
}
