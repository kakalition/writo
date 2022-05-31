<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
  use HasFactory;

  protected $fillable = [
    'user_id',
    'title',
    'body',
  ];

  public function tags()
  {
    $this->belongsToMany(Tag::class, 'note_tags', 'note_id', 'tag_id');
  }
}
