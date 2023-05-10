import Header from "../accueil/header/Header"
import Footer from "../accueil/footer/footer";
import Cima_logo from "../accueil/logo/Cima_logo";
import Form_login from "./form_login";

const Login = () =>{
    return(
        <div>
            <Header />
            <Cima_logo />
            <Form_login />
            <Footer />
        </div>
    )
}

export default Login