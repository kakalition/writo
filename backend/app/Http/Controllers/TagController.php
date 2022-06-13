<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\User;
use App\Services\TagService;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class TagController extends Controller
{
  private $service;

  public function __construct()
  {
    $this->service = new TagService();
  }

  public function index(Request $request, $user_email)
  {
    if ($request->user() == null) {
      return response('Unauthorized', 401);
    }

    $this->authorize('viewAny', [Tag::class, $user_email]);

    $result = $this->service
      ->get_tags($user_email);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function store(Request $request, $user_email)
  {
    if ($request->user() == null) {
      return response('Unauthorized', 401);
    }

    $this->authorize('create', [Tag::class, $user_email]);

    $result = $this->service
      ->create_tag($request, $user_email);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function show(Request $request, $user_email, $name)
  {
    if ($request->user() == null) {
      return response('Unauthorized', 401);
    }

    $this->authorize('view', [Tag::class, $user_email]);

    $result = $this->service
      ->get_tag($user_email, $name);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function update(Request $request, $user_email, $name)
  {
    if ($request->user() == null) {
      return response('Unauthorized', 401);
    }

    $this->authorize('update', [Tag::class, $user_email]);

    $result = $this->service
      ->update_tag($request, $user_email, $name);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function destroy(Request $request, $user_email, $name)
  {
    if ($request->user() == null) {
      return response('Unauthorized', 401);
    }

    $this->authorize('delete', [Tag::class, $user_email]);

    $result = $this->service
      ->delete_tag($user_email, $name);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

/*   public function notes(Request $request, $user_email)
  {
    if ($request->user() == null) {
      return response('Unauthorized', 401);
    }
  } */
}
