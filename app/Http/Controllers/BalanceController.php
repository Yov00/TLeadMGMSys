<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Balance;
class BalanceController extends Controller
{
    public function index()
    {
        $balance = Balance::first();

        return response()->json($balance);
    }

    public function update(Request $request)
    {
        $oldBalance = Balance::find($request->id);

        $oldBalance->ammount = $request->ammount;

        $oldBalance->save();

        return response()->json($oldBalance);
    }
}
