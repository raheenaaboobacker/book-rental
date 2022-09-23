import React, { useEffect, useState } from 'react'
import AdminNav from '../../components/AdminNav'
import AdminSidebar from '../../components/AdminSidebar'
import axios from 'axios';
import swal from 'sweetalert';


export default function ViewUsers() {
    const [user,setUser]=useState([])
    const [message, setMessage] = useState([])



    useEffect(() => {
         axios.get("http://localhost:5000/admin/view-users")
         .then(response=>{
            console.log(response);
          if(response.data.success==true){
            setUser(response.data.data)
            console.log(user);
          }
        })
      
        }, [])


        const deleteuser=(id)=>{
          console.log(id);
          axios.delete(`http://localhost:5000/admin/delete-user/${id}`)
           .then(response=>{
            if(response.data.success===true){
             swal(response.data.message)
             setMessage(response.data.message)
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
      <h1><i className="fa fa-dashboard" /> Users</h1>
      {/* <p>A free and open source Bootstrap 4 admin template</p> */}
    </div>
    <ul className="app-breadcrumb breadcrumb">
      <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
      <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
    </ul>
  </div>
  <div className='row'>
  {user&&user.map(item=>(
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
        <p className="card-description">City: {item?.registerdetails[0]?.city} </p>
        <a onClick={()=>deleteuser(item._id)} className="btn btn-primary btn-round">Delete</a>
      </div>
    </div>
  </div>
//  <div className="col-lg-3">
//  <div className="bs-component">
//    <div className="card">
//     <img style={{height: 170, width: '100%', display: 'block'}} src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png" alt="Card image" />
//      <div className="card-body">Phone: {item?.registerdetails[0]?.email}
//      <h3 className="card-title">{item?.username}</h3>
//      <p className="card-text"></p>
//      <p className="card-text">Address: {item?.registerdetails[0]?.mobile}</p>
//      <p className="card-text">Age: {item?.registerdetails[0]?.city}</p>
//      {/* {item?.registerdetails[0]?.members.map((data,i)=>{
//       <>
//        <h5 class="card-title">member {i+1}</h5>
//       <p className="card-text">dferg</p>
//       </>
//      })} */}
//      {/* {item?.status == "0" ?
//    <input type="submit" style={{width:"150px",marginTop:"10px"}} onClick={()=>approveuser(item._id)} className="submit" value="Approve" />
//    :null} */}
//    {/* <input type="submit" style={{width:"150px" ,marginTop:"10px"}}  className="submit" onClick={()=>deleteuser(item._id)} value="Delete" /> */}

//    </div>
//    </div>
//  </div>
// </div>
  ))}
</div>


    </main>
        </div>
  )
}
