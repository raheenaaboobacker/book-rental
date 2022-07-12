import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate=useNavigate()
  const [contacts,setContacts]=useState({
    email:"",
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
    console.log("login data"+JSON.stringify(contacts)) ;
     navigate('/adminDashboard')
  }
  return (
   <div>
    
    <section className="login-content">
      <div className="logo">
        <h1>EBook</h1>
      </div>
      <div className="login-box">
        <form className="login-form" onSubmit={validation}>
          <h3 className="login-head"><i className="fa fa-lg fa-fw fa-user"></i>SIGN IN</h3>
          <div className="form-group">
            <label className="control-label">USERNAME</label>
            <input className="form-control" type="email" placeholder="Email" name='email' value={contacts.email} onChange={handleInputChange} autoFocus/>
          </div>
          <div className="form-group">
            <label className="control-label">PASSWORD</label>
            <input className="form-control" type="password" placeholder="Password"name='password' value={contacts.password} onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <div className="utility">
              <div className="animated-checkbox">
                <label>
                  <input type="checkbox"/><span className="label-text">Stay Signed in</span>
                </label>
              </div>
              <p className="semibold-text mb-2"><a href="#" data-toggle="flip">Forgot Password ?</a></p>
            </div>
          </div>
          <div className="form-group btn-container">
            <button className="btn btn-primary btn-block" ><i className="fa fa-sign-in fa-lg fa-fw"></i>SIGN IN</button>
          </div>
        </form>
        <form className="forget-form" action="index.html">
          <h3 className="login-head"><i className="fa fa-lg fa-fw fa-lock"></i>Forgot Password ?</h3>
          <div className="form-group">
            <label className="control-label">EMAIL</label>
            <input className="form-control" type="text" placeholder="Email"/>
          </div>
          <div className="form-group btn-container">
            <button className="btn btn-primary btn-block"><i className="fa fa-unlock fa-lg fa-fw"></i>RESET</button>
          </div>
          <div className="form-group mt-3">
            <p className="semibold-text mb-0"><a href="#" data-toggle="flip"><i className="fa fa-angle-left fa-fw"></i> Back to Login</a></p>
          </div>
        </form>
      </div>
    </section>
   </div>
  )
}

export default Login