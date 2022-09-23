import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import AdminNav from '../../components/AdminNav'
import AdminSidebar from '../../components/AdminSidebar'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { useEffect } from 'react'

export default function ViewMessage() {
    const navigate=useNavigate()
const[complaint,setComplaint]=useState([])

useEffect(()=>{
    axios.get("http://localhost:5000/admin/view-message")
    .then((result)=>{
      console.log(result.data);
      if(result.data.success==true){
        setComplaint(result.data.data)
        // navigate('/admindashboard')
      }
    
    })
  },[])


  return (
    <div className="app sidebar-mini">
    <AdminNav/>
    <div className="adminapp-sidebar__overlay" data-toggle="sidebar"></div>
    <AdminSidebar/>
    <main className="app-content">
    <div className="app-title" style={{alignItem:"center"}}>
      <div>
        <h1><i className="fa fa-edit"></i>  Messages</h1>
        {/* <p>Alert can sent to Fisher Man</p> */}
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
        <li className="breadcrumb-item">home</li>
        <li className="breadcrumb-item"><a href="#"> Messages</a></li>
      </ul>
    </div>
    
    <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-plain">
                <div className="card-header card-header-primary">
                  <h4 className="card-title mt-0"> Added Categories</h4>
                  {/* <p className="card-messages"> Here is a subtitle for this table</p> */}
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className>
                          <tr><th>
                          Phone</th>
                            <th>
                              Messages 
                            </th>
                            <th>Email
                            </th>
                          </tr></thead>
                        <tbody>
                          {complaint && complaint.map(item => (
                            <tr>
                              <td>{item.phone}
                              </td>
                              <td>
                               {item.msg}
                              </td>
                              <td>{item.email}
                              </td>
                            </tr>
                          ))}


                        </tbody>
                      </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </main>
    </div>
  )
}
