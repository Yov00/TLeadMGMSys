<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee;
class EmployeesController extends Controller
{
    public function index()
    {
        $Employees = Employee::all();
        return response()->json($Employees);
    }

    public function create(Request $request)
    {
       
       
         
         $image = $request->image[0]->store('employees');
           
    
        $Employee = Employee::create([
            'first_name'=>'asta la vista',
            'last_name'=>'baby',
            'phone_number'=>'999999',
            'job_title'=>'Kur pacha',
            'c_number'=>'046',
            'token_id'=>1,
            'image'=>$image
        ]);

        return response()->json($Employee);
    }

    public function edit($id)
    {
        $Employee = Employee::find($id);
        return response()->json($Employee);
    }

    public function update(Request $request,$id)
    {
        $Employee = Employee::find($id)->update([
            'name'=>$request->name,
            'quantity'=>$request->quantity
        ]);

        return response()->json($Employee);
    }

    public function delete($id)
    {
        $Employee = Employee::find($id)->delete();
        return response()->json($Employee);
    }
}
