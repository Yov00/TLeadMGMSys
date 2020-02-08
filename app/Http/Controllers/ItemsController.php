<?php

namespace App\Http\Controllers;
use App\Item;
use Illuminate\Http\Request;

class ItemsController extends Controller
{
    public function index()
    {
        $items = Item::all();
        return response()->json($items);
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

    public function delete($id)
    {
        $item = Item::find($id)->delete();
        return response()->json($item);
    }
}
