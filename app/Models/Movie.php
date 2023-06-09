<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;
    protected $fillable = ['title','idmovie','genres','overview','date','runtime','image_path','user_id'];

    protected $primaryKey = 'idmovie';


    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

}
