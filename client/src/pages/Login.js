import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './loginstyle.css'
import swal from 'sweetalert'

function Login() {
  const navigate=useNavigate()
  const [contacts,setContacts]=useState({
    username:"",
    password:""
  });
  
 const handleInputChange=(e)=>{
    const {name,value}=e.target
    setContacts({
      ...contacts,
      [name]:value
  })
  console.log(contacts);
  }



  const validation=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/login",contacts)
    .then((response)=>{
      console.log(response);
      if(response.data.success===true){
        if(response.data.role===2)
        {
          localStorage.setItem("username",response.data.name)
        localStorage.setItem("loginId",response.data.loginId)
        localStorage.setItem("role",response.data.role)
        localStorage.setItem("token",response.data.token)
        navigate("/")
        }
        else if(response.data.role===1)
        {
          localStorage.setItem("username",response.data.name)
          localStorage.setItem("loginId",response.data.loginId)
          localStorage.setItem("role",response.data.role)
          localStorage.setItem("token",response.data.token)
          navigate("/adminDashboard")
        } else if(response.data.role===3)
        {
          localStorage.setItem("username",response.data.name)
          localStorage.setItem("loginId",response.data.loginId)
          localStorage.setItem("role",response.data.role)
          localStorage.setItem("token",response.data.token)
          navigate("/volunteerDashboard")
        }

        else if(response.data.role===4)
        {
          localStorage.setItem("username",response.data.name)
          localStorage.setItem("loginId",response.data.loginId)
          localStorage.setItem("role",response.data.role)
          localStorage.setItem("token",response.data.token)
          navigate("/publisherDashboard")
        }      }
      
    }).catch((err)=>{
      swal(err.response.data.message);
      })
    // console.log("login data"+JSON.stringify(contacts)) ;
    //  navigate('/adminDashboard')
  }
  return (
   <div>
     <div className="loginmain">

<section className="sign-in">
    <div className="logincontainer">
        <div className="signin-content">
            <div className="signin-image">
                <figure><img width="100%" src="assets/images/login.jpg" alt="sing up image"/></figure>
                <a href="/register" className="signup-image-link">Create an account</a>
            </div>

            <div className="signin-form">
                <h2 className="form-title">Sign In</h2>
                <form onSubmit={validation} className="register-form" id="login-form">
                    <div className="form-group">
                        <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" id="your_name" placeholder="Your Name" name="username" onChange={handleInputChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                        <input type="password" name="password" id="your_pass" placeholder="Password" onChange={handleInputChange} required/>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                        <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                    </div>
                    <div className="form-group form-button">
                        <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                    </div>
                </form>
                <div className="social-login">
                    <span className="social-label">Or login with</span>
                    <ul className="socials">
                        <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                        <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                        <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

</div>

    {/* <section classNameName="login-content">
      <div classNameName="logo">
        <h1>EBook</h1>
      </div>
      <div classNameName="login-box">
        <form classNameName="login-form" onSubmit={validation}>
          <h3 classNameName="login-head"><i classNameName="fa fa-lg fa-fw fa-user"></i>SIGN IN</h3>
          <div classNameName="form-group">
            <label classNameName="control-label">USERNAME</label>
            <input classNameName="form-control" type="email" placeholder="Email" name='email' value={contacts.email} onChange={handleInputChange} autoFocus/>
          </div>
          <div classNameName="form-group">
            <label classNameName="control-label">PASSWORD</label>
            <input classNameName="form-control" type="password" placeholder="Password"name='password' value={contacts.password} onChange={handleInputChange}/>
          </div>
          <div classNameName="form-group">
            <div classNameName="utility">
              <div classNameName="animated-checkbox">
                <label>
                  <input type="checkbox"/><span classNameName="label-text">Stay Signed in</span>
                </label>
              </div>
              <p classNameName="semibold-text mb-2"><a href="#" data-toggle="flip">Forgot Password ?</a></p>
            </div>
          </div>
          <div classNameName="form-group btn-logincontainer">
            <button classNameName="btn btn-primary btn-block" ><i classNameName="fa fa-sign-in fa-lg fa-fw"></i>SIGN IN</button>
          </div>
        </form>
        <form classNameName="forget-form" action="index.html">
          <h3 classNameName="login-head"><i classNameName="fa fa-lg fa-fw fa-lock"></i>Forgot Password ?</h3>
          <div classNameName="form-group">
            <label classNameName="control-label">EMAIL</label>
            <input classNameName="form-control" type="text" placeholder="Email"/>
          </div>
          <div classNameName="form-group btn-logincontainer">
            <button classNameName="btn btn-primary btn-block"><i classNameName="fa fa-unlock fa-lg fa-fw"></i>RESET</button>
          </div>
          <div classNameName="form-group mt-3">
            <p classNameName="semibold-text mb-0"><a href="#" data-toggle="flip"><i classNameName="fa fa-angle-left fa-fw"></i> Back to Login</a></p>
          </div>
        </form>
      </div>
    </section> */}
   </div>
  )
}

export default Login