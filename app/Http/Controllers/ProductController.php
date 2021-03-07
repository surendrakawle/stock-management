<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Product::orderBy('id', 'DESC')->get();
        return response()->json(["error" => false, "data" => $data, "message" => ""], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(!isset($request->id)) {
            $product = Product::create(["name" => $request->name,"category" => $request->category,"qty" => $request->qty,"price" => $request->price]);
            return response()->json(["error" => false, "data" => $product, "message" => "Product added"], 200);
        } else {
            $c = Product::find($request->id);
            if(isset($c)) {
                $c->update(["name" => $request->name,"category" => $request->category,"qty" => $request->qty,"price" => $request->price]);
                return response()->json(["error" => false, "data" => [], "message" => "Product Updated"], 200);
            } 
            return response()->json(["error" => true, "data" => [], "message" => "something went wrong"], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        if(isset($request->id)) {
            $c = Product::find($request->id);
            $c->delete();
            return response()->json(["error" => false, "data" => [], "message" => "Product deleted successfully"], 200);
        }
        return response()->json(["error" => true, "data" => [], "message" => "something went wrong"], 200);
    }
}
