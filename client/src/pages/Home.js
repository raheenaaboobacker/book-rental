import React,{useState} from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Cart from './User/Cart';


function Home() {

  return (
    <>
	<Nav/>
<Cart/>

	<Footer/>
	</>
  )
}

export default Home