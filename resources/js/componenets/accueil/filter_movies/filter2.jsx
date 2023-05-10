import { all } from "axios";
import { BsArrowLeft} from "react-icons/bs";
import { MdOutlineKeyboardArrowDown} from "react-icons/md";
import {useState} from "react" ; 



const Filter_two = () =>{

  
    return(
        // <>
        <div className="filter2">
            <div className="arrow">
                <p> تصفية متقدمة</p>
                <span><BsArrowLeft /></span>
            </div>

            <div className="more_filter">
                <div className="class" >
                    <span><MdOutlineKeyboardArrowDown /></span>
                    <h6>القسم</h6>
                </div>
                <div>
                    <span><MdOutlineKeyboardArrowDown /></span>
                    <h6>السنة</h6>
                </div>
                <div>
                    <span><MdOutlineKeyboardArrowDown /></span>
                    <h6>النوع</h6>
                </div>
                <div>
                    <span><MdOutlineKeyboardArrowDown /></span>
                    <h6>الجودة</h6>
                </div>
            </div>
        </div>
        
        
        )
    }   
    
    export default Filter_two;

    /* <div className="details"> 
        {
            items.map((item) => {
                return(
                    <div>
                        <p>{item}</p>
                        <input type="radio" name="radio" />
                    </div>
                )
            })
        }
        
     
    </div> 
    /* </> */