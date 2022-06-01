<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
  public function notes(User $user)
  {
    $collection = $user->notes;
    foreach($collection as $item) {
      $item->tags;
    }

    return response(json_encode($collection));
  }

  public function tags(User $user)
  {
    return response(json_encode($user->tags));
  }
}
