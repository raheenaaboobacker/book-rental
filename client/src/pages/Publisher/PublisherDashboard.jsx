import React from 'react'
import Slider from '../../components/Slider'
import Footer from '../../components/Footer'
import PublisherNav from '../../components/PublisherNav'
import Product from '../Product'

export default function PublisherDashboard() {
  return (
    <div>
        <PublisherNav/>
        <Slider/>
{/* <Product/> */}
        <Footer/>
    </div>
  )
}
