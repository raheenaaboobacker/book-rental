import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav'
import $ from 'jquery';
import swal from 'sweetalert';
import axios from 'axios';
import Carouselproduct from './Carouselproduct';
import {Document,Page,pdfjs} from 'react-pdf'
import moment from 'moment'
// import PDF from './upload/Hemlock.jpg'

function Books() {
	const navigate=useNavigate()
	const token=localStorage.getItem("token")
	let [num, setNum]= useState(1);
	const [show,setShow]=useState(false)
    const [book, setBook] = useState([]);
    const [searchitem,setSearchitem]=useState("")
    const [temp,setTemp]=useState([])
    const [date,setDate]=useState([])
	var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
	if(month < 10)
	month = '0' + month.toString();
    var newdate = year + "-" + month + "-" + day;
    console.log(newdate);

	


	useEffect(() => {
		if($){
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
		}
	}, [$])
	
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
	   }, [])
	
	   
    const addvalue=(e)=>{
		console.log(e.target.value);
		setSearchitem(e.target.value)
	   console.log(searchitem);
		}

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
		 let handleChange = (e)=>{
		   setNum(e.target.value);
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
const rentPdf=(id,price)=>{

var date1 = new Date(newdate);
var date2 = new Date(date);
  
var Difference_In_Time = date2.getTime() - date1.getTime();
  
var diffDays = Difference_In_Time / (1000 * 3600 * 24);
  
	console.log(typeof(date));
	console.log(newdate);
console.log(diffDays);
	const data={

		id:id,
		price:price*diffDays,
		duedate:date
	}
	console.log(data);
	navigate('/rentPayment' , {state: data})

}
  return (
    
	<div className="row isotope-grid">
			{book.map((book, index) => 
    
	<div  key={index} className="col-sm-6 col-md-4 col-lg-2 p-b-35 isotope-item women">
					{/* <!-- Block2 --> */}
					<div className="block2">
						<div className="block2-pic hov-img0">
							<img src={`./upload/$aaq{book?.image}`} alt="IMG-PRODUCT"/>
							<a onClick={()=>{handleClickOpen(book._id)}} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn3 p-lr-15 trans-04 js-show-modal1">
								Quick View
							</a>
							
						</div>

						<div className="block2-txt flex-w flex-t p-t-14">
							<div className="block2-txt-child1 flex-col-l ">
								<a href={`/productDetails/${book._id}`} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
								{book?.title}
								</a>
								{book.pdf=="null"?null:<a  >pdf available</a>}

								<span className="stext-105 cl3">
								{book?.price}
								</span>
							</div>

							<div className="block2-txt-child2 flex-r p-t-3">
								<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
									<img className="icon-heart1 dis-block trans-04" src="assets/images/icons/icon-heart-01.png" alt="ICON"/>
									<img className="icon-heart2 dis-block trans-04 ab-t-l" src="assets/images/icons/icon-heart-02.png" alt="ICON"/>
								</a>
							</div>
						</div>
					</div>
				
                {/* <!-- Modal1 --> */}
	{/* <div   className="wrap-modal1 js-modal1 p-t-60 p-b-20" >
		<div className="overlay-modal1 js-hide-modal1"></div>

		<div className="container">
			<div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
				<button className="how-pos3 hov3 trans-04 js-hide-modal1">
					<img src="ass₹ets/images/icons/icon-close.png" alt="CLOSE"/>
				</button>

				<div className="row">
					<h1>khgjhf 	 </h1>
					
				<h1 key={index}>{book?.title}</h1>
				<h2>{book.price}</h2>
				<h3>{book.desc}</h3>
				</div>
			</div>
		</div>
	</div> */}
	
	</div>
	
	)}
	
	
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

											<a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-01.jpg">
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
								
{/* {console.log(PDF)}
									<Page pageNumber={1}/>
								</Document> */}
									<div className="size-203 flex-c-m respon6">
										Category
									</div>

									<div className="size-204 respon6-next">										
											<h6>{data.category}</h6>									
									</div>
								</div>
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Publiser
									</div>

									<div className="size-204 respon6-next">										
											<h6>{data.publisher}</h6>									
									</div>
								</div>
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Language
									</div>

									<div className="size-204 respon6-next">										
											<h6>{data.language}</h6>									
									</div>
								</div>
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Pages
									</div>

									<div className="size-204 respon6-next">										
											<h6>{data.pages}</h6>									
									</div>
								</div><div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										price for e-book/day
									</div>

									<div className="size-204 respon6-next">										
											<h6>{data.pdfprice}</h6>									
									</div>
								</div>
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
										<button  onClick={()=>{addToCart(data._id,data.price)}} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
											Add to cart
										</button>
										{data.pdf=="null"?null:<>
										<form onSubmit={(e)=>{e.preventDefault();}}>

										<div style={{marginLeft:"-90px"}} className="flex-w flex-r-m p-b-10">
											<div className="size-203 flex-c-m respon6">
												Due date of ebook
											</div>

											<div className="size-204 respon6-next">										
											<input type="date"  name="date"  min={newdate}
                                     onChange={(e)=>{setDate(e.target.value)}} value={date}  required/>
										
											</div>
										</div>
										<button type='submit' style={{marginTop:"5px"}} onClick={()=>{rentPdf(data._id,data.pdfprice)}} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
											Rent ebook
										</button>
										</form>
										</>}	

										
										<button onClick={() => setShow(false)} className="how-pos3 hov3 trans-04 ">
										<img src="assets/images/icons/icon-close2.png" alt="CLOSE"/>
										</button>
										
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
					</>)}
				</div>
				</div>
			</div> 	
        </Modal.Body>
      </Modal>
		</div>
  )
}

export default Books