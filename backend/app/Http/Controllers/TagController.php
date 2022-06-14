<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateTagRequest;
use App\Http\Requests\ReadDeleteRequest;
use App\Http\Requests\UpdateTagRequest;
use App\Services\IEntityService;

class TagController extends Controller
{
  private $service;

  public function __construct(IEntityService $service)
  {
    $this->service = $service;
  }

  public function index(ReadDeleteRequest $request)
  {
    $result = $this->service
      ->read_entities($request);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function store(CreateTagRequest $request)
  {
    $result = $this->service
      ->create_entity($request);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function show(ReadDeleteRequest $request)
  {
    $result = $this->service
      ->read_entity($request);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function update(UpdateTagRequest $request)
  {
    $result = $this->service
      ->update_entity($request);

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
