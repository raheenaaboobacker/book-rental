import React,{useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {swal} from "sweetalert"

export default function RentPayment() {
    const location = useLocation()
	const contacts=location.state
	const [token,setToken]=useState(localStorage.getItem("token"))
	const navigate=useNavigate();
	const [paymentdata,setPaymentdata]=useState({})
	useEffect(() => {
	  console.log(contacts);
	}, [])
	

	const handleInputChange=(e)=>{
        const {name,value}=e.target
        setPaymentdata({
            ...paymentdata,
            [name]:value
        })
        console.log(paymentdata);
    }


	const submitForm=(e)=>{
		e.preventDefault();
		var card =  /^\(?([0-9]{14})$/;

		console.log(contacts);
		if(contacts.name==="",contacts.phone==="",contacts.address==="",contacts.landmark==="",contacts.city==="",
		contacts.state==""){
         alert("please fill all fields" )
		}
		if(!card.test(paymentdata.phone))
		{
			alert("Please enter a valid  card number!!",{autoClose:3000,theme:'light'})
		}else{
		
			fetch("http://localhost:5000/order/rent-book", {
				method: 'POST',
				body: JSON.stringify(contacts),
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token
				},
			})
				.then(res => res.json())
				.then((data) => {
					console.log("Result========", data)
					if (data.success == true) {

						alert(data.message)
						navigate("/viewRentbooks")
					}
					else {

						alert(data.message)
					}
				})
		}
	}


  return (
    <div className='payment'>
    <div className="paymentpage-content">
		<div className="paymentwizard-v5-content">
			<div className="paymentwizard-form">
		        <form className="paymentform-register" id="paymentform-register" onSubmit={submitForm} >
		        	<div id="form-total">
		        		
						{/* <!-- SECTION 2 --> */}
			            <h2>
			            	<span className="step-icon"><i className="zmdi zmdi-check"></i></span>
			            	<span className="step-text">Bank Information</span>
			            </h2>
			            <section>
			                <div className="inner">
								<div className="form-row">
									<div className="form-holder">
										<label>Bank Name:</label>
										<input type="text" placeholder="" className="form-control input-step-2" id="bank"  name="bankname"
                                        onChange={handleInputChange} value={paymentdata.bankname} required/>
										<span><i className="zmdi zmdi-search"></i></span>
									</div>
									<div className="form-holder">
										<label >Branch Name:</label>
										<input type="text" placeholder="" className="form-control input-step-2" id="branch"  name="name"
                                        onChange={handleInputChange} value={paymentdata.name} required/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-holder form-holder-2">
										<label >Email Address:</label>
										<input type="email" className="email input-step-2-1" id="email" placeholder="ex: example@email.com" pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" name="email"
                                        onChange={handleInputChange} value={paymentdata.email} required/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-holder form-holder-2">
										<label for="account_name">Account Name:</label>
										<input type="text" placeholder="Account Name" className="form-control input-step-2-1" id="account_name"  name="accname"
                                        onChange={handleInputChange} value={paymentdata.accname} required/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-holder form-holder-2">
										<label for="account_number">Account Number:</label>
										<input type="text" placeholder="4576-6970-3801-2620" className="form-control input-step-2-2" id="account_number"  name="phone"
                                        onChange={handleInputChange} value={paymentdata.phone} required/>
										{/* <span className="card"><i className="zmdi zmdi-card"></i></span> */}
									</div>
								</div>
								{/* <div className="form-row form-row-date form-row-step-2">
									<div className="form-holder form-holder-2">
										<label for="date_2" className="special-label"> Date:</label>
										<select name="date_2" id="date_2" className="form-control">
											<option value="15" selected>15</option>
											<option value="16">16</option>
											<option value="17">17</option>
											<option value="18">18</option>
											<option value="19">19</option>
										</select>
										<select name="month_2" id="month_2" className="form-control">
											<option value="Jan" selected>Jan</option>
											<option value="Feb">Feb</option>
											<option value="Mar">Mar</option>
											<option value="Apr">Apr</option>
											<option value="May">May</option>
										</select>
										<select name="year_2" id="year_2" className="form-control">
											<option value="2018" selected>2018</option>
											<option value="2017">2017</option>
											<option value="2016">2016</option>
											<option value="2015">2015</option>
											<option value="2014">2014</option>
											<option value="2013">2013</option>
										</select>
										
									</div>
								</div> */}
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