<?php

namespace App\Http\Requests;

use App\Models\Note;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class CreateNoteTagRequest extends FormRequest
{
  public function authorize()
  {
    if ($this->user() == null) {
      throw new HttpResponseException(
        response()->json('', 401)
      );
    }

    return $this->route('user_email') == $this->user()->email;
  }

  public function rules()
  {
    return [
      'note_title' => 'required|string',
      'tag_name' =>  'required|string',
    ];
  }
}
