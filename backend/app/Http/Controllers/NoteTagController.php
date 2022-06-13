<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateNoteTagRequest;
use App\Http\Requests\DeleteNoteTagRequest;
use App\Services\IEntityService;

class NoteTagController extends Controller
{
  private $service;

  public function __construct(IEntityService $service)
  {
    $this->service = $service;
  }

  public function index($user_email)
  {
    return null;
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

  public function show()
  {
    return null;
  }

  public function update()
  {
    return null;
  }

  public function destroy(DeleteNoteTagRequest $request)
  {
    $result = $this->service
      ->delete_entity($request);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }
}
