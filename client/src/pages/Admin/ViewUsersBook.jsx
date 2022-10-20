import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import AdminNav from '../../components/AdminNav';
import AdminSidebar from '../../components/AdminSidebar';

export default function ViewUsersBook() {
    const navigate=useNavigate()
    const [arr,setArr]=useState(null)
    const [user,setUser]=useState(null)
    const {id}=useParams()

    useEffect(()=>{
        console.log(id);
        axios.get(`http://localhost:5000/book/admin-view-user/${id}`)
            .then(result=> {
                console.log("Result========", result)
                if (result.data.success == true) {
                    setUser(result.data.data)
                    // alert(data.message)
                }
                else {

                    console.log(result.data.message)
                }
            })
        axios.get(`http://localhost:5000/book/admin-view-user-books/${id}`)
            .then(result=> {
                console.log("Result========", result)
                if (result.data.success == true) {
                    setArr(result.data.data)
                    // alert(data.message)
                }
                else {

                    console.log(result.data.message)
                }
            })
            .catch(err=>{
                console.log(err)
            })
    },[])
  return (
    <div>
     <AdminNav/>
     <AdminSidebar/>
     <main className="app-content">
  <div className="app-title">
    <div>
    {user&&user.map(item=>(
        <h1>{item.username}'s books</h1>
    ))}
      {/* <p>A free and open source Bootstrap 4 admin template</p> */}
    </div>
    </div>
      <form className="bg0 p-t-75 p-b-85">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 col-xl-7  m-b-50">
                            <div className="m-l-25 m-r--101 m-lr-0-xl">
                                <div className="wrap-table-shopping-cart">
                                {
                                            arr===null?<div style={{width:"600px", height:"200px", margin:"auto"}}><div style={{textAlign:"center",fontSize:15}}  className="alert alert-primary" role="alert">
                                            No Book Added!
                                          </div> </div>:
                                            <table className="table-shopping-cart">
                                            <tr className="table_head">
                                                <th className="column-1">Book </th>
                                                <th className="column-2"></th>
                                                <th className="column-3">Price</th>
                                                <th className="column-4">Author</th>
                                                <th className="column-4">Language</th>
                                                <th className="column-4">Publisher</th>
                                                <th className="column-4">Book Status</th>
                                            </tr>
                                            {arr && arr.map((data, i) => (
    
                                                <tr className="table_row" key={i}>
                                                    <td className="column-1">
                                                        <div className="how-itemcart1">
                                                            <img src={`/upload/${data?.bookdata?.image}`} alt="IMG" />
                                                        </div>
                                                    </td>
                                                   
                                                    <td className="column-2">{data?.bookdata?.title}</td>
                                                    <td className="column-3">₹ {data?.bookdata?.price}</td>
                                                    <td className="column-8">{data?.bookdata?.author}</td>
                                                    <td className="column-5">{data?.bookdata?.language}</td>
                                                    <td className="column-5">{data?.bookdata?.publisher}</td>
                                                    {data?.bookdata?.pdf==="null"?<>
                                                    {/* <td><input type='file'  onChange={(e)=>{setFile(e.target.files[0]);setProduct({...product,id:data?.bookdata?._id}); setProduct({...product,pdf:e.target.files[0].name});}}/></td> */}
                                                    <td  className="column-5">
                                                        {/* <button type='button' style={{widh:"100px"}} onClick={()=>{handleClickOpen(data?.bookdata?._id)}}  className="flex-c-m stext-101 cl0 size-10 bg1 bor1 hov-btn1 p-lr-15 "> */}
                                                 No Pdf Found
                                            {/* </button> */}
                                            </td></>
                                            :<>{data?.bookdata?.pdfstatus==="0"?<td className="column-5">Pdf Not Approved</td>:<><td className="column-5"> Pdf Approved</td></>}
                                            
                                            </>}
                                            {data?.bookdata?.status=="0"? 
                                             <td className="column-2">Book Not approved</td>:   
                                            <td className="column-5">
                                                <button type='button' style={{widh:"100px"}} onClick={()=>{navigate(`/details/${data?.bookdata?._id}`)}}  className="flex-c-m stext-101 cl0 size-10 bg1 bor1 hov-btn1 p-lr-15 ">
                                                Order Details
                                                </button>
                                            </td>
                                            }
                                                </tr>
                                            ))}
    
                                        </table>}
                                    
                                </div>
                            </div>
                        </div>

           
                    </div>
                </div>
            </form>   
    </main>
    </div>
  )
}
