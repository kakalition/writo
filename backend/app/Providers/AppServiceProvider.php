<?php

namespace App\Providers;

use App\Http\Controllers\NoteController;
use App\Http\Controllers\NoteTagController;
use App\Services\IEntityService;
use App\Services\NoteService;
use App\Services\NoteTagService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   *
   * @return void
   */
  public function register()
  {
    $this->app
      ->when(NoteTagController::class)
      ->needs(IEntityService::class)
      ->give(function () {
        return new NoteTagService;
      });

    $this->app
      ->when(NoteController::class)
      ->needs(IEntityService::class)
      ->give(function () {
        return new NoteService;
      });
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot()
  {
    //
  }
}
