import { useState,useEffect } from "react";
import { AiFillStar ,AiOutlinePlayCircle,AiOutlineArrowLeft} from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import Movies_compo from "../../Movies_compo/Movies_compo";



const MoviesFilter = (props) =>{
    // create a const pour stocker les films 
    const [films,setFilms] = useState([])
    // API KEY 
    const api_key ="ac11db6aea7ff49ef7f2970158bfa9a1"

    
    // importer les films avec API et stocker la dans state films 
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${props.filter}?api_key=${api_key}&language=en-US&page=${props.page}`)
        .then((res) => setFilms(res.data.results))
    })
    
    // Afficher les films 
    return(
        
        <div className="grid_films">

            {
                
                films.map((item,index)=>{
                    // && item.video === true
                    if(item.backdrop_path !== null ){
                    
                    return(
                        <Link to={`/film/${item.id}`}>
                                <Movies_compo image={item.backdrop_path} vote_count={item.vote_count} vote={item.vote_average} title={item.title} name={item.name} overview={item.overview} />
                        </Link>
                    )
                    }
                })
            }
          </div>
    )

}

export default MoviesFilter