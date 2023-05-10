import Header from "../accueil/header/Header"
import Footer from "../accueil/footer/footer";
import Cima_logo from "../accueil/logo/Cima_logo";
import Form_register from "./form_register";

const Register = () =>{
    return(
        <div>
            <Header />
            <Cima_logo />
            <Form_register />
            <Footer />
        </div>
    )
}

export default Register