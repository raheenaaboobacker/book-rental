import React,{useEffect,useState} from 'react'
import Nav from '../../components/Nav'
import moment from 'moment'
import VolNav from '../../components/VolNav'
import axios from 'axios'

export default function ViewOrderRequest() {
    const [token,setToken]=useState(localStorage.getItem("token"))
    const [arr,setArr]=useState([])
    const [newdate,setNewdate]=useState(false)
    useEffect(() => {
        fetch("http://localhost:5000/order/vol-view-rent-book", {
            method: 'GET',
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

                    alert(data.message)
                }
            })
      
    }, [newdate])

    const shipped=(id)=>{
        axios.post(`http://localhost:5000/order/shipped/${id}`).then(res=>{
            console.log(res);
            alert(res.data.message)
            setNewdate(!newdate)
            window.location.reload();

        })
    }

    const delivered=(id)=>{
        axios.post(`http://localhost:5000/order/delivered/${id}`).then(res=>{
            console.log(res);
            alert(res.data.message)
            setNewdate(!newdate)
        })
    }
    
  return (
    <><VolNav/>
    <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{backgroundImage: "url("+"assets/images/banner1.jpg"+")"}}>
		<h2 className="ltext-105 cl0 txt-center" style={{color:"black"}}>
			Requests
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
                                            <th className="column-1">Product</th>
                                            <th className="column-2"></th>
                                            <th className="column-4">Quantity</th>
                                            <th className="column-5">Total</th>
                                            <th className="column-5">User Details</th>
                                            <th className="column-6">Ordered Date</th>
                                            <th className="column-8">delivery Date</th>
                                            <th className="column-6"></th>
                                            <th className="column-3"></th>

                                        </tr>
                                        {arr && arr.map((data, i) => (

                                            <tr className="table_row" key={i}>
                                                <td className="column-1">
                                                    <div className="how-itemcart1">
                                                        <img src={`./upload/${data?.orderBookData?.image}`} alt="IMG" />
                                                    </div>
                                                </td>
                                                <td className="column-2">{data?.orderBookData?.title}</td>
                                                <td className="column-8">{data?.bookdata[0]?.qty}</td>
                                                <td className="column-5">₹ {data?.bookdata[0]?.price * data?.bookdata[0]?.qty}</td>
                                                <td className="column-5">{data?.address?.name}<br/>{data?.address?.phone}<br/>{data?.address?.landmark}<br/>{data?.address?.pincode}</td>
                                                <td className="column-5">{moment(data?.date).format("DD/MMM/YYYY")}</td>
                                                <td className="column-5">{data.orderstatus==="delivered"?<>{moment(data?.deliverydate).format("DD/MMM/YYYY")}</>:<>{moment(data?.date).add(7, 'days').format("DD/MMM/YYYY")}</>}</td>
                                                <td className="column-3">
                                                    
                                                    {data?.orderstatus==="delivered"?<>Deliverd</>:
                                                    <>{data?.orderstatus==="ordered"?
                                                    <button   onClick={(e)=>{e.preventDefault();shipped(data._id)}} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                        Shipped
                                                    </button>
                                                    :<button   onClick={(e)=>{e.preventDefault();delivered(data._id)}} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                        Delivered
                                                    </button>}</>}
                                                
                                                </td>

                                            </tr>
                                        ))}

                                    </table>
                                </div>
                            </div>
                        </div>

           
                    </div>
                </div>
            </form>
    </>
  )
}

