import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNav from '../../components/AdminNav';
import AdminSidebar from '../../components/AdminSidebar';


 function AdminDashboard() {
  const navigate=useNavigate()
  const [user,setUser]=useState([])
  const [book,setBook]=useState([])
  const [volunteer,setVolunteer]=useState([])
  let count=0
  
  
  useEffect(() => {
   axios.get("http://localhost:5000/admin/view-users")
   .then(response=>{
    if(response.data.success==true){
      setUser(response.data.data)
      console.log(user);
    }
  })
  axios.get("http://localhost:5000/book/view-books")
   .then(response=>{
    if(response.data.success==true){
      setBook(response.data.data)
      console.log(book);
    }
  })
  axios.get("http://localhost:5000/admin/view-volunteers")
   .then(response=>{
    if(response.data.success==true){
      setVolunteer(response.data.data)
      console.log(volunteer);
    }
  })
  }, [])
  
  return (
              <div className="app sidebar-mini">
 <AdminNav/>
    <AdminSidebar/>
   <main className="app-content">
  

  <div className="row" style={{paddingTop:"10px"}}>
    
          <div className="col-md-6 col-lg-4" onClick={() => { navigate("/viewUser") }}>
            <div className="card card-stats">
              <div className="card-header card-header-warning card-header-icon">
                <div className="card-icon info coloured-icon">
                  <i className="icon fa fa-users fa-3x" />
                </div>
                <p className="card-category">USERS</p>
                <h3 className="card-title">{user.length}
                  <small>Usesr</small>
                </h3>
              </div>

            </div>
          </div>
          <div className="col-md-6 col-lg-4" onClick={() => { navigate("/viewBook") }}>
            <div className="card card-stats">
              <div className="card-header card-header-warning card-header-icon">
                <div className="card-icon info coloured-icon">
                  <i className="icon fa fa-book fa-3x" />
                </div>
                <p className="card-category">BOOKS</p>
                <h3 className="card-title">{book.length}
                  <small>Books</small>
                </h3>
              </div>

            </div>
          </div>
          <div className="col-md-6 col-lg-4" onClick={() => { navigate("/viewVolunteer") }}>
            <div className="card card-stats">
              <div className="card-header card-header-warning card-header-icon">
                <div className="card-icon info coloured-icon">
                  <i className="icon fa fa-users fa-3x" />
                </div>
                <p className="card-category">Volunteer</p>
                <h3 className="card-title">{volunteer.length}
                  <small>VOLUNTEER</small>
                </h3>
              </div>

            </div>
          </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="tile">
        <h3 className="tile-title">Monthly Sales</h3>
        <div className="embed-responsive embed-responsive-16by9">
          <canvas className="embed-responsive-item" id="lineChartDemo" />
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="tile">
        <h3 className="tile-title">Support Requests</h3>
        <div className="embed-responsive embed-responsive-16by9">
          <canvas className="embed-responsive-item" id="pieChartDemo" />
        </div>
      </div>
    </div>
  </div>
</main>

    </div>
    
      
  )
}


export default AdminDashboard;
