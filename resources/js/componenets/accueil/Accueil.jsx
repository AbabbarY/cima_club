
import Header from '../accueil/header/Header';
import Cima_logo from "../accueil/logo/Cima_logo";
import Carous_movies from '../accueil/carousel/Carous_movies';
import Shadow from '../accueil/filter_movies/shadow';
import Footer from '../accueil/footer/footer';

function Accueil() {
  return (
   
     <div>
        <Header />
        <Cima_logo />
        <Carous_movies />
        <Shadow />
        <Footer />
     </div>
  );
}

export default Accueil;
