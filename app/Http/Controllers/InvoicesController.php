<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Invoice;
class InvoicesController extends Controller
{
    public function inde()
    {
        $invoices = Invoice::all();

        return response()->json($invoices);
    }
    
    public function create(Request $request)
    {
       $invoice= Invoice::create([
            'number'=>$request->number,
            'ammount'=>$request->ammount,
            'item_id'=>$request->item_id
        ]);

        return response()->json($invoice);
    }
}
