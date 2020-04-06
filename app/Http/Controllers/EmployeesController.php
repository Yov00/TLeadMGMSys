<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Employee;
class EmployeesController extends Controller
{
    public function index()
    {
        $Employees = Employee::with(['token','multisport'])->get();
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
        $Employee = Employee::with('token')->find($id);
        return response()->json($Employee);
    }

    public function update(Request $request)
    {
        $employee = Employee::with('token')->find($request->id);
        $data = $request->only(['first_name','last_name','first_name','c_number','job_title','phone_number','token_id']);
        // If new image
            if($request->hasFile('image'))
            {
                $image = $request->image->store('employees');
                Storage::delete($employee->image);
        
                $data['image'] = $image;
            }
      
          
        $employee->update($data);

        return response()->json($employee);
    }


    public function delete($id)
    {
        $Employee = Employee::find($id)->delete();
        return response()->json($Employee);
    }
}
