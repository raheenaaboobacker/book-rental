import AdminNav from '../../components/AdminNav'
import AdminSidebar from '../../components/AdminSidebar'
import React,{useEffect,useState} from 'react'
import moment from 'moment'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import Modal from 'react-bootstrap/Modal';

export default function AdmininViewHisBook() {
    const navigate=useNavigate()
    const [show,setShow]=useState(false)
    const [temp,setTemp]=useState([])

    const [product,setProduct]=useState([])
    const [token,setToken]=useState(localStorage.getItem("token"))
    const [arr,setArr]=useState(null)
    const [newdate,setNewdate]=useState("")
    const [file,setFile]=useState("")

    useEffect(() => {
		
        fetch("http://localhost:5000/book/view-user-books", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
            .then(res => res.json())
            .then((data) => {
                console.log("Result========", data)
                if (data.success == true) {
                    setArr(data.data)
                    console.log(arr);
                    // alert(data.message)
                }
                else {

                    console.log(data.message)
                }
            })
            .catch(err=>{
                console.log(err.data.data.message)
            })
      
    }, [])

    const handleClickOpen = (id) => {
		console.log(id);
		axios.get(`http://localhost:5000/book/singleitem/${id}`).then((response)=>{
			console.log("singledata"+JSON.stringify(response.data.data));
			setTemp(response.data.data)
			console.log("singledata state"+JSON.stringify(temp))
			setShow(true)
		})
		};


    const addPdf=(id)=>{
       
        console.log(product);
        console.log(file.name);
        console.log(id);

        if(file){
            const data=new FormData();
            const filename=file.name
            data.append("name",filename)
            data.append("file",file)
            axios.post("http://localhost:5000/book/upload",data)
            .then((response)=>{
                console.log(response)
            })
        }
     axios.post(`http://localhost:5000/book/add-pdf/${id}`,product)
    .then((result)=>{
      console.log(result.data);
      if(result.data.success==true){
        swal(result.data.message)
        navigate('/adminViewBook')
      }
    
    })
    }
    return (
        <div className="app sidebar-mini">
        <AdminNav/>
        <div className="adminapp-sidebar__overlay" data-toggle="sidebar"></div>
        <AdminSidebar/>
        <main className="app-content">
        
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
                                                <th className="column-4">Status</th>
                                            </tr>
                                            {arr && arr.map((data, i) => (
    
                                                <tr className="table_row" key={i}>
                                                    <td className="column-1">
                                                        <div className="how-itemcart1">
                                                            <img src={`./upload/${data?.bookdata?.image}`} alt="IMG" />
                                                        </div>
                                                    </td>
                                                   
                                                    <td className="column-2">{data?.bookdata?.title}</td>
                                                    <td className="column-3">₹ {data?.bookdata?.price}</td>
                                                    <td className="column-8">{data?.bookdata?.author}</td>
                                                    <td className="column-5">{data?.bookdata?.language}</td>
                                                    <td className="column-5">{data?.bookdata?.publisher}</td>
                                                    {data?.bookdata?.pdf==="null"?<>
                                                    {/* <td><input type='file'  onChange={(e)=>{setFile(e.target.files[0]);setProduct({...product,id:data?.bookdata?._id}); setProduct({...product,pdf:e.target.files[0].name});}}/></td> */}
                                                    <td  className="column-5"><button type='button' style={{widh:"100px"}} onClick={()=>{handleClickOpen(data?.bookdata?._id)}}  className="flex-c-m stext-101 cl0 size-10 bg1 bor1 hov-btn1 p-lr-15 ">
                                                    Add Pdf
                                            </button></td></>:<>{data?.bookdata?.pdfstatus==="0"?<td className="column-5"> Not Approved</td>:<><td className="column-5"> Pdf Approved</td>
                                                  
                                            <td className="column-5">
                                                <button type='button' style={{widh:"100px"}} onClick={()=>{navigate(`/AdminViewBookDetails/${data?.bookdata?._id}`)}}  className="flex-c-m stext-101 cl0 size-10 bg1 bor1 hov-btn1 p-lr-15 ">
                                                Order Details
                                                </button>
                                            </td>
                                            </>}</>}
    
                                                </tr>
                                            ))}
    
                                        </table>}
                                    
                                </div>
                            </div>
                        </div>

           
                    </div>
                </div>
            </form>
            <Modal
        show={show}
		size="lg"
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
		dialogClassName="modal-100w"
        // dialogClassName="modal-100w"
        // aria-labelledby="example-custom-modal-styling-title"
		style={{padding:"70px 0px 0px 0px"}}
      >
		
		
		<Modal.Body>
	<div className="container">
	{/* <button onClick={modalclose} className="how-pos3 hov3 trans-04 ">
	  <img src="assets/images/icons/icon-close2.png" alt="CLOSE"/>
  </button> */}
  
		<div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
        {/* <Modal.Body style={{width:"800px"}}> */}
		<div className="row">
			{temp?.map(data=><>
					<div className="col-md-5 col-lg-6 p-b-30">
						<div className="p-l-25 p-lr-0-lg">
							<div className="wrap-slick3 flex-sb flex-w">
								
								<div className="slick3 gallery-lb">
										<div className="wrap-pic-w pos-relative">
											<img src={`./upload/${data?.image}`} alt="IMG-PRODUCT"/>

											<a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-01.jpg">
												<i className="fa fa-expand"></i>
											</a>
										</div>
									</div>
							</div>
						</div>
					</div>
					
					<div className="col-md-7 col-lg-6 p-b-30">
						<div className="p-r-50 p-t-5 p-lr-0-lg">
							<h4 className="mtext-105 cl2 js-name-detail p-b-14">
								{data.title}
							</h4>

							<span className="mtext-106 cl2">
							₹ {data?.price}
							</span>
							
							<div className="p-t-33">
							<div className="flex-w flex-r-m p-b-10">
								

									<div className="size-203 flex-c-m respon6">
										Category
									</div>

									<div className="size-204 respon6-next">										
											<h6>{data.category}</h6>									
									</div>
								</div>
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Publiser
									</div>

									<div className="size-204 respon6-next">										
											<h6>{data.publisher}</h6>									
									</div>
								</div>
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Language
									</div>

									<div className="size-204 respon6-next">										
											<h6>{data.language}</h6>									
									</div>
								</div>
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Pages
									</div>

									<div className="size-204 respon6-next">										
											<h6>{data.pages}</h6>									
									</div>
								</div>
                                <form onSubmit={(e)=>{e.preventDefault();addPdf(data._id)}}>
                                <div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Choose Pdf
									</div>

									<div className="size-204 respon6-next">										
                                    <input type='file'   onChange={(e)=>{setFile(e.target.files[0]);setProduct({...product,id:data?._id}); setProduct({...product,pdf:e.target.files[0].name});}} required/>									
									</div>
								</div>
                               
                                <div className="flex-w flex-r-m p-b-10">
									<div className="size-203 flex-c-m respon6">
										Price for One day
									</div>

									<div className="size-204 respon6-next">										
                                    <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="number" name="pdfprice" placeholder="price"
                                     onChange={(e)=>{setProduct({...product,pdfprice:e.target.value})}} value={product.pdfprice}  required/>									
									</div>
								</div>
								<div className="flex-w flex-r-m p-b-10">
									<div className="size-204 flex-w flex-m respon6-next">
										
										<button   type='submit'  className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
											Add Pdf
										</button>
										<button onClick={() => setShow(false)} className="how-pos3 hov3 trans-04 ">
										<img src="assets/images/icons/icon-close2.png" alt="CLOSE"/>
										</button>
									</div>
								</div>
                                </form>	

								
							</div>

				
						</div>
					</div>
					</>)}
				</div>
				</div>
			</div> 	
        </Modal.Body>
      </Modal>
    
            </main>
        </div>
      )
    }