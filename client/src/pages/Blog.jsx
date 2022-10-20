import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Blog() {
    const [book,setBook]=useState([])

    useEffect(() => {
          
        axios.get("http://localhost:5000/feedback/view-feedback")
         .then(response=>{
          if(response.data.success==true){
            setBook(response.data.data)
            console.log(response.data.data);
          }
        })
        }, [])
  return (
    <div>
        <Nav/>
       <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{backgroundImage: 'url("assets/images/banner1.jpg")'}}>
  <h2 style={{color:"black"}} className="ltext-105 cl0 txt-center">
    Blog
  </h2>
</section>
<section className="bg0 p-t-62 p-b-60">
  <div className="container">
    <div className="row">
      {book&&book.map(item=>(
        <div className="col-md-6 col-lg-6 p-b-80">
        <div className="p-r-45 p-r-0-lg">
          {/* item blog */}
          <div className="p-b-63">
            <a className="hov-img0 how-pos5-parent">
              <img style={{height:"450px",width:"94%"}} src={`./upload/${item?.bookData?.image}`} alt="IMG-BLOG" />
              
            </a>
            <div className="p-t-32">
              <h4 className="p-b-15">
                <a className="ltext-108 cl2 hov-cl1 trans-04">
                {item?.bookData?.title}
                </a>
              </h4>
              <p className="stext-117 cl6">
              {item?.feedback}
              </p>
              <div className="flex-w flex-sb-m p-t-18">
                <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                  <span>
                    <span className="cl4">By</span>  {item?.name} 
                    <span className="cl12 m-l-4 m-r-6">|</span>
                  </span>
                 
                </span>
              
              </div>
            </div>
          </div>
      
        </div>
      </div>
      ))}
      
     
    </div>
  </div>
</section>

        <Footer/>

    </div>
  )
}
