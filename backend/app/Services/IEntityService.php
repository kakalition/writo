<?php

namespace App\Services;

use Illuminate\Foundation\Http\FormRequest;

interface IEntityService
{
  public function create_entity(FormRequest $request): ServiceResult;
  public function read_entity(FormRequest $request): ServiceResult;
  public function read_entities(FormRequest $request): ServiceResult;
  public function update_entity(FormRequest $request): ServiceResult;
  public function delete_entity(FormRequest $request): ServiceResult;
}
