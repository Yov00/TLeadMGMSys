<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/employees', function () {
    return view('welcome');
});

Route::get('/employees/{id?}',  function () {
    return view('welcome');
});
Route::get('/employees/edit/{id}',  function () {
    return view('welcome');
});

Route::get('/employeeForm', function () {
    return view('welcome');
});
Route::get('/arrivedItems', function () {
    return view('welcome');
});

// Route::get('/arrived','ItemsController@arrived');
// Route::get('{all?}', function(){
//     return view('welcome');
// })->where('all', '([A-z\d-\/_.]+)?');

// Route::view('{path?}', 'welcome');



