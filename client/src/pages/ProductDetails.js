import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Carouselproduct from '../components/Carouselproduct'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import swal from 'sweetalert';
import {useNavigate } from 'react-router-dom';

function ProductDetails() {
	const navigate=useNavigate()
	const token=localStorage.getItem("token")
	let [num, setNum]= useState(1);
	const [temp,setTemp]=useState([])
	const {id}=useParams()
	const [date,setDate]=useState([])
	var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
	if(month < 10)
	month = '0' + month.toString();
    var newdate = year + "-" + month + "-" + day;
    console.log(newdate);

	console.log(id);
	useEffect(() => {
		axios.get(`http://localhost:5000/book/singleitem/${id}`).then((response)=>{
			console.log("singledata"+JSON.stringify(response.data.data));
			setTemp(response.data.data)
			console.log("singledata state"+JSON.stringify(temp))
			
		})
	}, [])
	

	const addToCart=(id,price)=>{
		console.log(id);
		console.log(num);
		console.log(price);
		console.log(temp);
		const cdata={
			bookId:id,
			qty:num,
			price:price
		}
		console.log(cdata);
		if(!token) {const el = document.createElement('div')
		el.innerHTML = " <a href='/login'>login here</a>"

		swal({
			title:"Please Login",
			content: el,
		  })}else{
		fetch('http://localhost:5000/cart/addCartItem', {
        method: 'POST',
        body: JSON.stringify(cdata),
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+token
        },
    })
    .then(res => res.json())
    .then((data) => {
        console.log("Result========",data)
        if(data.success==true)
        {
          
            swal(data.message)
            
            navigate('/cart')
        }
        else{
			const el = document.createElement('div')
            el.innerHTML = " <a href='/login'>login here</a>"

            swal({
				title:data.message,
				content: el,
			  })
        }
 })
}	

	} 
	const rentPdf=(e)=>{
		e.preventDefault()
		var date1 = new Date(newdate);
		var date2 = new Date(date);
		  
		var Difference_In_Time = date2.getTime() - date1.getTime();
		  
		var diffDays = Difference_In_Time / (1000 * 3600 * 24);
		  
			console.log(typeof(date));
			console.log(newdate);
		console.log(diffDays);
			const data={
		
				id:temp[0]?._id,
				price:temp[0]?.pdfprice*diffDays,
				duedate:date
			}
			console.log(data);
			navigate('/rentPayment' , {state: data})
		
		}

  return (
    <div>
        <Nav/>
        	<section className="sec-product-detail bg0 p-t-65 p-b-60">
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-lg-7 p-b-30">
					<div className="p-l-25 p-r-30 p-lr-0-lg">
						<div className="wrap-slick3 flex-sb flex-w">
							<div className="wrap-slick3-dots"></div>
							<div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

							<div className="slick3 gallery-lb">
								<div className="item-slick3" data-thumb="images/product-detail-01.jpg">
									<div className="wrap-pic-w pos-relative">
										<img src={`/upload/${temp[0]?.image}`} alt="IMG-PRODUCT"/>

										<a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-01.jpg">
											<i className="fa fa-expand"></i>
										</a>
									</div>
								</div>

								
							</div>
						</div>
					</div>
				</div>
					
				<div className="col-md-6 col-lg-5 p-b-30">
					<div className="p-r-50 p-t-5 p-lr-0-lg">
						<h4 className="mtext-105 cl2 js-name-detail p-b-14">
							{temp[0]?.title}
						</h4>

						<span className="mtext-106 cl2">
						₹ {temp[0]?.price}
						</span>

						<p className="stext-102 cl3 p-t-23">
						{temp[0]?.desc}
						</p>
						

						<div className="p-t-33">
						<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Publiser
									</div>

									<div className="size-204 respon6-next">										
											<h6>{temp[0]?.publisher}</h6>									
									</div>
								</div>
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Language
									</div>

									<div className="size-204 respon6-next">										
											<h6>{temp[0]?.language}</h6>									
									</div>
								</div>
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Pages
									</div>

									<div className="size-204 respon6-next">										
											<h6>{temp[0]?.pages}</h6>									
									</div>
								</div>
								
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										price for e-book/day
									</div>

									<div className="size-204 respon6-next">										
											<h6>{temp[0]?.pdfprice}</h6>									
									</div>
								</div>
							<div className="flex-w flex-r-m p-b-10">
								<div className="size-204 flex-w flex-m respon6-next">
									<div className="wrap-num-product flex-w m-r-20 m-tb-10">
										<div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
											<i className="fs-16 zmdi zmdi-minus"></i>
										</div>

										<input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value="1"/>

										<div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
											<i className="fs-16 zmdi zmdi-plus"></i>
										</div>
									</div>

									<button onClick={()=>{addToCart(temp[0]._id,temp[0].price)}} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
										Add to cart
									</button>
								
								{temp[0]?.pdf=="null"?null:<>
										<form onSubmit={rentPdf}>

										<div style={{marginLeft:"-90px"}} className="flex-w flex-r-m p-b-10">
											<div className="size-203 flex-c-m respon6">
												Due date of ebook
											</div>

											<div className="size-204 respon6-next">										
											<input type="date"  name="date"  min={newdate}
                                     onChange={(e)=>{setDate(e.target.value)}} value={date}  required/>
										
											</div>
										</div>
										<button type='submit' style={{marginTop:"5px"}}  className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
											Rent ebook
										</button>
										</form>
										</>}
									</div>
							</div>	
						</div>

						<div className="flex-w flex-m p-l-100 p-t-40 respon7">
							<div className="flex-m bor9 p-r-10 m-r-11">
								<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
									<i className="zmdi zmdi-favorite"></i>
								</a>
							</div>

							<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
								<i className="fa fa-facebook"></i>
							</a>

							<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
								<i className="fa fa-twitter"></i>
							</a>

							<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
								<i className="fa fa-google-plus"></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="bor10 m-t-50 p-t-43 p-b-40">
				<div className="tab01">
					<ul className="nav nav-tabs" role="tablist">
						<li className="nav-item p-b-10">
							<a className="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a>
						</li>

						<li className="nav-item p-b-10">
							<a className="nav-link" data-toggle="tab" href="#information" role="tab">Additional information</a>
						</li>

						
					</ul>

					<div className="tab-content p-t-43">
						<div className="tab-pane fade show active" id="description" role="tabpanel">
							<div className="how-pos2 p-lr-15-md">
								<p className="stext-102 cl6">
								{temp[0]?.desc}
								</p>
							</div>
						</div>

						<div className="tab-pane fade" id="information" role="tabpanel">
							<div className="row">
								<div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
									<ul className="p-lr-28 p-lr-15-sm">
										<li className="flex-w flex-t p-b-7">
											<span className="stext-102 cl3 size-205">
											title
											</span>

											<span className="stext-102 cl6 size-206">
											{temp[0]?.title}
											</span>
										</li>

										<li className="flex-w flex-t p-b-7">
											<span className="stext-102 cl3 size-205">
											price
											</span>

											<span className="stext-102 cl6 size-206">
											₹ {temp[0]?.price}
											</span>
										</li>

										<li className="flex-w flex-t p-b-7">
											<span className="stext-102 cl3 size-205">
											Publiser
											</span>

											<span className="stext-102 cl6 size-206">
											{temp[0]?.publisher}											</span>
										</li>

										<li className="flex-w flex-t p-b-7">
											<span className="stext-102 cl3 size-205">
											Pages
											</span>

											<span className="stext-102 cl6 size-206">
											{temp[0]?.pages}
											</span>
										</li>

										<li className="flex-w flex-t p-b-7">
											<span className="stext-102 cl3 size-205">
											Language
											</span>

											<span className="stext-102 cl6 size-206">
											{temp[0]?.language}
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
{/* 
						<div className="tab-pane fade" id="reviews" role="tabpanel">
							<div className="row">
								<div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
									<div className="p-b-30 m-lr-15-sm">
										<div className="flex-w flex-t p-b-68">
											<div className="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
												<img src="/assets/images/avatar-01.jpg" alt="AVATAR"/>
											</div>

											<div className="size-207">
												<div className="flex-w flex-sb-m p-b-17">
													<span className="mtext-107 cl2 p-r-20">
														Ariana Grande
													</span>

													<span className="fs-18 cl11">
														<i className="zmdi zmdi-star"></i>
														<i className="zmdi zmdi-star"></i>
														<i className="zmdi zmdi-star"></i>
														<i className="zmdi zmdi-star"></i>
														<i className="zmdi zmdi-star-half"></i>
													</span>
												</div>

												<p className="stext-102 cl6">
													Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos
												</p>
											</div>
										</div>
										
										<form className="w-full">
											<h5 className="mtext-108 cl2 p-b-7">
												Add a review
											</h5>

											<p className="stext-102 cl6">
												Your email address will not be published. Required fields are marked *
											</p>

											<div className="flex-w flex-m p-t-50 p-b-23">
												<span className="stext-102 cl3 m-r-16">
													Your Rating
												</span>

												<span className="wrap-rating fs-18 cl11 pointer">
													<i className="item-rating pointer zmdi zmdi-star-outline"></i>
													<i className="item-rating pointer zmdi zmdi-star-outline"></i>
													<i className="item-rating pointer zmdi zmdi-star-outline"></i>
													<i className="item-rating pointer zmdi zmdi-star-outline"></i>
													<i className="item-rating pointer zmdi zmdi-star-outline"></i>
													<input className="dis-none" type="number" name="rating"/>
												</span>
											</div>

											<div className="row p-b-25">
												<div className="col-12 p-b-5">
													<label className="stext-102 cl3" for="review">Your review</label>
													<textarea className="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10" id="review" name="review"></textarea>
												</div>

												<div className="col-sm-6 p-b-5">
													<label className="stext-102 cl3" for="name">Name</label>
													<input className="size-111 bor8 stext-102 cl2 p-lr-20" id="name" type="text" name="name"/>
												</div>

												<div className="col-sm-6 p-b-5">
													<label className="stext-102 cl3" for="email">Email</label>
													<input className="size-111 bor8 stext-102 cl2 p-lr-20" id="email" type="text" name="email"/>
												</div>
											</div>

											<button className="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>

		<div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
			<span className="stext-107 cl6 p-lr-25">
				SKU: JAK-01
			</span>

			<span className="stext-107 cl6 p-lr-25">
				Categories: Jacket, Men
			</span>
		</div>
	</section>


    <Footer/>
    </div>
  )
}

export default ProductDetails