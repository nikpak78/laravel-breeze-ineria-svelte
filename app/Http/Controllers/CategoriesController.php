<?php

namespace App\Http\Controllers;
use Illuminate\Support\Str;
use App\Models\{Category, Post};
use Inertia\Inertia;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Categories/Index',[
            'categories' => Category::all()->map(fn($category)=> [
                'id' => $category->id,
                'name' => $category->name, 
                'slug' => $category->slug,
                
            ])
        ]);
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
        $request->validate([
            "name" => "required",
        ]);
        $slug = Str::slug($request->name . "-" . Str::random(0));
        category::create([
            "name" => $request->input("name"),
            "slug" => $slug,
        ]);

        return redirect("categories");
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(category $category)
    {    
        return Inertia::render('Categories/Show',[
        'category' => $category,
        'posts' => $category->posts,

    ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(category $category)
    {
        $category->posts()->detach();
        $category->delete();
        return redirect("/categories")->with("message", "category deleted successfully!");
    }
}
