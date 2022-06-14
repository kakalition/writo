<?php

namespace App\Validators;

class ValidatorDataHolder
{
  private $status;
  private $message;

  public function __construct(ValidatorDataStatus $status, $message = '')
  {
    $this->status = $status;
    $this->message = $message;
  }

  public function get_status()
  {
    return $this->status;
  }

  public function get_message()
  {
    return $this->message;
  }
}
