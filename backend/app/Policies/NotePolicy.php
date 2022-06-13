<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class NotePolicy
{
  use HandlesAuthorization;

  public function viewAny(User $user, $user_email)
  {
    return $user->email == $user_email;
  }

  public function view(User $user, $user_email)
  {
    return $user->email == $user_email;
  }

  public function create(User $user, $user_email)
  {
    return $user->email == $user_email;
  }

  public function update(User $user, $user_email)
  {
    return $user->email == $user_email;
  }

  public function delete(User $user, $user_email)
  {
    return $user->email == $user_email;
  }


  public function restore(User $user)
  {
    //
  }

  public function forceDelete(User $user)
  {
    //
  }
}
