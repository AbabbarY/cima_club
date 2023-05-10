import { BiSearchAlt2 } from "react-icons/bi";
import { FaFacebookF,FaTwitter,FaTelegram } from "react-icons/fa";
import { useState } from "react";
import {Link} from "react-router-dom";



const Cima_logo  = () =>{

        const [search,setSearch] = useState('')

        return(
            <div className="comp_logo">
             <div className="flex_logo">

                <div className="sea_soc">
                    <div className="social">
                        <a href=""><FaTelegram /></a>
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaFacebookF /></a>
                     
                    </div>
                    <div className="search">
                        <Link to={`/search/${search}`}>
                            <button className="btn_search">بحث</button>
                        </Link>
                        <input type="text" placeholder="الكلمات الدلالية للبحث" onChange={e=>setSearch(e.target.value)} />
                        <span>
                            <BiSearchAlt2 />
                        </span>
                    </div>
                </div>

                <div className="nom_dom">
                    <Link to="/" style={{textDecoration:"none"}}>
                        <div className="france">
                            <p>CIMA</p>
                            <p>CLUB</p>
                        </div>
                    </Link>
                  
                     
                </div>


            </div>
            </div>
        )
    }



export default Cima_logo;