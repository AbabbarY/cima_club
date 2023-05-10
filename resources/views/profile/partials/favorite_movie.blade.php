

@extends("profile.edit")

@section("content")



<div class="grid_films" style="">

@foreach($movie as $mov)

<div  class="carousel_card" style="background-image:url(https://image.tmdb.org/t/p/original{{$mov->image_path}});background-position: center;background-size: cover;background-repeat: no-repeat;box-shadow: inset 0 0 184px 20px rgba(0,0,0,1);">
   
    <div class="episode">
            <p> التقييمات</p>
            <p>{{ $mov->runtime }}</p>
        </div>
    <div class="play_film">
        <a href="http://127.0.0.1:8000/film/{{$mov->idmovie}}">
            <span> <img src="../images/play-button.png" style="width:80px " /> </span>
        </a>
        <p>   
        فيلم  <br />
        {{ $mov->title }}
        </p>
        
        <p>  {{ $mov->overview }}
        </p>

    </div>
</div>
    



@endforeach
</div>

@endsection

