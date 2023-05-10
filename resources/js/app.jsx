// import logo from './logo.svg';
// import './app.css';
import Accueil from './componenets/accueil/Accueil';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Film_sea from './componenets/films_search/Film_sea';
import Film_genre from './componenets/films_search/Film_genre';
import Film from './componenets/film/film';
import Login from "./componenets/Login/login";
import Register from './componenets/register/register';
import Trailer from './componenets/trailer/trailer';
import './bootstrap';
import 'bootstrap';
import Alpine from 'alpinejs';








const App = () => {

   
const api_key = "ac11db6aea7ff49ef7f2970158bfa9a1";
  
  return (
    <div  className='app'>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/search/:search" element={<Film_sea />} />
            <Route path="/search_genre/:genre" element={<Film_genre />} />
            <Route path="/film/:id" element={<Film api_key={api_key} />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/trailer/:id/:name" element={<Trailer api_key={api_key}/>} />
            
        </Routes>
      </BrowserRouter>
    </div>
    )
}

export default App;
window.Alpine = Alpine;
Alpine.start();


