<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class DeleteNoteTagRequest extends FormRequest
{
  public function authorize()
  {
    $user = $this->user();

    if ($user == null) {
      throw new HttpResponseException(
        response('Unauthorized', 401)
      );
    }

    return $user->email == $this->route('user_email');
  }

  public function rules()
  {
    return [
      'note_title' => 'required|string',
      'tag_name' =>  'required|string',
    ];
  }
}
