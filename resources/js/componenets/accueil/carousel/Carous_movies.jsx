import React, { useEffect, useState } from  "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillStar ,AiOutlinePlayCircle,AiOutlineArrowLeft} from "react-icons/ai";





export default function Carous_movies(){
    const [films,setFilms] = useState([]);

      useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=ac11db6aea7ff49ef7f2970158bfa9a1`)
        .then((res) => setFilms(res.data.results.splice(0,10)))
    },[])

  

  

    const ArrowNext = (props) =>{
      const {className,style,onClick} = props;
      return(
        <div
          className={className}
          style={{
            right: 0,
            zIndex: "1",
            width: "50px",
            height: "42px",
            background: "#4978d2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: "35px",
            borderTopLeftRadius: "35px",
          }}
          onClick={onClick} 
        />
      )
    }

    const ArrowPrev = (props) =>{
      const {className,style,onClick} = props
      return(
        <div 
        className={className} 
        style={{
          left: 0,
          zIndex: "1",
          width: "50px",
          height: "42px",
          background: "#4978d2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottomRightRadius: "35px",
          borderTopRightRadius: "35px",
        }} 
        onClick={onClick}/>
      )
    }


    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 6,
      swipeToSlide: true,
      autoplay:true,
      autoplaySpeed: 3000,

      nextArrow : <ArrowNext />,
      prevArrow : <ArrowPrev />,
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
    
    return (
      <div>

        <Slider {...settings}>
          {
            films.map((item,index)=>{
              return(
                <div key={index} className="carousel_link">
                      <Link to={`/film/${item.id}`}>
                    <div className="carousel_card" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
                    <div className="evalué">
                        <span><AiFillStar /></span>
                        <span>{item.vote_average.toFixed(1)}</span>
                    </div>
                    <div className="play_film">
                    <span><AiOutlinePlayCircle /></span>
                    <p>   
                    فيلم  <br />
                          {item.title}
                          {item.name}
                           </p>
                    <p>{item.overview.slice(0,100)}</p>
                    </div>
              </div>
                </Link>
                </div>
              )
            })
          }
        </Slider>

      </div>
    );
}