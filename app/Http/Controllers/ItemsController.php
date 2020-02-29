<?php

namespace App\Http\Controllers;
use App\Item;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\SoftDeletes;

class ItemsController extends Controller
{
    public function index()
    {
        $items = Item::orderBy('created_at','desc')->get();
        return response()->json($items);
    }

    public function arrived()
    {
        $arrivedItems = Item::withTrashed()->whereNotNull('deleted_at')->with('invoice')->get();
       
        return response()->json($arrivedItems);
    }
    
    public function create(Request $request)        
    {
        $item = Item::create([
            'name'=>$request->name,
            'quantity'=>$request->quantity
        ]);

        return response()->json($item);
    }

    
    public function edit($id)
    {
        $item = Item::find($id);
        return response()->json($item);
    }


    public function update(Request $request,$id)
    {
        $item = Item::find($id)->update([
            'name'=>$request->name,
            'quantity'=>$request->quantity
        ]);

        return response()->json($item);
    }

    public function destroy($id)
    {
        $item = Item::find($id)->delete();
        return response()->json($item);
    }
}
