<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NoteResource extends JsonResource
{
  public function toArray($request)
  {
    return [
      'id' => $this->id,
      'title' => $this->title,
      'body' => $this->body,
      'tags' => TagResource::collection($this->tags),
      'created_at' => $this->created_at
    ];
  }
}
