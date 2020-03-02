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
       
       
         
         $image = $request->image->store('employees');
           
    
        $Employee = Employee::create([
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'phone_number'=>$request->phone_number,
            'job_title'=>$request->job_title,
            'c_number'=>$request->c_number,
            'image'=>$image,
            'token_id'=>$request->token_id,
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
