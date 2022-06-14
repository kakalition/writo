<?php

namespace App\Http\Requests;

use App\Helpers\Throw401OnUnauthenticatedTrait;
use Illuminate\Foundation\Http\FormRequest;

class ReadDeleteRequest extends FormRequest
{
  use Throw401OnUnauthenticatedTrait;

  public function authorize()
  {
    $this->throw_401_on_unauthenticated($this);

    return $this->route('user_email') == $this->user()->email;
  }

  public function rules()
  {
    return [];
  }
}
