import { Link } from "react-router-dom";
import { useState } from "react";


const Form_register = () =>{

    const [formData,setFormData] = useState({
        name : "",
        username : "",
        email : "",
        password : "",
        check_p : ""
    })

    const [dataErrors,setDataErrors] = useState({}) 

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData({...formData,[name] : value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const errors = validateForm(formData)
        setDataErrors(errors)

        
        
        if(Object.keys(errors).length < 1){
          console.log(formData)
        }
    }

    const validateForm = (values) => {
      
        let errors = {};
        if (!values.name.trim()) {
          errors.name = 'The name field is required..';
        }
        if (!values.username.trim()) {
            errors.username = 'The username field is required..';
          }
        if (!values.email.trim()) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = 'The email field is required..';
        }
        if (!values.password.trim()) {
          errors.password = 'The password field is required..';
        } else if (values.password.trim().length < 6) {
          errors.password = 'Password must be at least 6 characters';
        }
        if (values.password !== values.check_p) {
          errors.check_p = 'Passwords do not match';
        }
        return errors;
      }

    


    return(
        <div className="form_register">

            
        <div className="have_account">
                <p>تمتلك حساب ؟ يمكنك تسجيل  الدخول الان</p>
                <Link to="/login"> تسجيل الدخول</Link>
            </div>

            <form onSubmit={handleSubmit}>

                <label for="name" />الاسم الكامل<br />
                <input type="text" name="name" placeholder="الاسم الكامل" value={formData.name}  onChange={handleChange}/>  <br />
                {dataErrors.name && <div className="error">{dataErrors.name}</div>}


                <label for="username" />اسم العضو<br />
                <input type="text" name="username" placeholder="اسم العضو" value={formData.username}  onChange={handleChange}/> <br />
                {dataErrors.username && <div className="error">{dataErrors.username}</div>}

            
                <label for="email" /> البريد الإليكتروني<br />
                <input type="email" name="email" placeholder=" البريد الإليكتروني" value={formData.email} onChange={handleChange}/> <br />
                {dataErrors.email && <div class="error">{dataErrors.email}</div>}
                
                <label for="password" /> كلمة المرور <br />
                <input type="password" name="password" placeholder="كلمة المرور" value={formData.password} onChange={handleChange}/> <br />
                {dataErrors.password && <div class="error">{dataErrors.password}</div>}


                <label for="check_password" /> تأكيد كلمة المرور <br />
                <input type="password" name="check_p" placeholder=" تأكيد كلمة المرور"  value={formData.check_p}  onChange={handleChange}/> <br />
                {dataErrors.check_p && <div class="error">{dataErrors.check_p}</div>}

                <input type="submit" value="انشاء حساب جديد" className="submit" />

            </form>
        </div>
    )
}

export default Form_register;