<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateNoteTagRequest;
use App\Http\Requests\ReadDeleteRequest;
use App\Services\IEntityService;

class NoteTagController extends Controller
{
  private $service;

  public function __construct(IEntityService $service)
  {
    $this->service = $service;
  }

  public function store(CreateNoteTagRequest $request, $user_email)
  {
    $result = $this->service
      ->create_entity($request, $user_email);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function destroy(ReadDeleteRequest $request)
  {
    $result = $this->service
      ->delete_entity($request);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }
}
