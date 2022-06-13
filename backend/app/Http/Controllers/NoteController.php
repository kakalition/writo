<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateNoteRequest;
use App\Http\Requests\ReadDeleteNoteRequest;
use App\Http\Requests\ReadNoteRequest;
use App\Http\Requests\UpdateNoteRequest;
use App\Models\Note;
use App\Services\IEntityService;
use Illuminate\Http\Request;

class NoteController extends Controller
{
  private $service;

  public function __construct(IEntityService $service)
  {
    $this->service = $service;
  }

  public function index(ReadDeleteNoteRequest $request)
  {
    $result = $this->service
      ->read_entities($request);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function store(CreateNoteRequest $request)
  {
    $result = $this
      ->service
      ->create_entity($request);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function show(ReadDeleteNoteRequest $request)
  {
    $result = $this->service
      ->read_entity($request);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function update(UpdateNoteRequest $request)
  {
    $result = $this->service
      ->update_entity($request);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function destroy(ReadDeleteNoteRequest $request)
  {
    $result = $this->service
      ->delete_entity($request);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }
}
