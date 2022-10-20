import React, { useEffect, useState } from 'react'
import AdminNav from '../../components/AdminNav'
import AdminSidebar from '../../components/AdminSidebar'
import axios from 'axios';
import swal from 'sweetalert';

export default function ViewReview() {
    const [book,setBook]=useState([])
    const [message,setMessage]=useState(true)
  
  
  
      useEffect(() => {
          
          axios.get("http://localhost:5000/feedback/admin-view-feedback")
           .then(response=>{
            if(response.data.success==true){
              setBook(response.data.data)
              console.log(response.data.data);
            }
          })
          }, [message])
  
          const approveReview=(id)=>{
            console.log(id);
             axios.post(`http://localhost:5000/feedback/approve-feedback/${id}`)
              .then(response=>{
                console.log(response);
               if(response.data.success==true){
                alert(response.data.message)
                setMessage(!message)
               }
             })
           }
  
      
  
          const deleteReview=(id)=>{
            console.log(id);
            axios.delete(`http://localhost:5000/feedback/delete-feedback/${id}`)
             .then(response=>{
              if(response.data.success===true){
               alert(response.data.message)
               setMessage(!message)
              }
            })
          }
    return (
      <div>
          <AdminNav/>
          <AdminSidebar/>
          <main className="app-content">
    <div className="app-title">
      <div>
        <h1><i className="fa fa-dashboard" /> Feedback</h1>
        {/* <p>A free and open source Bootstrap 4 admin template</p> */}
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
        <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
      </ul>
    </div>
    <div className='row'>
    {book&&book.map(item=>(
   <div className="col-lg-4">
   <div className="bs-component">
     <div className="card">
      <img style={{marginLeft:"20%",height: 200, width: '60%', display: 'block'}} src={`./upload/${item?.bookData?.image}`} alt="Card image" />
       <div className="card-body">
       <h3 className="card-title">{item?.bookData?.title}</h3>
       <p className="card-text">Category: {item?.bookData?.category}</p>
       {/* <p className="card-text">Publisher: {item?.publisher}</p> */}
       <p className="card-text">User name: {item?.name}</p>
       <p className="card-text">Feedback: {item?.feedback}</p>
       {item.status==="0"? <input type="submit"  onClick={()=>approveReview(item._id)} className="btn btn-primary btn-round" value="Approve Review For Blog" />:null}
       <input type="submit"  onClick={()=>deleteReview(item._id)} className="btn btn-primary btn-round" value="Delete Review" />
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
  
