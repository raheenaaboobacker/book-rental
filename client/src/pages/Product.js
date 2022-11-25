import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav'
import Slider from "react-slick";
// import Bookdata from "./dummyBook.json"
import Books from '../components/Books';
import { $ }  from 'react-jquery-plugin'
import "./Product.css"
import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate } from 'react-router-dom';
import Carouselproduct from '../components/Carouselproduct';
import Isotope from 'isotope-layout';

function Product() {
	let filteredOptions=[];
	const navigate=useNavigate()
	const token=localStorage.getItem("token")
	let [num, setNum]= useState(1);
	const [show,setShow]=useState(false)
    const [book, setBook] = useState([]);
    const [allbook, setAllbook] = useState(true);
    const [category, setCategory] = useState([]);
    const [temp,setTemp]=useState([])
    const [date,setDate]=useState([])
	var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
	if(month < 10)
	month = '0' + month.toString();
    if(day < 10)
	day = '0' + day.toString();
    console.log(month);
    var newdate = year + "-" + month + "-" + day;
    console.log(newdate);
	const [filterKey, setFilterKey] = useState('*')
	const [searchitem,setSearchitem]=useState("")

	
	useEffect(()=>{
		if($){
			$('.js-show-filter').on('click',function(){
				$(this).toggleClass('show-filter');
				$('.panel-filter').slideToggle(400);
		
				if($('.js-show-search').hasClass('show-search')) {
					$('.js-show-search').removeClass('show-search');
					$('.panel-search').slideUp(400);
				}    
			});
		
			$('.js-show-search').on('click',function(){
				$(this).toggleClass('show-search');
				$('.panel-search').slideToggle(400);
		
				if($('.js-show-filter').hasClass('show-filter')) {
					$('.js-show-filter').removeClass('show-filter');
					$('.panel-filter').slideUp(400);
				}    
			});
			$('.js-addwish-b2').on('click', function(e){
				e.preventDefault();
			});
		
			$('.js-addwish-b2').each(function(){
				var nameProduct = $(this).parent().parent().find('.js-name-b2').html();
				$(this).on('click', function(){
					swal(nameProduct, "is added to wishlist !", "success");
					$(this).addClass('js-addedwish-b2');
					$(this).off('click');
				});
			});
			$('.js-addwish-detail').each(function(){
				var nameProduct = $(this).parent().parent().parent().find('.js-name-detail').html();
	
				$(this).on('click', function(){
					swal(nameProduct, "is added to wishlist !", "success");
	
					$(this).addClass('js-addedwish-detail');
					$(this).off('click');
				});
			});
	
			
	 
		 $('.js-hide-modal-search').on('click', function(){
			 $('.modal-search-header').removeClass('show-modal-search');
			 $('.js-show-modal-search').css('opacity','1');
		 });


		//  [ Isotope ]*/
		 var $topeContainer = $('.isotope-grid');
		 var $filter = $('.filter-tope-group');
	 
		 // filter items on button click
		 $filter.each(function () {
			 $filter.on('click', 'button', function () {
				 var filterValue = $(this).attr('data-filter');
				 $topeContainer.Isotope({filter: filterValue});
			 });
			 
		 });
		 $(window).on('load', function () {
			var $grid = $topeContainer.each(function () {
				$(this).Isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'fitRows',
					percentPosition: true,
					animationEngine : 'best-available',
					masonry: {
						columnWidth: '.isotope-item'
					}
				});
			});
		});
	
		var isotopeButton = $('.filter-tope-group button');
	
		$(isotopeButton).each(function(){
			$(this).on('click', function(){
				for(var i=0; i<isotopeButton.length; i++) {
					$(isotopeButton[i]).removeClass('how-active1');
				}
	
				$(this).addClass('how-active1');
			});
		});
	
		}
		

	},[])

	useEffect(() => {
		axios.get("http://localhost:5000/book/view-books")
		.then((response)=>{
		   if (response.data.success == true) {
			   console.log(response.data.data);
			   
			   setBook(response.data.data)
			   console.log(book);
			 }
		   })
		   .catch((error) => {
			 console.log(error);
   
		   });

		   axios.get("http://localhost:5000/book/view-category")
		   .then((response)=>{
			  if (response.data.success == true) {
				  console.log(response.data.data);
				  
				  setCategory(response.data.data)
				  console.log(category);
				}
			  })
			  .catch((error) => {
				console.log(error);
	  
			  });
	   }, [allbook])
  
	const handleClickOpen = (id) => {
		console.log(id);
		axios.get(`http://localhost:5000/book/singleitem/${id}`).then((response)=>{
			console.log("singledata"+JSON.stringify(response.data.data));
			setTemp(response.data.data)
			console.log("singledata state"+JSON.stringify(temp))
			setShow(true)
		})
		};
		
		let incNum =()=>{
			if(num<20)
			{
			setNum(Number(num)+1);
			}
			console.log(num);
		  };
		  let decNum = () => {
			 if(num>1)
			 {
			  setNum(num - 1);
			 }
			 console.log(num);
		  }
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
		console.log("date1:",date1);
		console.log("date2",date2);
		var Difference_In_Time = date2.getTime() - date1.getTime();
			
		var diffDays = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
		
			
		console.log(diffDays);
			const data={
		
				id:temp[0]?._id,
				price:Math.floor(temp[0]?.pdfprice*diffDays),
				duedate:date
			}
			console.log(data);
			localStorage.setItem("payment",true)
			navigate('/rentPayment' , {state: data})
		
		}
