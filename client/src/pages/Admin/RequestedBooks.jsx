import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import AdminNav from '../../components/AdminNav'
import AdminSidebar from '../../components/AdminSidebar'
import { useEffect } from 'react'
import moment from 'moment'

export default function RequestedBooks() {
  const[request,setrequest]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/admin/view-orders")
    .then((result)=>{
      console.log(result.data);
      if(result.data.success==true){
        setrequest(result.data.data)
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
        <h1><i className="fa fa-edit"></i>   Order Table</h1>
        {/* <p>Alert can sent to Fisher Man</p> */}
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
        <li className="breadcrumb-item">home</li>
        <li className="breadcrumb-item"><a href="#"> Order Table</a></li>
      </ul>
    </div>
    
    <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-plain">
                <div className="card-header card-header-primary">
                  <h4 className="card-title mt-0"> Ordered Details</h4>
                  {/* <p className="card-messages"> Here is a subtitle for this table</p> */}
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className>
                          <tr><th>Name</th>
                            <th>Book</th>
                            <th>Price </th>
                            <th>Quantity </th>
                            <th>Total </th>
                            <th>Order Status </th>
                            <th>Order Date </th>
                            <th>delivery Date </th>
                          </tr></thead>
                        <tbody>
                          {request && request.map(data => (
                            <tr>
                              <td>{data?.userData?.username} </td>
                              <td>{data?.orderBookData?.title} </td>
                              <td> ₹ {data?.orderBookData?.price}</td>
                              <td>{data?.bookdata[0]?.qty}</td>
                              <td>₹ {data?.bookdata[0]?.price * data?.bookdata[0]?.qty}</td>
                              <td>{data?.orderstatus}</td>
                              <td>{moment(data?.date).format("DD/MMM/YYYY")}</td>
                              <td>{data.orderstatus==="delivered"?<>{moment(data?.deliverydate).format("DD/MMM/YYYY")}</>:<>{moment(data?.date).add(7, 'days').format("DD/MMM/YYYY")}</>}</td>
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
