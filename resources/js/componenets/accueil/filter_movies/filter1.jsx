import { CiTimer,CiDesktop ,CiHeart} from "react-icons/ci";
import { HiUsers } from "react-icons/hi";
import { SiGoogleanalytics } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import MoviesFilter from "./moviesFilter";




const Filter_one = () =>{

    const [filter,setFilter] = useState("upcoming")
    const [page,setPage] = useState(1)
    const [isActive1,setisActive1] = useState(false)
    const [isActive2,setisActive2] = useState(false)
    const [isActive3,setisActive3] = useState(false)
    const [isActive4,setisActive4] = useState(false)
    const [isActive5,setisActive5] = useState(true)

    const LinkRef = useRef()

    // CONFIGUE ARROW NEXT AND PREVIOUS FOR SLIDER 
    
    const ArrowNext = (props) =>{
        const {className,style,onClick} = props;
        return(
          <div
            className={className}
            style={{
              // right:"-50%",
              display:"none"
            }}
            onClick={onClick} 
          />
        )
    }

    const ArrowPrev = (props) =>{
        const {className,style,onClick} = props;
        return(
          <div
            className={className}
            style={{
            //   zIndex: "1",
              // left:"-50%",
              display:"none"
            }}
            onClick={onClick} 
          />
        )
    }

    // SETTINGS SLIDER 
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow : <ArrowNext />,
        prevArrow : <ArrowPrev />,
        responsive: [
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 4,
              },
            },
            {
                breakpoint : 400,
                settings : {
                    slidesToShow : 3,
                }
            },
            {
                breakpoint : 320,
                settings : {
                    slidesToShow : 2,
                }
            }
    
        ]
      };
    
    // FUNCTION FOR CHANGE STATE FILTER TO POPULAR
      const Polupar = () =>{
        setisActive1(false)
        setisActive2(false)
        setisActive3(true)
        setisActive4(false)
        setisActive5(false)
        setFilter('popular')
        setPage(1)
      }

    // FUNCTION FOR CHANGE STATE FILTER TO TOP_RATED
      const TRated = () =>{
        setFilter('top_rated')
        setisActive1(true)
        setisActive2(false)
        setisActive3(false)
        setisActive4(false)
        setisActive5(false)

      }

    // FUNCTION FOR CHANGE STATE FILTER TO NEW_FILMS
      const Nplaying = () =>{
        setFilter("upcoming")
        setisActive1(false)
        setisActive2(false)
        setisActive3(false)
        setisActive4(false)
        setisActive5(true)
      }
    
      // FUNCTION FOR CHANGE STATE FILTER TO PLUS_AIMER
      const TAime = ()=> {
        setisActive1(false)
        setisActive2(true)
        setisActive3(false)
        setisActive4(false)
        setisActive5(false)
        setFilter('popular')
        setPage(2)
      }

      // FUNCTION FOR CHANGE STATE FILTER TO FIXED FILM
      const Fixed = () =>{
        setisActive1(false)
        setisActive2(false)
        setisActive3(false)
        setisActive4(true)
        setisActive5(false)
        setFilter('popular')
        setPage(3)
      }
   

   
  
  return(
  <div>
        <Slider {...settings} className="filter1" >

            <div onClick={TRated} className={isActive1 ? "active" : ""} >
                <span><SiGoogleanalytics /></span>
                <p> الأعلى تقييما</p>
            </div>
            <div onClick={TAime} className={isActive2 ? "active" : ""} >
                <span><CiHeart /></span>
                <p> الأكثر إعجابا</p>
            </div>
            <div onClick={Polupar} className={isActive3 ? "active" : ""} >
                <span><HiUsers /></span>
                <p> الأكثر مشاهدة</p>
            </div>
            <div onClick={Fixed} className={isActive4 ? "active" : ""} >
                <span><CiDesktop /></span>
                <p> المتبث</p>
            </div>
            <div className={isActive5 ? "active" : ""}  onClick={Nplaying} ref={LinkRef}>
                <span><CiTimer /></span>
                <p>المضافة حديثا</p>
            </div>
        </Slider>
        {/* CALL TO COMPONENT MOVIESFILITER POUR FILTER LES FILMS ca depend a state de filter */}
        <MoviesFilter filter={filter} page={page}/>
        </div>

    )
}   

export default Filter_one;