console.log(book);

	if(book==="No Item Found!"){
		console.log(filteredOptions);
	}else{
		 filteredOptions = book
		.filter((filterdata)=>{
			if(filterdata.title.toLowerCase().includes(searchitem.toLowerCase())||filterdata.category.toLowerCase().includes(searchitem.toLowerCase())){
			  return filterdata
			}
		  });
	}


	

	const viewCategory=(category)=>{
	console.log(category);
	axios.get(`http://localhost:5000/book/view-category-books/${category}`)
     .then((response)=>{
	if (response.data.success == true) {
		console.log(response.data.data);
		
		setBook(response.data.data)
		console.log(book);
		}else{
		console.log(response.data.data);

	}
	})
	.catch((error) => {
	setBook(error.response.data.message);

	});
	}
	console.log("ssss",filteredOptions)
		
  return (
    < >

	<div className="bg0 m-t-23 p-b-140">
		<div className="container">
			<div className="flex-w flex-sb-m p-b-52">
			<div class="bor17 of-hidden pos-relative">
							<input type="text" placeholder="Search Books" 
								onChange={(e)=>setSearchitem(e.target.value)} value={searchitem} name="name" required/>
							<button class="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
								<i class="zmdi zmdi-search"></i>
							</button>
						</div>
				<div className="flex-w flex-l-m filter-tope-group m-tb-10">
					
					<button onClick={()=>setAllbook(!allbook)} className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
						All Products
					</button>
                        {category.map(category=>(
						<button key={category.category} onClick={()=>viewCategory(category.category)} className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter={`.${category.category}`}>
						{category.category}
					</button>))}
					

				</div>

			</div>

			
			<div className="row isotope-grid">
				{filteredOptions==""||filteredOptions===null||filteredOptions===undefined?
				<> 
                <div style={{width:"600px", height:"200px", margin:"auto"}}><div style={{textAlign:"center",fontSize:15}}  className="alert alert-primary" role="alert">
                      No Book Found!
                    </div> </div></>:<>	{filteredOptions.map((book) => 
    
	<div   className={`col-sm-6 col-md-4 col-lg-2 p-b-35 isotope-item ${book.category}`}>
					{console.log("filteredOptions==========>",filteredOptions)}
					<div className="block2">
						<div className="block2-pic hov-img0">
							<img src={`./upload/${book?.image}`} alt="IMG-PRODUCT"/>
							<a onClick={()=>{handleClickOpen(book._id)}} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn3 p-lr-15 trans-04 js-show-modal1">
								Quick View
							</a>
							
						</div>

						<div className="block2-txt flex-w flex-t p-t-14">
							<div className="block2-txt-child1 flex-col-l ">
								<a href={`/productDetails/${book._id}`} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
								{book?.title}
								</a>
								{book.pdfstatus==="0"?null:<a  >pdf available</a>}

								<span className="stext-105 cl3">
								{book?.price}
								</span>
							</div>

						</div>
					</div>
				
                
	
	</div>
	
	)}</>}
		
	
	
	<Modal
        show={show}
		size="lg"
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
		dialogClassName="modal-100w"
        // dialogClassName="modal-100w"
        // aria-labelledby="example-custom-modal-styling-title"
		style={{padding:"70px 0px 0px 0px"}}
      >
		
		
		<Modal.Body>
	<div className="container">
	{/* <button onClick={modalclose} className="how-pos3 hov3 trans-04 ">
	  <img src="assets/images/icons/icon-close2.png" alt="CLOSE"/>
  </button> */}
  
		<div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
        {/* <Modal.Body style={{width:"800px"}}> */}
		<div className="row">
			{temp?.map(data=><>
					<div className="col-md-5 col-lg-6 p-b-30">
						<div className="p-l-25 p-lr-0-lg">
							<div className="wrap-slick3 flex-sb flex-w">
								
								<div className="slick3 gallery-lb">
										<div className="wrap-pic-w pos-relative">
											<img src={`./upload/${data?.image}`} alt="IMG-PRODUCT"/>

											<a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href={`./upload/${data?.image}`}>
												<i className="fa fa-expand"></i>
											</a>
										</div>
									</div>
							</div>
						</div>
					</div>
					
					<div className="col-md-7 col-lg-6 p-b-30">
						<div className="p-r-50 p-t-5 p-lr-0-lg">
							<h4 className="mtext-105 cl2 js-name-detail p-b-14">
								{data.title}
							</h4>

							<span className="mtext-106 cl2">
							₹ {data?.price}
							</span>

							<p className="stext-102 cl3 p-t-23">
                               {data.desc}
							</p>
							
							<div className="p-t-33">
						<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Publiser
									</div>

									<div className="size-204 respon6-next">										
											<h6>{data?.publisher}</h6>									
									</div>
								</div>
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Language
									</div>

									<div className="size-204 respon6-next">										
											<h6>{data?.language}</h6>									
									</div>
								</div>
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Pages
									</div>

									<div className="size-204 respon6-next">										
											<h6>{data?.pages}</h6>									
									</div>
								</div>
								{data?.pdfstatus==="0"?null:<>
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										price for e-book/day
									</div>

									<div className="size-204 respon6-next">										
											<h6>{data?.pdfprice}</h6>									
									</div>
								</div></>}
								
							<div className="flex-w flex-r-m p-b-10">
								<div className="size-204 flex-w flex-m respon6-next">
								<div className="wrap-num-product flex-w m-r-20 m-tb-10">
											<div onClick={decNum} className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
												<i className="fs-16 zmdi zmdi-minus"></i>
											</div>

											<input  className="mtext-104 cl3 txt-center num-product" type="number"  name="num-product" minvalue="1" value={num}/>

											<div onClick={incNum} className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
												<i className="fs-16 zmdi zmdi-plus"></i>
											</div>
										</div>

									<button onClick={()=>{addToCart(data._id,data.price)}} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
										Add to cart
									</button>
									{/* <br/><br/><br/><br/><br/><br/><br/><br/>
									<div className="wrap-num-product flex-w m-r-20 m-tb-10">
										

										<input className="mtext-104  txt-center " type="text" name="feedback" onChange={(e)=>{setFeedback(e.target.value)}}/>

										
									</div>

									<button onClick={()=>{addFeedback(data._id)}} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
										Add Feedback
									</button> */}
									<br/><br/><br/><br/><br/>

								{data?.pdfstatus==="0"?null:<>
										<form onSubmit={rentPdf}>

										<div style={{marginLeft:"-90px"}} className="flex-w flex-r-m p-b-10">
											<div className="size-203 flex-c-m respon6">
												Due date of ebook
											</div>

											<div className="size-204 respon6-next">										
											<input type="date"  name="date"  min={newdate}
                                     onChange={(e)=>{setDate(e.target.value)}} value={date}  required/>
										
											
										<button type='submit' style={{marginTop:"5px"}}  className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
											Rent ebook
										</button>
										</div>
										</div>
										</form>
										</>}

										
										
									</div>
							</div>	
						</div>

				
							{/* <div className="flex-w flex-m p-l-100 p-t-40 respon7">
								<div className="flex-m bor9 p-r-10 m-r-11">
									<a href="javascript:void(0)" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
										<i className="zmdi zmdi-favorite"></i>
									</a>
								</div>

								<a href="javascript:void(0)" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
									<i className="fa fa-facebook"></i>
								</a>

								<a href="javascript:void(0)" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
									<i className="fa fa-twitter"></i>
								</a>

								<a href="javascript:void(0)" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
									<i className="fa fa-google-plus"></i>
								</a>
							</div> */}
						</div>
					</div>
					</>)}
				</div>
				</div>
			</div> 	
        </Modal.Body>
      </Modal>
		</div>
		 <section className="sec-relate-product bg0 p-t-45 p-b-105">
		<div className="container">
			<div className="p-b-45">
				<h3 className="ltext-106 cl5 txt-center">
					Related Books
				</h3>
			</div>
			
		 <Carouselproduct/>
		 </div>
		 </section>
			{/* <!-- Load more --> */}
			{/* <div className="flex-c-m flex-w w-full p-t-45">
				<a href="javascript:void(0)" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
					Load More
				</a>
			</div> */}
		</div>
	</div>
		
	
	</>
  )
}

export default Product