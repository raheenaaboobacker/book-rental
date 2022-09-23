import React,{useEffect, useState} from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Cart from './User/Cart';
import "./loginstyle.css"
import { $ }  from 'react-jquery-plugin'
import {Helmet} from "react-helmet";
import Product from './Product';
import Carouselproduct from '../components/Carouselproduct';
import Slider from '../components/Slider';

function Home() {
  useEffect(() => {
    if($){
      
     }
   },[$])
  
  return (
    <>
	<Nav/>
<Slider/>
 <Product/>
 {/* <Carouselproduct/> */}

	<Footer/>
  
	</>
  )
}

export default Home