<?php

namespace App;
use App\Token;
use Illuminate\Database\Eloquent\Model;
use App\Multisport;

class Employee extends Model
{
   protected $guarded =[];

   public function token()
   {
      return $this->belongsTo(Token::class);
   }
   
   public function mulrisport()
   {
      return $this->hasOne(Multisport::class);
   }
}
