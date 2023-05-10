import {  useEffect, useState } from "react";
import { AiFillCalendar,AiOutlineFieldTime,AiFillStar } from "react-icons/ai";
import React from "react";
import { Link,useParams } from "react-router-dom";
import axios from 'axios';
import { data } from "autoprefixer";






const Card_film = (props) =>{
    const [watchL,setWatchLater] = useState("مشاهدة لاحقاً")
    const [exist,setExist] = useState(false);
    const [userId,setUserId] = useState();
    const [isActive,setIsActive] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const { id } = useParams();

    const movieData = {
        id:props.film.id,
        title:props.film.original_title,
        overview:props.film.overview,
        date:props.film.release_date,
        runtime:props.film.runtime,
        image_path:props.film.backdrop_path,
        userId:userId
    };

 

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('/auth-check');
                const data = await response.json();
                setAuthenticated(data.authenticated);
                setUserId(data.userId);
            } catch (error) {
                console.error(error);
            }
        };

        const checkMovie = async (id) => {
            const exi = await checkMovieExists(id);
            setExist(exi);
            setIsActive(exi);
            if(exi){
                setWatchLater("حذف من المشاهدة لاحقاً");
            }else{
            setWatchLater("مشاهدة لاحقاً");
            }
          };
        
          checkMovie(id);
        checkAuth();
    }, [id]);
    
  
    const checkMovieExists = async (id) => {
        try {
          const response = await fetch(`/api/movies/${id}/exists`);
          const data = await response.json();
          return data.exists;
        } catch (error) {
          console.log(error);
          return false;
        }
      };
    

    function saveMovie(movieData) {
        axios.post('/api/movies', movieData)
        .then(response => {
            console.log(response.data);
            setIsActive(true);
            setWatchLater("حذف من المشاهدة لاحقاً");

        })
        .catch(error => {
          console.log(error);
        });
        
    }


    function deleteMovie(movieId){
        axios.delete(`/api/movies/${movieId}`)
        .then(response=>{
            setIsActive(false);
            setWatchLater("مشاهدة لاحقاً");
        })
    }

  
      
    const handleSaveClick=()=>{
        if(!authenticated){
            alert('يجب عليك تسجيل الدخول لتفعيل الخاصيه');
            setIsActive(false);
            setWatchLater("مشاهدة لاحقاً") 
        }
        else{
            if(isActive === true){
                deleteMovie(props.film.id);
                setWatchLater("حذف من المشاهدة لاحقاً");
            }else{
                saveMovie(movieData);
                setWatchLater("مشاهدة لاحقاً") 

            }

        }
        
      }
    

    return(

        
       <div>
         <div className="card_film">
            <div className="film_desc">

                <div className="first_flex">

                    <Link to={`/trailer/${props.film.id}/${props.film.original_title}`}>
                        <div className="action_link">
                            <p>مشاهدة وتحميل</p>
                        </div>
                    </Link>

                    
                    <div className="film_title">
                        <p> مترجم    {props.film.original_title} مشاهدة فيلم  </p>
                        <ul>
                            <li className="active">تصنيف</li>
                            {
                                props.film.genres 
                                ?
                                props.film.genres.map((item,index) =>{
                                    return(
                                       
                                             <li key={index}  >{item.name}</li>
                                            
                                        )
                                    })
                                :
                                ""
                            }
                        </ul>
                    </div>

                  

                </div>

                <div className="overview_film">
                        <p>قصة الفيلم</p>
                        <p> {props.film.overview} </p>
                </div>

                <div className="plus_info">
                    <div className="annee">
                        <div>
                            <p>سنة الإنتاج</p>
                            <p>{props.film.release_date} </p>
                        </div>
                        <span className="icon"><AiFillCalendar /></span>
                    </div>
                    <div className="runtime">
                        <div>
                            <p>مدة العرض </p>
                            <p> {props.film.runtime} min</p>
                        </div>
                        <span className="icon"><AiOutlineFieldTime /></span>
                    </div>
                </div>

            </div>

                <div className="film_pic">
                    <div className="card" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${props.film.backdrop_path})`}}>
                        <div className="etoile">
                            <span>{props.film.vote_average ? props.film.vote_average.toFixed(1) : ""}</span>
                            <span><AiFillStar /></span>

                        </div>
                        <div className="watch_later" >
                    {
                        // exist ? (
                            // <button    onClick={handleSaveClick} style={isActive ? { backgroundColor: "red"} : { backgroundColor: "#22b544"} } >  {watchL} </button>
                        // ):(
                            <button    onClick={handleSaveClick} style={isActive ? { backgroundColor: "red"} : { backgroundColor: "#22b544"} } >  {watchL}  </button>
                        // )
                    }
                        </div>
                    </div>
                </div>

        </div>
       </div>
    )
}


export default Card_film

// <button    onClick={handleSaveClick} style={isActive ? { backgroundColor: "red"} : { backgroundColor: "#22b544"} } > حذف من المشاهدة لاحقاً"</button>
