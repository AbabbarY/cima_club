import React, { useEffect, useState } from  "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Movies_compo from "../Movies_compo/Movies_compo";

const Similar_Films = (props) =>{
    const id = props.id
    const [films,setFilms] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${props.api_key}&language=en-US&page=1`)
        .then((res) => setFilms(res.data.results))
    })
  
      const settings = {
        className: "center",
        infinite: true,
        centerPadding: "200px",
        slidesToShow:6,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
        
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1056,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };
    
    return(
        <div className="similar_carousel">
          <div className="geration">
            <p>مقالات مشابهة</p>
          </div>
        <Slider {...settings}>
          {
            films.map((item,index)=>{
              if(item.backdrop_path !== null){
              return(
                <div className="carousel_link">
                      <Link to={`/film/${item.id}`}>
                         <Movies_compo image={item.backdrop_path} vote_count={item.vote_count} vote={item.vote_average} title={item.title} name={item.name} overview={item.overview} />
                       </Link>
                </div>)
            }
            })
          }
        </Slider>
        </div>
    )
}

export default Similar_Films;