import react from "react";
import { BiMenu } from "react-icons/bi";
import { useRef,useState } from "react";
import { CgChevronDown} from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
// import Cookies from 'js-cookie';
import axios from "axios";
import { useEffect } from "react";
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
  
     




 


function Header (){
        const navRef = useRef();
        const [iconstate,setIconState] = useState(true);
   
        const showNavbar = ()=>{
            navRef.current.classList.toggle("responsive_nav");
            setIconState(false);
        }
        const closeNavbar = ()=>{
            navRef.current.classList.toggle("responsive_nav");
            setIconState(true);
        }
        

    
 
    //new adding login and logout
    const [name, setName] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [csrfToken, setCsrfToken] = useState('');


    //checklogin
    useEffect(() => {
        fetch('/auth-check')
          .then(response => response.json())
          .then(data => {
            setAuthenticated(data.authenticated);
            setName(data.name);
          })
          .catch(error => console.error(error));
      }, []);

      //logout  
      const handleLogout = async () => {
        try {
          const response = await axios.post('/logout', { _token: csrfToken });
          console.log(response);
          window.location.href = '/';
        } catch (error) {
          console.error(error);
          // Handle error case
        }
      };
    
      const getCsrfToken = () => {
        const tokenElement = document.querySelector('meta[name="csrf-token"]');
        if (tokenElement) {
          setCsrfToken(tokenElement.content);
        }
      };
      
                


        return(
            <div className="fixed_header">
            <header>
                <div className="content_header">

                { !authenticated ?
                <div className="log">
                        <a  href="/register" className="btn btn-dark">انشاء حساب</a>
                        <a  href="/login" className="btn btn-dark">الدخول</a>
                </div>       
                :
                <Dropdown>
                <Dropdown.Toggle variant="none"  id="dropdown-basic">
                  {name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="box" >
                    <a href='/profile' style={{textDecoration:'none', color:'black',paddingLeft:'20px'}} >  الملف الشخصي </a>
                  </div>
                  <Dropdown.Item >
                  تعديل الملف الشخصى 
                  </Dropdown.Item>
                  <Dropdown.Item >
                  افلام اعجبتني
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                  طلبات الأعضاء
                  </Dropdown.Item>
                  <Dropdown.Item href="#" onClick={handleLogout} >
                  تسجيل خروج
                  <form id="logout-form" action="/logout" method="POST" className="d-none">
                        <input type="hidden" name="_token" value={csrfToken} />
                  </form>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                
                }
                    <div ref={navRef} className="list">
                        <ul>
                            <li className="list_add_respo"><a className="a1" href="#">افلام ومسلسلات اكشن</a></li>
                            <li className="list_add_respo"><a className="a1" href="#">افلام ومسلسلات رعب</a></li>
                            <li className="list_add_respo" ><a className="a1" href="#"> Game of thrones مسلسل</a></li>
                            <li className="list_add_respo"><a className="a1" href="#">مسلسلات تركي مترجم</a></li>
                            <li className="list_add_respo"><a className="a1" href="#">الدراما الكوريه</a></li>
                            <li className="list_add_respo"><a className="a1" href="#">Cima Club</a></li>
                            <li className="list_add_respo"><a className="a1" href="#">CimaClub</a></li>
                            <li className="list_add_respo"><a className="a1" href="#">سيما كلوب</a></li>
                            <li className="list_add_respo"><a className="a1" href="#">افلام اون لاين</a></li>
                            <li ><span><CgChevronDown /></span><a className="a1" href="#">أخرى</a>               
                               <div  className="list1" >
                                <div className="others">
                                        <a href="#">عروض تلفزيونيه</a>
                                        <a href="#">عروض المصارعه</a>
                                        <a href="#">منوعات</a>
                                        <a href="#">الأفلام الاعلى تقييماً</a>
                                </div>
                               </div>
                            </li>
                            <li ><span><CgChevronDown /></span><a className="a1" href="#">الأفلام</a>               
                                <div className="list2">
                                    <div className="série">
                                            <Link to="/search_genre/Action">افلام أكشن   </Link>
                                            <Link to="/search_genre/Drama"> افلام دراما</Link>
                                            <Link to="/search_genre/Animation">    افلام انيميشن</Link>
                                            <Link to="/search_genre/History">    افلام تاريخ </Link>
                                            <Link to="/search_genre/Comedy">    افلام كوميديا </Link>
                                            <Link to="/search_genre/Science Fiction">    افلام الخيال العلمي  </Link>
                                            <Link to="/search_genre/Documentary">    افلام وثائقية  </Link>

                                    </div>
                                </div>
                            </li>
                            {/* <li ><span><CgChevronDown /></span><a className="a1" href="#">الأفلام</a>               
                                <div className="list3">
                                    <div className="films">
                                            <Link to="/search_genre/Action">افلام أكشن   </Link>
                                            <Link to="/search_genre/Drama"> افلام دراما</Link>
                                            <Link to="/search_genre/Animation">    افلام انيميشن</Link>
                                            <Link to="/search_genre/History">    افلام تاريخ </Link>
                                            <Link to="/search_genre/Comedy">    افلام كوميديا </Link>
                                            <Link to="/search_genre/Science Fiction">    افلام الخيال العلمي  </Link>
                                            <Link to="/search_genre/Documentary">    افلام وثائقية  </Link>

                                    </div>
                                </div></li> */}
                            <li><Link className="a1" to="/">الرئيسية</Link></li>
                        </ul>
                    </div>
                    <div className={iconstate === true ? "menu" :"remove"}  onClick={showNavbar}>
                        <span><BiMenu /></span>
                    </div> 
                     <div className={iconstate === false ? "menu" :"remove"}  onClick={closeNavbar}>
                        <span><AiOutlineClose /></span>
                    </div>

                </div>

               
            </header>

            </div>
        
        )
    }
export default Header;

