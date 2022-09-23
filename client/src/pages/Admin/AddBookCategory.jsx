import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import AdminNav from '../../components/AdminNav'
import AdminSidebar from '../../components/AdminSidebar'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { useEffect } from 'react'

export default function AddBookCategory() {
  const navigate=useNavigate()
const[data,setData]=useState([])
const[category,setCategory]=useState([])


  const handleInputChange=(e)=>{
    const {name,value}=e.target
    setData({
        ...data,
        [name]:value
    })
    console.log(data);
}

useEffect(()=>{
  axios.get("http://localhost:5000/book/view-category")
  .then((result)=>{
    console.log(result.data);
    if(result.data.success==true){
      setCategory(result.data.data)
      // navigate('/admindashboard')
    }
  
  })
},[])


const handleSubmit =  (e) => {
  e.preventDefault();
  axios.post("http://localhost:5000/book/add-category",data)
  .then((result)=>{
    console.log(result.data);
    if(result.data.success==true){
      swal(result.data.message)
      navigate('/addCategory')
    }
  
  })
 
}



  return (
    <div className="app sidebar-mini">
    <AdminNav/>
    <div className="adminapp-sidebar__overlay" data-toggle="sidebar"></div>
    <AdminSidebar/>
    <main className="app-content">
    <div className="app-title" style={{alignItem:"center"}}>
      <div>
        <h1><i className="fa fa-edit"></i> Add Category</h1>
        {/* <p>Alert can sent to Fisher Man</p> */}
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
        <li className="breadcrumb-item">home</li>
        <li className="breadcrumb-item"><a href="#">Add Category</a></li>
      </ul>
    </div>
    <div className="row">
      <div className="col-md-9">
        <div className="tile">
          <div className="row">
            <div className="col-lg-7 offset-lg-2">
              <form onSubmit={handleSubmit}>
       
               
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Category Name</label>
                  <input style={{marginTop:"50px"}} className="form-control" id="exampleInputText" type="text"  placeholder="Category Name" name="category" value={data.category} onChange={handleInputChange} required/>
                </div>
                
                
                <input type="submit" style={{width:"200px"}} name="submit"  className="btn btn-primary btn-round" value="Add" />
            
              </form>
            </div>
            </div>
           
        </div>
      </div>
    </div>
    <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <div className="card card-plain">
                <div className="card-header card-header-primary">
                  <h4 className="card-title mt-0"> Added Categories</h4>
                  {/* <p className="card-category"> Here is a subtitle for this table</p> */}
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className>
                          <tr><th>
                          </th>
                            <th>
                              Category Name
                            </th>
                            <th>
                            </th>
                          </tr></thead>
                        <tbody>
                          {category && category.map(item => (
                            <tr>
                              <td>
                              </td>
                              <td>
                               {item.category}
                              </td>
                              <td>
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
