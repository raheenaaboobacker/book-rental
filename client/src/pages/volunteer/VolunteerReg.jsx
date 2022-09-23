import React, { useState } from 'react'
import swal from'sweetalert'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function VolunteerReg() {
    const navigate=useNavigate()
    const [contacts,setContacts]=useState({
      username:"",
      email:"",
      mobile:"",
      address:"",
      password:"",
      pass:""
  })
  const [error,setError]=useState(false)
  const [erroruname,setErroruname]=useState(false)
  const [erroremail,setErroremail]=useState(false)
  const [errormobile,setErrormobile]=useState(false)
  const [erroraddress,setErroraddress]=useState(false)
  const [errorpassword,setErrorpassword]=useState(false)
  const [errorpass,setErrorpass]=useState(false)

  const handleInputChange=(e)=>{
      const {name,value}=e.target
      setContacts({
          ...contacts,
          [name]:value
      })
      console.log(contacts);
  }
  const vaidation=(e)=>{
      e.preventDefault();
      setErroruname(false)
      setErroremail(false)
      setErrormobile(false)
      setErroraddress(false)
      setErrorpassword(false)
      setErrorpass(false)
    if(contacts.username==="") {
      setErroruname(true)
    }
    else if(contacts.email===""){
      setErroremail(true)
    }
    else if(contacts.mobile===""){
      setErrormobile(true)
    }
    else if(contacts.address===""){
      setErroraddress(true)
    }
    else if(contacts.password===""){
      setErrorpassword(true)
    }
    else if(contacts.pass===""){
      setErrorpass(true)
    }else {
      console.log(contacts);
      axios.post("http://localhost:5000/register/volunteer-register",contacts)
    .then((response) => {
        console.log("Result========",response)
        if(response.data.success==true)
        {
          
          swal(response.data.message);
          navigate('/login')
        }
        else{
            swal(response.data.message);
        }
 }).catch((err)=>{
  swal(err.response.data.message);
 })


    }
  }
  
return (
 <div className="loginmain" >
  <section className="signup">
      <div className="logincontainer">
          <div className="signup-content" style={{backgroundImage: "url("+"assets/images/register.jpg"+")",
           backgroundSize: "cover"}}>
              
              <div className="signup-form" >
              {/* <div className="signup-image">
                  <figure><img width="100%" src="https://img.freepik.com/free-vector/library-concept-illustration_114360-2825.jpg?t=st=1657697305~exp=1657697905~hmac=d0cf6a041d62c2bdef336e3a013c07f2e1950d664495ac2fcd0b11a391467cbb&w=740" alt="sing up image"/></figure>
                  <a href="/login" className="signup-image-link">I am already member</a>
              </div> */}
                  <form onSubmit={vaidation}  className="register-form" id="register-form">
                  <h2 className="form-title">Volunteer Sign up</h2>
                      <div className="form-group">
                          <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                          <input type="text" name="username" id="username" placeholder="User Name" value={contacts.username} onChange={handleInputChange}/>
                          {erroruname?<span className='errormsg'>Please Enter User Name</span>:null}
                      </div>
                      <div className="form-group">
                          <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                          <input type="email" name="email" id="email" placeholder="Your Email" value={contacts.email} onChange={handleInputChange}/>
                          {erroremail?<span className='errormsg'>Please Enter User Email address</span>:null}
                      </div>
                      <div className="form-group">
                          <label htmlFor="email"><i className="zmdi zmdi-phone"></i></label>
                          <input type="number" name="mobile" id="mobile" placeholder="Your Contact No" value={contacts.mobile} onChange={handleInputChange}/>
                          {errormobile?<span className='errormsg'>Please Enter Phone Number</span>:null}
                      </div>
                      <div className="form-group">
                          <label htmlFor="address"><i className="zmdi zmdi-pin"></i></label>
                          <input type="multiple" name="address" id="address" placeholder="Your Address" value={contacts.address} onChange={handleInputChange}/>
                          {erroraddress?<span className='errormsg'>Please Enter address</span>:null}
                      </div>
                      <div className="form-group">
                          <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                          <input type="password" name="password" id="pass" placeholder="Password" value={contacts.password} onChange={handleInputChange}/>
                          {errorpassword?<span className='errormsg'>Please Enter Password</span>:null}
                      </div>
                      <div className="form-group">
                          <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                          <input type="password" name="pass"  placeholder="Repeat your password" value={contacts.pass} onChange={handleInputChange}/>
                          {errorpass?<span className='errormsg'>Please Enter confirm password</span>:null}
                      </div>
                      <a href="/login" className="signup-image-link">I am already member</a>
                      <div className="form-group form-button">
                          
                          <input type="submit"  className="form-submit"/>
                      </div>
                  </form>
              </div>
             
          </div>
      </div>
  </section>
  </div>
)
}
