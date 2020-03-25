<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Employee;
class Multisport extends Model
{
    protected $guarded = [];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
    
}
