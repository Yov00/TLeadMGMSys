<?php

namespace App;
use App\Token;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
   protected $guarded =[];

   public function token()
   {
      return $this->belongsTo(Token::class);
   }
}
