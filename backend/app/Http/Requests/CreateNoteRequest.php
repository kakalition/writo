<?php

namespace App\Http\Requests;

use App\Helpers\GetNoteUniqueConstraintTrait;
use App\Helpers\Throw401OnUnauthenticatedTrait;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateNoteRequest extends FormRequest
{
  use Throw401OnUnauthenticatedTrait;
  use GetNoteUniqueConstraintTrait;

  public function authorize()
  {
    $this->throw_401_on_unauthenticated($this);

    return $this->route('user_email') == $this->user()->email;
  }

  public function rules()
  {
    return [
      'title' => [
        'required',
        'string',
        'max:255',
        $this->get_note_unique_constraint()
      ],
      'body' => 'required|string',
    ];
  }
}
