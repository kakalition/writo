<?php

namespace App\Policies;

use App\Models\Note;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class NotePolicy
{
  use HandlesAuthorization;

  public function viewAny(User $user, $user_email)
  {
    return $user->email == $user_email;
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\Note  $note
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, Note $note)
  {
    //
  }

  /**
   * Determine whether the user can create models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function create(User $user, $user_email)
  {
    return $user->email == $user_email;
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\Note  $note
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, Note $note)
  {
    //
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\Note  $note
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, Note $note)
  {
    //
  }

  /**
   * Determine whether the user can restore the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\Note  $note
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function restore(User $user, Note $note)
  {
    //
  }

  /**
   * Determine whether the user can permanently delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\Note  $note
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function forceDelete(User $user, Note $note)
  {
    //
  }
}
