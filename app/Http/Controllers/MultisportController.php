<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Multisport;

class MultisportController extends Controller
{
    public function index()
    {
        $multisportCards = Multisport::with('employee')->get();
        return response()->json($multisportCards);
    }

    public function store(Request $request)
    {
        $msCard = Multisport::create([
            'card_number'=>$request->card_number,
            'employee_id'=>$request->employee_id,
            'active'=>$request->active
        ]);

        $msCard->save();

        return response()->json($msCard);
    }

    public function edit(Request $request)
    {
        $msCard = Multisport::find($request->id);
        if($msCard)
        {
            $active = !$request->active;
            $msCard->update([
                'active'=>$active
            ]);

            $msCard->save();
        }
        else{
            $msCard = null;
        }
        return response()->json($msCard);
    }
}
