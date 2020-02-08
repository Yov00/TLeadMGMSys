<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Employee;
class Token extends Model
{
    protected $guarded = [];

    public function getEmployee()
    {
        return $this->belongsTo(Employee::class);
    }
}
