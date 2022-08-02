import React,{useEffect, useState} from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Cart from './User/Cart';
import "./loginstyle.css"
import { $ }  from 'react-jquery-plugin'
import {Helmet} from "react-helmet";
import Product from './Product';
import Carouselproduct from '../components/Carouselproduct';

function Home() {
  useEffect(() => {
    if($){
      
     }
   },[$])
  
  return (
    <>
	<Nav/>
<section className="section-slide" >
		<div className="wrap-slick1 rs1-slick1" >
			<div className="slick1" height="200px">
  <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active">
      <img className="d-block w-100" src="assets/images/slide3.jpg"
            alt="Second slide"/>
        <div className="text-box">
            <h2 className="wow slideInRight" data-wow-duration="2s">Books are a uniquely portable magic.</h2>
            <p className="wow slideInLeft" data-wow-duration="2s">The more that you read, the more things you will know. The more that you learn, the more places you’ll go.</p>
        </div>
       
      </div>
      <div className="carousel-item">
        <div className="view">
          <img className="d-block w-100" src="assets/images/slide2.jpg"
            alt="Second slide"/>
           <div className="text-box">
            <h2 className="wow slideInRight" data-wow-duration="2s">Is there a limit on NEMT?</h2>
            <p className="wow slideInLeft" data-wow-duration="2s">There is no limit to the number of daily trips an eligible  </p>
        </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="view">
          <img className="d-block w-100" src="assets/images/slide1.jpg"
            alt="Third slide"/>
          <div className="mask rgba-black-slight"></div>
        </div>
        <div className="text-box">
            <h2 className="wow slideInRight" data-wow-duration="2s">Is there a limit on NEMT?</h2>
            <p className="wow slideInLeft" data-wow-duration="2s">There is no limit to the number of daily trips an eligible member can receive from Limocarerides</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  
  </div>
  </div>
  </div>
  </section>
 <Product/>
 {/* <Carouselproduct/> */}

	<Footer/>
  
	</>
  )
}

export default Home