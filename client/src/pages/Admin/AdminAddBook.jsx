import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import AdminNav from '../../components/AdminNav'
import AdminSidebar from '../../components/AdminSidebar'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { useEffect } from 'react'

export default function AdminAddBook() {
  const navigate=useNavigate();
  const [bookdata,setBookdata]=useState({ })
  const [file,setFile]=useState([" "])
  const [token,setToken]=useState(localStorage.getItem("token"))
  const [category, setCategory] = useState([])



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

    const handleInputChange=(e)=>{
      const {name,value}=e.target
      setBookdata({
          ...bookdata,
          [name]:value
      })
     console.log(bookdata);
  }


  const validation=(e)=>{
     e.preventDefault();
     
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
     fetch('http://localhost:5000/book/addBook', {
      method: 'POST',
      body: JSON.stringify(bookdata),
      headers: {
          'Content-Type': 'application/json',
          'Authorization':'Bearer '+token
      },
  })
  .then(res => res.json())
  .then((data) => {
      console.log("Result========",data)
      if(data.success==true)
      {
        
  
          alert(data.message)
          
          navigate('/adminViewBook')
      }
      else{
          alert("auth failed please login")
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
        <h1><i className="fa fa-edit"></i> Add Book</h1>
        {/* <p>Alert can sent to Fisher Man</p> */}
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
        <li className="breadcrumb-item">home</li>
        <li className="breadcrumb-item"><a href="#">Add Book</a></li>
      </ul>
    </div>
    <section className="bg0 p-t-40 p-b-116">
		<div className="container">
        <form onSubmit={validation}>
			<div className="flex-w flex-tr">
            
				<div className="size-210 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
					
					<div className="bor8 m-b-20 how-pos4-parent">
							<input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="title" placeholder="Book Title"
                            onChange={handleInputChange} value={bookdata.title} />
                            <i className="how-pos4 pointer-none zmdi zmdi zmdi-book"></i>
						</div>

						<div className="bor8 m-b-20 how-pos4-parent">
							<input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="author" placeholder="Author Name"
                              onChange={handleInputChange} value={bookdata.author} />
                            <i className="how-pos4 pointer-none zmdi zmdi-account material-icons-name"></i>
						</div>
                      

            <div className="bor8 m-b-20 how-pos4-parent">
							<input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="number" name="price" placeholder="price"
                              onChange={handleInputChange} value={bookdata.price} />
							<i className="how-pos4 pointer-none "> ₹</i>
						</div>

                        <div className="bor8 m-b-20 how-pos4-parent">
							<select className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="category" placeholder="Choose Category"
                              onChange={handleInputChange} value={bookdata.category} >
                            <option defaultValue>Choose Category</option>
                            {category&&category.map(item=>(
                                <option value={item.category}>{item.category}</option>
                            ))}
                            </select>
							<i className="how-pos4 pointer-none zmdi zmdi-collection-item"></i>
						</div>
                        <div className="bor8 m-b-20 how-pos4-parent">
							<input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="publisher" placeholder="Publisher"
                              onChange={handleInputChange} value={bookdata.publisher} />
							<i className="how-pos4 pointer-none zmdi zmdi-account material-icons-name"></i>
						</div>
                        <div className="bor8 m-b-20 how-pos4-parent">
                        <select className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="language" placeholder="Choose language"
                              onChange={handleInputChange} value={bookdata.language} >
                            <option defaultValue>Choose Language</option>
                            
                            <option value="Malayalam">Malayalam</option>
                            <option value="English">English</option>
                           
                            </select>
                            	<i className="how-pos4 pointer-none zmdi zmdi-crop-square"></i>
						</div>
                       
				</div>

				<div className="size-210 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
                

                        
                        <div className="bor8 m-b-30">
							<textarea className="stext-111 cl2 plh3 size-120 p-lr-20 p-tb-25" name="desc" placeholder="Description About Book"
                            onChange={handleInputChange} value={bookdata.desc}></textarea>
						</div>
                        
                        <div className="bor8 m-b-20 how-pos4-parent">
							<input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="number" name="pages" placeholder="Pages"
                              onChange={handleInputChange} value={bookdata.pages} />
							<i className="how-pos4 pointer-none zmdi zmdi-format-list-numbered"></i>
						</div>
                        <div className="bor8 m-b-20 how-pos4-parent">
							<input className="hidden stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="file" name="image"  placeholder="Upload image" 
                              required  onChange={(e)=>{setFile(e.target.files[0]); setBookdata({...bookdata,image:e.target.files[0].name})}} />
							<i className="how-pos4 pointer-none zmdi zmdi-upload"></i>
						</div>
                        {/* <div className="bor8 m-b-20 how-pos4-parent">
							<input className="hidden stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="file" name="image"  placeholder="Upload image" 
                              required  onChange={(e)=>{setFile(e.target.files[0]); setBookdata({...bookdata,image:e.target.files[0].name})}} />
							<i className="how-pos4 pointer-none zmdi zmdi-upload"></i>
						</div>	 */}
				</div>
                <button style={{width:"50%"}} className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer" >
							Submit
						</button>
			</div>
      	</form>

		</div>
	</section>
    </main>
    </div>
  )
}
