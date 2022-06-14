<?php

namespace App\Http\Requests;

use App\Helpers\GetTagUniqueConstraintTrait;
use App\Helpers\Throw401OnUnauthenticatedTrait;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateTagRequest extends FormRequest
{
  use Throw401OnUnauthenticatedTrait;
  use GetTagUniqueConstraintTrait;

  public function authorize()
  {
    $this->throw_401_on_unauthenticated($this);

    return $this->route('user_email') == $this->user()->email;
  }

  public function rules()
  {
    return [
      'name' => [
        'required',
        'string',
        $this->get_tag_unique_constraint()
      ],
      'background_color' => 'required|string|size:7',
      'text_color' => 'required|string|size:7',
    ];
  }
}
