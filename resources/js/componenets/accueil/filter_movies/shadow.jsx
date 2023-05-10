import axios from "axios";
import { useEffect,useState } from "react";
import Filter_one from "./filter1";
import Filter_two from "./filter2";
import MoviesFilter from "./moviesFilter";


const Shadow = (props) =>{
   

   
   


    return(
        <div className="shadow">
            <div className="shdw"></div>
            {/* <div className="filter"> */}
                <Filter_one />
                {/* <Filter_two /> */}
        </div>
    )
}   

export default Shadow;