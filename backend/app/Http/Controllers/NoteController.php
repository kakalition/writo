<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Services\NoteService;
use Illuminate\Http\Request;

class NoteController extends Controller
{
  private $service;

  public function __construct()
  {
    $this->service = new NoteService();
  }

  public function index(Request $request, $user_email)
  {
    if ($request->user() == null) {
      return response('Unauthorized', 401);
    }

    $this->authorize('viewAny', [Note::class, $user_email]);

    $result = $this->service
      ->get_user_notes($user_email);

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

    $this->authorize('create', [Note::class, $user_email]);

    $request->validate([
      'title' => 'required|max:255|unique:notes,title',
      'body' => 'required',
    ]);

    $result = $this
      ->service
      ->create_note($request, $user_email);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function show(Request $request, $user_email, $title)
  {
    if ($request->user() == null) {
      return response('Unauthorized', 401);
    }

    $this->authorize('view', [Note::class, $user_email]);

    $result = $this->service
      ->get_user_note($user_email, $title);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function update(Request $request, $user_email, $title)
  {
    if ($request->user() == null) {
      return response('Unauthorized', 401);
    }

    $this->authorize('update', [Note::class, $user_email]);

    $request->validate([
      'title' => 'max:255|unique:notes,title',
    ]);


    $result = $this->service
      ->update_note($request, $user_email, $title);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }

  public function destroy(Request $request, $user_email, $title)
  {
    if ($request->user() == null) {
      return response('Unauthorized', 401);
    }

    $this->authorize('delete', [Note::class, $user_email]);

    $result = $this->service
      ->delete_note($user_email, $title);

    return response(
      $result->get_data(),
      $result->get_status_code()
    );
  }
}
