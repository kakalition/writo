<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
  use HasFactory;

  protected $fillable = [
    'user_id',
    'name',
    'background_color',
    'text_color',
  ];

  public function notes()
  {
    return $this
      ->belongsToMany(Note::class, 'note_tags', 'tag_id', 'note_id');
  }
}
