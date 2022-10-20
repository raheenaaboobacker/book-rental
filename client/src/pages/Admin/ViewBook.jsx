import React, { useEffect, useState } from 'react'
import AdminNav from '../../components/AdminNav'
import AdminSidebar from '../../components/AdminSidebar'
import axios from 'axios';


export default function ViewBook() {

  const [book,setBook]=useState([])
  const [message,setMessage]=useState(true)



    useEffect(() => {
        
        axios.get("http://localhost:5000/book/admin-view-books")
         .then(response=>{
          if(response.data.success==true){
            setBook(response.data.data)
            console.log(response.data.data);
          }
        })
        }, [message])

        const approveuser=(id)=>{
          console.log(id);
           axios.post(`http://localhost:5000/book/approve-book/${id}`)
            .then(response=>{
              console.log(response);
             if(response.data.success==true){
              alert(response.data.message)
              setMessage(!message)
             }
           })
         }

         const approvepdf=(id)=>{
          console.log(id);
           axios.post(`http://localhost:5000/book/approve-pdf/${id}`)
            .then(response=>{
              console.log(response);
             if(response.data.success==true){
              alert(response.data.message)
              setMessage(!message)
             }
           })
         }

        const deleteuser=(id)=>{
          console.log(id);
          axios.delete(`http://localhost:5000/book/delete-book/${id}`)
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
      <h1><i className="fa fa-book" /> Books</h1>
      {/* <p>A free and open source Bootstrap 4 admin template</p> */}
    </div>
    <ul className="app-breadcrumb breadcrumb">
      <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
      <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
    </ul>
  </div>
  <div className='row'>
  <div className="container mt-5 mb-5">
  <div className="d-flex justify-content-center row">
  {book&&book.map(item=>(
    <div className="col-md-6" style={{height:"520px"}} >
      <div className="row p-2 bg-white border rounded" style={{minHeight:"490px"}}>
        <div className="col-md-6 mt-1"><img className="img-fluid img-responsive rounded product-image" src={`./upload/${item?.image}`} /></div>
        <div className="col-md-6 mt-1">
          <h5>{item?.title}</h5>
          <div className="d-flex flex-row">
            <div className="ratings mr-2"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div><span>310</span>
          </div>
          <p className="card-text">Category: {item?.category}</p>
     <p className="card-text">Publisher: {item?.publisher}</p>
     <p className="card-text">price: {item?.price}</p>
     <p className="card-text">author: {item?.author}</p>
     <p className="card-text">language: {item?.language}</p>
     <p className="card-text">Pages: {item?.pages}</p>
     {item.pdf==="null"?<></>:<>
     <p className="card-text">Pdf: <a href={`/adminViewEBook/${item.pdf}`} >View Book</a></p>
     <p className="card-text">Price of Pdf Per Day: {item?.pdfprice}</p>
     </>
    }
     {item?.status == "0" ?
   <input type="submit" style={{width:"150px",marginTop:"10px"}} onClick={()=>approveuser(item._id)} className="submit" value="Approve" />
   : <> {item.pdf==="null"?<></>:<>{item.pdfstatus==="1"?<></>:<input type="submit" style={{width:"150px",marginTop:"10px"}} onClick={()=>approvepdf(item._id)} className="submit" value="Approve Pdf" />}</>}</>}
    <input type="submit" style={{width:"150px" ,marginTop:"10px"}}  className="submit" onClick={()=>deleteuser(item._id)} value="Delete" /> 
     
          </div>
       
      </div>
    </div>
  ))}
  </div>
</div>
  {/* {book&&book.map(item=>(
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
     {item.pdf==="null"?<></>:<>
     <p className="card-text">Pdf: <a href={`/adminViewEBook/${item.pdf}`} >View Book</a></p>
     <p className="card-text">Price of Pdf Per Day: {item?.pdfprice}</p>
     </>
    }
     {item?.status == "0" ?
   <input type="submit" style={{width:"150px",marginTop:"10px"}} onClick={()=>approveuser(item._id)} className="submit" value="Approve" />
   : <> {item.pdf==="null"?<></>:<>{item.pdfstatus==="1"?<></>:<input type="submit" style={{width:"150px",marginTop:"10px"}} onClick={()=>approvepdf(item._id)} className="submit" value="Approve Pdf" />}</>}</>}
    <input type="submit" style={{width:"150px" ,marginTop:"10px"}}  className="submit" onClick={()=>deleteuser(item._id)} value="Delete" /> 
     
   </div>
   </div>
 </div>
</div>
  ))} */}
</div>
    </main>
     

    </div>
  )
}
