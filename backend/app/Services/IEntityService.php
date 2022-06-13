<?php

namespace App\Services;

use Illuminate\Http\Request;

interface IEntityService
{
  public function create_entity(Request $request): ServiceResult;
  public function read_entity(Request $request): ServiceResult;
  public function update_entity(Request $request): ServiceResult;
  public function delete_entity(Request $request): ServiceResult;
}
