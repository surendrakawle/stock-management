<?php

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('get-category','CategoryController@index');
Route::post('get-product','ProductController@index');
Route::post('get-sale','SaleController@index');
Route::post('get-purchase','PurchaseController@index');
Route::post('get-customer','CustomerController@index');
Route::post('get-account','AccountController@index');

Route::post('add-category','CategoryController@store');
Route::post('add-product','ProductController@store');
Route::post('add-sale','SaleController@store');
Route::post('add-purchase','PurchaseController@store');
Route::post('add-customer','CustomerController@store');
Route::post('add-account','AccountController@store');

Route::post('edit-category','CategoryController@update');
Route::post('edit-product','ProductController@update');
Route::post('edit-sale','SaleController@update');
Route::post('edit-purchase','PurchaseController@update');
Route::post('edit-customer','CustomerController@update');
Route::post('edit-account','AccountController@update');

Route::post('delete-category','CategoryController@destroy');
Route::post('delete-product','ProductController@destroy');
Route::post('delete-sale','SaleController@destroy');
Route::post('delete-purchase','PurchaseController@destroy');
Route::post('delete-customer','CustomerController@destroy');
Route::post('delete-account','AccountController@destroy');
