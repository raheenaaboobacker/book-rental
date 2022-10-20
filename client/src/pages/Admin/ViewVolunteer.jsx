import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNav from '../../components/AdminNav';
import AdminSidebar from '../../components/AdminSidebar';
import swal from 'sweetalert';

export default function ViewVolunteer() {
    const [volunteer,setVolunteer]=useState([])
    const [message, setMessage] = useState(true)


    useEffect(() => {
      
       axios.get("http://localhost:5000/admin/view-volunteers")
        .then(response=>{
         if(response.data.success==true){
           setVolunteer(response.data.data)
           console.log(volunteer);
         }
       })
       }, [message])


       const approveuser=(id)=>{
        console.log(id);
         axios.post(`http://localhost:5000/admin/approve/${id}`)
          .then(response=>{
            console.log(response);
           if(response.data.success==true){
            swal(response.data.message)
            setMessage(!message)
           }
         })
       }


       const deleteuser=(id)=>{
        console.log(id);
        axios.delete(`http://localhost:5000/admin/delete-user/${id}`)
         .then(response=>{
          if(response.data.success===true){
           swal(response.data.message)
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
      <h1><i className="fa fa-users" /> Volunteers</h1>
      {/* <p>A free and open source Bootstrap 4 admin template</p> */}
    </div>
    <ul className="app-breadcrumb breadcrumb">
      <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
      <li className="breadcrumb-item"><a href="#">Volunteers</a></li>
    </ul>
  </div>
  <div className='row'>
  {volunteer&&volunteer.map(item=>(
    <div className="col-md-4">
    <div className="card card-profile">
      <div className="card-avatar">
        <a href="javascript:;">
          <img className="img" src="https://image.shutterstock.com/image-vector/user-icon-260nw-523867123.jpg" />
        </a>
      </div>
      <div className="card-body">
        <h4 className="card-title">{item?.username}</h4>
        <p className="card-description">Email: {item?.registerdetails[0]?.email} </p>
        <p className="card-description">Mobile No: {item?.registerdetails[0]?.mobile} </p>
        <p className="card-description">Address: {item?.registerdetails[0]?.address} </p>
        {item?.status === 0 ?
        <a onClick={()=>approveuser(item._id)} className="btn btn-primary btn-round">Approve</a>
        :null}
        <a onClick={()=>deleteuser(item._id)} className="btn btn-primary btn-round">Delete</a>
      </div>
    </div>
  </div>
  
    ))}
    </div>
    </main>
        </div>
  )
}
