<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
  public function notes(User $user)
  {
    return $user->notes;
  }

  public function tags(User $user)
  {
    return $user->tags;
  }
}
