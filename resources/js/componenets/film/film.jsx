import Header from "../accueil/header/Header"
import Footer from "../accueil/footer/footer"
import Cima_logo from "../accueil/logo/Cima_logo"
import Card_film from "./card_film"
import Similar_Films from "./similar_films"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Film = (props) =>{
    const {id} = useParams()
    const [film,setFilm]  = useState([])

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${props.api_key}&language=en-US`)
        .then((res) => setFilm(res.data))
    })


    return(
        <div>
            <Header />
            <Cima_logo />
            <Card_film film={film} />

            <Similar_Films  id={id} api_key={props.api_key}/>
            <Footer />
        </div>
    )
}

export default Film