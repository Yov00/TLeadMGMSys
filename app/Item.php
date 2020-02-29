<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Invoice;
class Item extends Model
{
  use SoftDeletes;
  protected $guarded =[];

  public function invoice()
  {
    return $this->hasOne(invoice::class);
  }
}
