<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Token;
class TokensController extends Controller
{
    public function index()
    {
        $tokens = Token::all();

        return response()->json($tokens);
    }
}
