import React, { useEffect, useState } from 'react'
import AdminNav from '../../components/AdminNav'
import AdminSidebar from '../../components/AdminSidebar'
import axios from 'axios';


export default function ViewBook() {

    const [book,setBook]=useState([])



    useEffect(() => {
        
        axios.get("http://localhost:5000/book/view-books")
         .then(response=>{
          if(response.data.success==true){
            setBook(response.data.data)
            console.log(book);
          }
        })
        }, [])
  return (
    <div>
        <AdminNav/>
        <AdminSidebar/>
        <main className="app-content">
  <div className="app-title">
    <div>
      <h1><i className="fa fa-dashboard" /> Dashboard</h1>
      <p>A free and open source Bootstrap 4 admin template</p>
    </div>
    <ul className="app-breadcrumb breadcrumb">
      <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
      <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
    </ul>
  </div>
  <div className='row'>
  {book&&book.map(item=>(
 <div className="col-lg-3">
 <div className="bs-component">
   <div className="card">
    <img style={{height: 200, width: '100%', display: 'block'}} src={`./upload/${item?.image}`} alt="Card image" />
     <div className="card-body">
     <h3 className="card-title">{item?.title}</h3>
     <p className="card-text">Category: {item?.category}</p>
     <p className="card-text">Publisher: {item?.publisher}</p>
     <p className="card-text">price: {item?.price}</p>
     <p className="card-text">author: {item?.author}</p>
     <p className="card-text">language: {item?.language}</p>
     <p className="card-text">Pages: {item?.pages}</p>
     {/* {item?.members.map((data,i)=>{
      <>
       <h5 class="card-title">member {i+1}</h5>
      <p className="card-text">dferg</p>
      </>
     })} */}
     {/* {item?.status == "0" ?
   <input type="submit" style={{width:"150px",marginTop:"10px"}} onClick={()=>approveuser(item._id)} className="submit" value="Approve" />
   :null} */}
   {/* <input type="submit" style={{width:"150px" ,marginTop:"10px"}}  className="submit" onClick={()=>deleteuser(item._id)} value="Delete" /> */}

   </div>
   </div>
 </div>
</div>
  ))}
</div>
    </main>
     

    </div>
  )
}
