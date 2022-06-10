<?php

namespace App\Services;

class ServiceDataHolder
{
  private $status_code;
  private $data;

  public function __construct($data, $status_code = null)
  {
    $this->data = $data;
    $this->status_code = $status_code;
  }

  public function get_data()
  {
    return $this->data;
  }

  public function get_status_code()
  {
    return $this->status_code;
  }
}
