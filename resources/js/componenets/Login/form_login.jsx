import { Link } from "react-router-dom";



const Form_login = () =>{
    return(
        <div className="form_login">
          

            <div className="not_account">
                <p>لا تمتلك حساب ؟ يمكنك تسجيل عضويه جديده الان</p>
                <Link to="/register">انشاء حساب جديد</Link>
            </div>

            <form>

                <label for="email">البريد الالكتروني </label> <br />
                <input type="فثءف" name="email" placeholder="البريد الالكتروني" /> <br />


                <label for="email">كلمه المرور</label> <br />
                <input type="password" name="password" placeholder="كلمه المرور" />

                <input type="submit" value="تسجيل الدخول"  className="submit"/>

            </form>
        </div>

    )
}

export default Form_login