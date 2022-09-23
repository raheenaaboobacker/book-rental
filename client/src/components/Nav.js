import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom';

function Nav() {
	const navigate=useNavigate()
	const [token,setToken]=useState(localStorage.getItem("token"));
	const [count,setCount]=useState("")
	const [cartdata, setCartdata] = useState([])
    const [total,setTotal]=useState(0)
	const [searchitem,setSearchitem]=useState("")

useEffect(() => {
	if(token){
		fetch('http://localhost:5000/cart/viewCartItem', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
		},
	}).then(res => res.json())
	.then((data) => {
		console.log("Result========", data)
		if (data.success == true) {
			setCartdata(data.data)
			console.log(cartdata);
			const cartcount=data.data.length;
			const newTotal = cartdata.reduce((total, cartItem) => {
				return total + cartItem.qty * cartItem.price;
			  }, 0);
			  setTotal(newTotal);
			console.log(cartcount);
			setCount(cartcount)
			console.log(count);
			// setCartdata(data.data)
			// console.log(cartdata);
			// const newTotal = cartdata.reduce((total, cartItem) => {
			// 	return total + cartItem.qty * cartItem.price;
			//   }, 0);
			//   setTotal(newTotal);
	   }
	})
}
}, [token])

	const logout=()=>
	{
		localStorage.clear();
		window.sessionStorage.clear();
		window.location.reload();
		navigate("/")
	
	}
	const addvalue=(e)=>{
		console.log(e.target.value);
		setSearchitem(e.target.value)
	   console.log(searchitem);
		}
	// window.onunload = () => {
	// 	// Clear the local storage
	// 	window.localStorage.clear()
	// 	}
  return (
    < >
<header className="header-v4">
		{/* <!-- Header desktop --> */}
		<div className="container-menu-desktop">
			

			<div className="wrap-menu-desktop how-shadow1" style={{top:"0px"}}>
				<nav className="limiter-menu-desktop container">
					
					{/* <!-- Logo desktop -->		 */}
					<a href="#" className="logo">
						<img src="/assets/images/icons/logo-01.png" alt="IMG-LOGO"/>
					</a>

					{/* <!-- Menu desktop --> */}
					<div className="menu-desktop">
						<ul className="main-menu">
							<li>
								<a href="/">Home</a>
								<ul className="sub-menu">
									<li><a href="/">Homepage </a></li>
								</ul>
							</li>
							<li>
								<a href="/">Book</a>
								<ul className="sub-menu">
								<li>{!token?null:<a href='/addBook'>Add Book</a>}</li>
								{!token?null:<a href='/userViewBook'>My Books</a>}
								<li><a href="/viewRentbooks">E-Book </a></li>
								</ul>
							</li>
							


							<li  >
								<a href="/contact">contact Us</a>
							</li>

							<li>
								<a href="/register">Register</a>
							</li>

							
							<li>
								{!token?<a href="/login">login</a>:<a onClick={logout}>Logout</a>}
							</li>
							
						</ul>
					</div>	

					{/* <!-- Icon header --> */}
					<div className="wrap-icon-header flex-w flex-r-m">
						<div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
							<i className="zmdi zmdi-search"></i>
						</div>

						<div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify={!count?0:count}>
						
							<i className="zmdi zmdi-shopping-cart" style={{color:"black"}}></i>
					
						</div>
						{!token?null:
						<a href="/userViewOrderDetails" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10">
							<i class="zmdi zmdi-case-check"></i>

						</a>}
					</div>
				</nav>
			</div>	
		</div>

		{/* <!-- Header Mobile --> */}
		<div className="wrap-header-mobile">
			{/* <!-- Logo moblie -->		 */}
			<div className="logo-mobile">
				<a href="/"><img src="/assets/images/icons/logo-01.png" alt="IMG-LOGO"/></a>
			</div>

			{/* <!-- Icon header --> */}
			<div className="wrap-icon-header flex-w flex-r-m m-r-15">
				<div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
					<i className="zmdi zmdi-search"></i>
				</div>

				<div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
					<i className="zmdi zmdi-shopping-cart"></i>
				</div>
				{!token?null:
				<a href="/userViewOrderDetails" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10">
					<i class="zmdi zmdi-case-check"></i>

				</a>
				}
			</div>

			{/* <!-- Button show menu --> */}
			<div className="btn-show-menu-mobile hamburger hamburger--squeeze">
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</div>
		</div>
		
		{/* <!-- Menu Mobile --> */}
		<div className="menu-mobile">
			

			<ul className="main-menu-m">
				<li>
					<a href="/">Home</a>
					<ul className="sub-menu-m">
						
						
					</ul>
					<span className="arrow-main-menu-m">
						<i className="fa fa-angle-right" aria-hidden="true"></i>
					</span>
				</li>

				<li><a href="addBook">Add Book</a></li>

				<li>
					<a href="#" className="label1 rs1" data-label1="hot">Features</a>
				</li>

				<li>
					<a href="#">Blog</a>
				</li>

				<li>
					<a href="#">About</a>
				</li>

				<li>
					<a href="/login">login</a>
				</li>
			</ul>
		</div>

		{/* <!-- Modal Search --> */}
		<div className="modal-search-header flex-c-m trans-04 js-hide-modal-search" id='exampleModalCenter'>
			<div className="container-search-header">
				<button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
					<img src="/assets/images/icons/icon-close2.png" alt="CLOSE"/>
				</button>

				<form className="wrap-search-header flex-w p-l-15">
					<button className="flex-c-m trans-04"  >
						<i className="zmdi zmdi-search"></i>
					</button>
					<input className="plh3" type="text" name="search" placeholder="Search..." onChange={addvalue} value={searchitem}/>
				</form>
			</div>
		</div>
	</header>


	<div className="wrap-header-cart js-panel-cart">
		<div className="s-full js-hide-cart"></div>

		<div className="header-cart flex-col-l p-l-65 p-r-25">
			<div className="header-cart-title flex-w flex-sb-m p-b-8">
				<span className="mtext-103 cl2">
					Your Cart
				</span>

				<div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
					<i className="zmdi zmdi-close"></i>
				</div>
			</div>
			
			<div className="header-cart-content flex-w js-pscroll">
				<ul className="header-cart-wrapitem w-full">
				{cartdata && cartdata.map((data, i) => (
				
					<li className="header-cart-item flex-w flex-t m-b-12">
						<div className="header-cart-item-img">
							<img src={`./upload/${data?.cartData?.image}`} alt="IMG"/>
						</div>

						<div className="header-cart-item-txt p-t-8">
							<a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
							{data?.cartData?.title}
							</a>

							<span className="header-cart-item-info">
							{data?.qty} x ₹ {data?.price}
							</span>
						</div>
					</li>
   				))}
				</ul>
				
				<div className="w-full">
					<div className="header-cart-total w-full p-tb-40">
						Total: $75.00
					</div>

					<div className="header-cart-buttons flex-w w-full">
						<a href="/cart" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
							View Cart
						</a>

						<a href="/userdeliverydetails" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
							Check Out
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

		
	
		
  </>
  )
}

export default Nav