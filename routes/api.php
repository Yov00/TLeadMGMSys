<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/items','ItemsController@index');
Route::post('/items/create','ItemsController@create');
Route::get('/items/{id}/edit','ItemsController@edit');
Route::put('/item/{id}/update','ItemsController@update');
Route::delete('/item/{id}/delete','ItemsController@destroy');
Route::get('/arrivedItems','ItemsController@arrived');

// Employees
Route::get('/employees','EmployeesController@index');
Route::get('/employees/{id}','EmployeesController@edit');
Route::post('/employees/create','EmployeesController@create');
Route::post('/employees/{id}/update','EmployeesController@update');

// Tokens
Route::get('/tokens','TokensController@index');

// Invoices
Route::get('/invoices','InvoicesController@index');
Route::post('/invoices/create','InvoicesController@create');

// Balance
Route::get('/balance','BalanceController@index');
Route::put('/balance/{id}/update','BalanceController@update');

// Multisport cards
Route::get('/get-multisport-cards','MultisportController@index');
