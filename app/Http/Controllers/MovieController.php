<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
  

    public function getMovies()
    {
        $movies = Movie::all();
        return response()->json($movies);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
            Movie::create([
                'idmovie' => $request->id,
                'title' => $request->title,
                'overview' =>$request->overview,
                'date' => $request->date,
                'runtime' => $request->runtime,
                'image_path' => $request->image_path,
                'user_id' => $request->userId,
            ]);
            
        return response()->json([
            'message' => 'Movie saved successfully!',
            'id'=>$request->id,
            'userId'=>$request->userId,
            'title'=>$request->title,
            'date'=>$request->date,
            'overview'=>$request->overview,
            'image_path'=>$request->image_path,


        ]);
    }



    /**
     * Display the specified resource.
     */
    public function checkExists($id)
    {
        $movieExists = Movie::where('idmovie', $id)->exists();
    
        return response()->json([
            'exists' => $movieExists,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(String $id)
    {
        $movie = Movie::find($id);
        if ($movie) {
            $movie->delete();
            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false, 'message' => 'Movie not found.'], 404);
        }

       
    }
}
