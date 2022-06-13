<?php

namespace App\Services;

use Illuminate\Http\Request;

interface IEntityService
{
  public function create_entity(Request $request, $user_email);
  public function get_entity($user_email, $name);
  public function update_entity(Request $request, $user_email);
  public function delete_entity(Request $request);
}