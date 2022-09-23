import React, { useState } from 'react'
import './payment.css'
import { useNavigate } from 'react-router-dom'

export default function UserDeliveryDetails() {
    const navigate=useNavigate()
    const [contacts,setContacts]=useState({
		name:"",
		phone:"",
		address:"",
		landmark:"",
		pincode:"",
		city:"",
		state:"",
	})


    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setContacts({
            ...contacts,
            [name]:value
        })
        console.log(contacts);
    }
   
    const submitForm=(e)=>{
		e.preventDefault();
		if(contacts.name==="",contacts.phone==="",contacts.address==="",contacts.landmark==="",contacts.city==="",
		contacts.state==""){
         alert("please fill all fields" )
		}else{
		navigate('/payment' , {state: contacts})
		}
	}

  return (
    <div className='payment'>
    <div className="paymentpage-content">
		<div className="paymentwizard-v5-content">
			<div className="paymentwizard-form">
		        <form className="paymentform-register" id="paymentform-register" onSubmit={submitForm} >
		        	<div id="form-total">
		        		{/* <!-- SECTION 1 --> */}
			            <h2>
			            	<span className="step-icon"><i className="zmdi zmdi-check"></i></span>
			            	<span className="step-text">Personal Information</span>
			            </h2>
			            <section>
			                <div className="inner">
								<div className="form-row">
									<div className="form-holder">
										<label htmlFor="first_name">Full Name</label>
										<input type="text" placeholder="Full name" className="form-control" id="name" name="name"
                                        onChange={handleInputChange} value={contacts.name} required/>
									</div>
									<div className="form-holder">
										<label htmlFor="last_name">Phone Number</label>
                                        <input type="number" placeholder="8563214789" className="form-control" id="phone" name="phone"
                                        onChange={handleInputChange} value={contacts.phone} required/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-holder form-holder-2">
										<label htmlFor="address">Address Location</label>
										<input type="text" placeholder="622 Dixie Path, South Tobinchester, UT 98336" className="form-control" id="address" name="address"
                                        onChange={handleInputChange} value={contacts.address} required/>
										<span><i className="zmdi zmdi-pin"></i></span>
									</div>
								</div>
								<div className="form-row">
									<div className="form-holder form-holder-3">
										<label htmlFor="phone">Land Mark</label>
										<input type="text" placeholder="ex: Vaughn" className="form-control" id="landmark" name="landmark"
                                        onChange={handleInputChange} value={contacts.landmark} required/>
									</div>
									<div className="form-holder">
										<label htmlFor="code">Pin Code</label>
										<input type="number" className="form-control" id="pincode" name="pincode"
                                        onChange={handleInputChange} value={contacts.pincode} required/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-holder form-holder-3">
										<label htmlFor="phone">City</label>
										<input type="text" placeholder="ex: Vaughn" className="form-control" id="city" name="city"
                                        onChange={handleInputChange} value={contacts.city} required/>
									</div>
									<div className="form-holder">
										<label htmlFor="code">State</label>
										<input type="text" className="form-control" id="state" name="state"
                                        onChange={handleInputChange} value={contacts.state} required/>
									</div>
								</div>
							</div>
                            <div className=" p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                            <button type='submit' className="flex-c-m stext-101 cl0 size-116 bg5 bor14 hov-btn3 p-lr-15 trans-04 ">
                                   Payment
                                </button>
                                </div>
			            </section>
                    </div>
                </form>
			</div>
		</div>
	</div>
 </div>
  )
}
