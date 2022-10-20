import React,{useEffect,useState} from 'react'
import Nav from '../../components/Nav'
import moment from 'moment'

export default function OrderDetails() {
    const [token,setToken]=useState(localStorage.getItem("token"))
    const [arr,setArr]=useState(null)
    const [newdate,setNewdate]=useState("")
    useEffect(() => {
        fetch("http://localhost:5000/order/viewOrderItems", {
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
      
    }, [])
    
  return (
    <><Nav/>
    <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{backgroundImage: "url("+"assets/images/banner2.jpg"+")"}}>
		<h2 className="ltext-105 cl0 txt-center">
			Orders
		</h2>
	</section>
      <form className="bg0 p-t-75 p-b-85">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 col-xl-7  m-b-50">
                            <div className="m-l-25 m-r--101 m-lr-0-xl">
                                <div className="wrap-table-shopping-cart">
                                {
                                            arr===null?<div style={{width:"600px", height:"200px", margin:"auto"}}><div style={{textAlign:"center",fontSize:15}}  className="alert alert-primary" role="alert">
                                            No Order Found!
                                          </div> </div>:
                                           <table className="table-shopping-cart">
                                           <tr className="table_head">
                                               <th className="column-1">Product</th>
                                               <th className="column-2"></th>
                                               <th className="column-3">Price</th>
                                               <th className="column-4">Quantity</th>
                                               <th className="column-5">Total</th>
                                               <th className="column-6">Order Status</th>
                                               <th className="column-6">Ordered Date</th>
                                               <th className="column-8">delivery Date</th>
                                           </tr>
                                           {arr && arr.map((data, i) => (
   
                                               <tr className="table_row" key={i}>
                                                   <td className="column-1">
                                                       <div className="how-itemcart1">
                                                           <img src={`./upload/${data?.orderBookData?.image}`} alt="IMG" />
                                                       </div>
                                                   </td>
                                                   <td className="column-2">{data?.orderBookData?.title}</td>
                                                   <td className="column-3">₹ {data?.orderBookData?.price}</td>
                                                   <td className="column-8">{data?.bookdata[0]?.qty}</td>
                                                   <td className="column-5">₹ {data?.bookdata[0]?.price * data?.bookdata[0]?.qty}</td>
                                                   <td className="column-5">{data?.orderstatus}</td>
                                                   <td className="column-5">{moment(data?.date).format("DD/MMM/YYYY")}</td>
                                                   <td className="column-5">{data.orderstatus==="delivered"?<>{moment(data?.deliverydate).format("DD/MMM/YYYY")}</>:<>{moment(data?.date).add(7, 'days').format("DD/MMM/YYYY")}</>}</td>
   
                                               </tr>
                                           ))}
   
                                       </table>
                                        }
                                   
                                </div>
                            </div>
                        </div>

           
                    </div>
                </div>
            </form>
    </>
  )
}
