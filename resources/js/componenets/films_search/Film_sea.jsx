import Header from "../accueil/header/Header"
import Footer from "../accueil/footer/footer"
import Cima_logo from "../accueil/logo/Cima_logo"
import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import Movies_compo from "../Movies_compo/Movies_compo"



const Film_sea = () =>{

    const {search} = useParams()
    const api_key  = "ac11db6aea7ff49ef7f2970158bfa9a1"
    const [films,setFilms] = useState([])


    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${search}&page=1&include_adult=false`)
        .then((res) => setFilms((res.data.results)))

    })


    return(
        <div>
            <Header />
            <Cima_logo />
            <div className="search_cs">
                <span><b>{search}</b>نتائج البحث المتعلقة بـ </span>
            </div>
            {
                films.length > 0
                
                ?

                <div className="grid_films">

                {
                    films.map((item)=>{

                        if(item.backdrop_path !== null){
                            
                            return(
                                <Link to={`/film/${item.id}`}>
                                    <Movies_compo image={item.backdrop_path} vote_count={item.vote_count} vote={item.vote_average} title={item.title} name={item.name} overview={item.overview} />
                                </Link>
                            )

                        }
                        
                    })
                }
                 </div>

                 :
                 <p className="no_film">...{search}ليس هناك أي فيلم بإسم </p>
            }

            <Footer />
        </div>
    )
}

export default Film_sea