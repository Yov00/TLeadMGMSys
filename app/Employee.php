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
   
   public function multisport()
   {
      return $this->hasOne(Multisport::class);
   }
}
