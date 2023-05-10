import Header from "../accueil/header/Header"
import Footer from "../accueil/footer/footer"
import Cima_logo from "../accueil/logo/Cima_logo"
import { useEffect,useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { CiTextAlignCenter } from "react-icons/ci"

const Trailer = (props) => {
    const {id} = useParams();
    const {name} = useParams();
    const [film,setFilm] = useState();

    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${props.api_key}&language=en-US`)
        .then((res) => setFilm(res.data.results))
    })

    const handleTrailer = () =>{
        if(film){
            if (film.length > 0){
                const result = film.find((item) => item.name === "Official Trailer")
                    if(result){
                        return(
            
                            <div>
                                <p>مترجم <span>{name}</span> مشاهدة ترايلر فيلم</p>
                                <iframe type="text/html"  src={`https://www.youtube.com/embed/${result.key}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=fr&modestbranding=1&fs=1&autohide=1`}> </iframe>
                            </div>
                        )
                    }else{
                        return(
        
                            <div>
                                <p style={CiTextAlignCenter}>...لا يوجد ترايلر لهذا الفيلم</p>
                            </div>
                        ) 
                    }
            }else{
                    return(
        
                        <div>
                            <p>...لا يوجد ترايلر لهذا الفيلم</p>
                        </div>
                    )
                }
            }
    }
    

    return(
       <div>
         <Header />
        <Cima_logo />

        <div class="trailer">

            {handleTrailer()}
        
            
        </div>


        <Footer />
       </div>


    )

}


export default Trailer