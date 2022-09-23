import React,{useEffect,useState} from 'react'
import Nav from '../../components/Nav'
import moment from 'moment'
import Footer from '../../components/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function ViewEbook() {
  var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
	if(month < 10)
	month = '0' + month.toString();
    var newdate = year + "-" + month + "-" + day;
    console.log(newdate);
  const [show,setShow]=useState(false)
    const [temp,setTemp]=useState([])

    const [product,setProduct]=useState([])
    const [token,setToken]=useState(localStorage.getItem("token"))
    const [arr,setArr]=useState([])
    const [file,setFile]=useState("")

    useEffect(() => {
        fetch("http://localhost:5000/order/view-rent-book", {
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
                  {data.data.map(item=>{
                    console.log(item.duedate);
                  })}
                  const fdata=data.data.filter(item=>{
                  let i = 0;
                  while ( i < data.data.length ) {
                    if (item.duedate>newdate)
                    return item;
                    i += 1;
                  }
                })
                  console.log(fdata);
                  setArr(fdata)
                    // const data=data.data.duedate.filter(item=>{
                    //   let i = 0;
                    //   while ( i < data.data.length ) {
                    //     if (item.duedate<newdate)
                    //     return item;
                    //     i += 1;
                    //   }
                    // })
                  
                }
                else {

                    console.log(data.message)
                }
            })
           
    }, [])

    // const handleClickOpen = (id) => {
		// console.log(id);
		// axios.get(`http://localhost:5000/order/view-rent-book/${id}`).then((response)=>{
		// 	console.log("singledata"+JSON.stringify(response.data.data));
		// 	setTemp(response.data.data)
		// 	console.log("singledata state"+JSON.stringify(temp))
		// 	setShow(true)
		// })
		// };


  return (
  
    <><Nav/>
    <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{backgroundImage: "url("+"assets/images/banner2.jpg"+")"}}>
		<h2 className="ltext-105 cl0 txt-center">
			E Books
		</h2>
	</section>
      <form className="bg0 p-t-75 p-b-85">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 col-xl-7  m-b-50">
                            <div className="m-l-25 m-r--101 m-lr-0-xl">
                                <div className="wrap-table-shopping-cart">
                                    <table className="table-shopping-cart">
                                        <tr className="table_head">
                                            <th className="column-1">Book </th>
                                            <th className="column-2"></th>
                                            <th className="column-4">Author</th>
                                            <th className="column-3">Due date</th>
                                            <th className="column-5">price per day</th>
                                            <th className="column-6">Total price</th>
                                            <th className="column-6"></th>
                                        </tr>
                                        {arr && arr.map((data, i) => (

                                            <tr className="table_row" key={i}>
                                                <td className="column-1">
                                                    <div className="how-itemcart1">
                                                        <img src={`./upload/${data?.BookData?.image}`} alt="IMG" />
                                                    </div>
                                                </td>
                                               
                                                <td className="column-2">{data?.BookData?.title}</td>
                                                <td className="column-3"> {data?.BookData?.author}</td>
                                                <td className="column-8">{data?.duedate}</td>
                                                <td className="column-3">₹ {data?.BookData?.pdfprice}</td>
                                                <td className="column-5">₹ {data?.price}</td>
                                                <td className="column-5"><a href={`/viewRentBook/${data?.BookData?.pdf}`} >View Book</a></td>
                                                
                                              

                                            </tr>
                                        ))}

                                    </table>
                                </div>
                            </div>
                        </div>

           
                    </div>
                </div>
            </form>
          
            <Footer/>
    </>
  )
}
