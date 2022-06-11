<?php

namespace App\Services;

use App\Models\Note;
use App\Models\User;
use App\Validators\ValidatorDataStatus;
use App\Validators\HelperValidator;
use App\Validators\NoteValidator;
use Illuminate\Http\Request;

class NoteService
{
  private $helper_validator;
  private $validator;

  private function find_user_id($user_email)
  {
    $user_id = User::where('email', $user_email)
      ->first()
      ->id;

    return $user_id;
  }

  public function __construct()
  {
    $this->helper_validator = new HelperValidator();
    $this->validator = new NoteValidator();
  }

  public function get_user_notes($user_email)
  {
    $user_validation = $this->helper_validator
      ->validate_user_availability($user_email);

    if ($user_validation->get_status() == ValidatorDataStatus::Failed) {
      return new ServiceDataHolder($user_validation->get_message(), 404);
    }

    $user_id = User::where('email', $user_email)->first();
    $notes = Note::where('id', $user_id)
      ->get();

    return new ServiceDataHolder($notes, 200);
  }

  public function create_note(Request $request, $user_email)
  {
    $user_id = $this->find_user_id($user_email);

    $note = Note::create([
      'user_id' => $user_id,
      'title' => $request->input('title'),
      'body' => $request->input('body'),
    ]);

    return new ServiceDataHolder($note, 201);
  }
}
