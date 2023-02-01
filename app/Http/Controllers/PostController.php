<?php

namespace App\Http\Controllers;
use Illuminate\Support\Str;
use Inertia\Inertia;
use App\Models\{ Post, Category};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\{File};
class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
        return Inertia::render('Posts/Index',[
            'posts' => Post::latest()->paginate(5)->through(fn($post)=> [
                'id' => $post->id,
                'title' => $post->title, 
                'description' => $post->description,
                'image' => $post->image,
                'body' => $post->body,
                'slug' => $post->slug,
                'categories' => $post->categories,
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
        $categories = Category::all();
        return Inertia::render('Posts/Create',
        [
            "post" => new Post(),    
            'categories' => Category::all()
        ]);
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
        "title" => "required",
        "description" => "required",
        "body" => "required",
        "image" => "required|mimes:jpg,png,jpeg|max:5048",
    ]);
    $slug = Str::slug($request->title . "-" . Str::random(0));
    if ($request->hasFile("image")) {
        $img_ext = $request->file("image")->getClientOriginalExtension();
        $image = "image" . time() . "." . $img_ext;
        $path = $request
            ->file("image")
            ->move(public_path() . "/uploads/images/", $image); //image save public folder
    }
   
    $post = Post::create([
        "title" => $request->input("title"),
        "slug" => $slug,
        "image" => $image,
        "description" => $request->input("description"),
        "body" => $request->input("body"),
       
    ]);

    $post->categories()->sync($request->categories, false);
    return  redirect('/posts');
}


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
       
        return Inertia::render('Posts/Show',[
            'post' => $post,
            'categories' => $post->categories
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
    public function destroy(Post $post)
    {
       
        $destination = "uploads/images/" . $post->image;
        if (File::exists($destination)) {
            File::delete($destination);
        }
        $post->categories()->detach();
        $post->delete();
        return redirect('/posts');
    }

}
