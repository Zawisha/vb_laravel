<?php

use Illuminate\Http\Request;

//Route::middleware('auth:api')->get('/user', function (Request $request) {
 //   return $request->user();
//});

Route::post('/register', 'API\AuthController@register');
Route::post('/login', 'API\AuthController@login');
Route::post('/select_region', 'board\BoardController@select_region');
Route::post('/select_category', 'board\BoardController@select_category');


Route::middleware('auth:api')->group(function () {
    Route::post('/logout', 'API\AuthController@logout');
    Route::get('/get-user', 'API\AuthController@getUser');
});
