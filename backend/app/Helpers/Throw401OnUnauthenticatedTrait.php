<?php

namespace App\Helpers;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Request;

trait Throw401OnUnauthenticatedTrait
{
  function throw_401_on_unauthenticated(Request $request)
  {
    if ($request->user() == null) {
      throw new HttpResponseException(
        response('Unauthorized', 401)
      );
    }
  }
}
