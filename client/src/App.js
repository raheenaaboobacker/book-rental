import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Register from './pages/User/Register';
import Cart from './pages/User/Cart';
import ProductDetails from './pages/ProductDetails';
import Carouselproduct from './components/Carouselproduct';
import AddBook from './pages/User/addbook/AddBook';
import Notfount from './pages/Notfount';
import Contact from './pages/Contact';
import $ from 'jquery';
import swal from 'sweetalert';
import { useEffect } from 'react';
import SingleBook from './pages/SingleBook';
import Payment from './pages/User/Payment/Payment';
import UserDeliveryDetails from './pages/User/Payment/UserDeliveryDetails';
import OrderDetails from './pages/User/OrderDetails';

function App() {
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
   
		   $('.js-show-modal1').on('click',function(e){
			   e.preventDefault();
			   $('.js-modal1').addClass('show-modal1');
		   });
   
		   $('.js-hide-modal1').on('click',function(){
			   $('.js-modal1').removeClass('show-modal1');
		   });
		   $('.js-show-modal-search').on('click', function(){
			$('.modal-search-header').addClass('show-modal-search');
			$(this).css('opacity','0');
		});
	
		$('.js-hide-modal-search').on('click', function(){
			$('.modal-search-header').removeClass('show-modal-search');
			$('.js-show-modal-search').css('opacity','1');
		});
	
		$('.container-search-header').on('click', function(e){
			e.stopPropagation();
		});
		$('.js-show-cart').on('click',function(){
			$('.js-panel-cart').addClass('show-header-cart');
		});
	
		$('.js-hide-cart').on('click',function(){
			$('.js-panel-cart').removeClass('show-header-cart');
		});


		$('.btn-show-menu-mobile').on('click', function(){
			$(this).toggleClass('is-active');
			$('.menu-mobile').slideToggle();
		});
	
		var arrowMainMenu = $('.arrow-main-menu-m');
	
		for(var i=0; i<arrowMainMenu.length; i++){
			$(arrowMainMenu[i]).on('click', function(){
				$(this).parent().find('.sub-menu-m').slideToggle();
				$(this).toggleClass('turn-arrow-main-menu-m');
			})
		}
	
		$(window).resize(function(){
			if($(window).width() >= 992){
				if($('.menu-mobile').css('display') == 'block') {
					$('.menu-mobile').css('display','none');
					$('.btn-show-menu-mobile').toggleClass('is-active');
				}
	
				$('.sub-menu-m').each(function(){
					if($(this).css('display') == 'block') { console.log('hello');
						$(this).css('display','none');
						$(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
					}
				});
					
			}
		});
	
	
		// $('.js-show-sidebar').on('click',function(){
		// 	$('.js-sidebar').addClass('show-sidebar');
		// });
	
		// $('.js-hide-sidebar').on('click',function(){
		// 	$('.js-sidebar').removeClass('show-sidebar');
		// });
		 }
	   },[$])
  return (
    
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/adminDashboard' element={<AdminDashboard/>}/>
				<Route path='/login' element={<Login/>}/>
				<Route path='/register' element={<Register/>}/>
				<Route path='/cart' element={<Cart/>}/>
				<Route path='/productDetails' element={<ProductDetails/>}/>
				<Route path='/addBook' element={<AddBook/>}/>
				<Route path='/*' element={<Notfount/>}/>
				<Route path='/contact' element={<Contact/>}/>
				<Route path='/singlebook' element={<SingleBook/>}/>
				<Route path='/payment' element={<Payment/>}/>
				<Route path='/userdeliverydetails' element={<UserDeliveryDetails/>}/>
				<Route path='/userViewOrderDetails' element={<OrderDetails/>}/>
				{/* <Route path='/' element={<Home/>}/> */}
				{/* <Route path='/' element={<Home/>}/> */}
				{/* <Route path='/' element={<Home/>}/> */}
				{/* <Route path='/' element={<Home/>}/> */}

			</Routes>
		</BrowserRouter>

        
  );
}

export default App;
