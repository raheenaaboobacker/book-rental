import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function ViewBookDetails(props) {
    const [arr,setArr]=useState(null)
    const [book,setBook]=useState(null)
    const [rent,setRent]=useState(null)

    useEffect(()=>{
      const id=props.bookId
      console.log(id);

      axios.get(`http://localhost:5000/book/singleitem/${id}`).then((response)=>{
			// console.log("bookdata===>",response.data.data);
			setArr(response.data.data)
			
		})

      axios.get(`http://localhost:5000/book/view-orders/${id}`).then((response)=>{
			console.log("ordereddata====>",response.data.data);
			setBook(response.data.data)
		}).catch(err=>{
      console.log(err);
    })

    axios.get(`http://localhost:5000/book/view-book-rental-details/${id}`).then((response)=>{
			console.log("rentdata====>",response.data.data.length);
			setRent(response.data.data.length)
		}).catch(err=>{
      console.log(err);
    })
    },[])

    const viewOrder=(id,bookid)=>{
      console.log(id,bookid);
    }
  return (
    <div>
  <form className="bg0 p-t-75 p-b-85">
    <div className="container">
      <div className="row">
        {arr&&arr.map(item=>(
          <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
          <div className="bor20 p-lr-40 p-t-30 p-b-40 m-l--100 m-r--100 m-lr-0-xl p-lr-15-sm">
          <div className="flex-w flex-t  p-b-13">
           <div className="size-208">
            <h4 className="mtext-109 cl2 p-b-30">
              {item.title}
              <br/>
              <br/>
              <img src={`/upload/${item.image}`}/>
            </h4>
            <div className="flex-w flex-t bor12 p-b-13">
              <div className="size-208">
                <span className="stext-110 cl2">
                  Price:
                </span>
              </div>
              <div className="size-209">
                <span className="mtext-110 cl2">
                  {item.price}
                </span>
              </div>
            </div>
            <div className="flex-w flex-t  p-b-13">
              <div className="size-208">
                <span className="stext-110 cl2">
                  Author
                </span>
              </div>
              <div className="size-209">
              <p className="stext-111 cl6 p-t-2">
              {item.author}
                </p>
              </div>
            </div>
            </div>
          
            <div className="size-209" style={{paddingLeft:"15px"}}>
              
            <div className="flex-w flex-t bor12 p-b-13 p-t-50">
              <div className="size-220">
                <span className="mtext-101 cl5">
                Book Ordered  Details
                </span>
              </div>
              
            </div>
          
            {book&&book.map(data=>(<>
           <>
            
            {/* console.log(item) */}
              {data.bookdata.book_id===props.bookId?
              <>   <div className="flex-w flex-t bor12 p-t-15 p-b-7">
              <div className="size-208 w-full-ssm">
                <span className="stext-110 cl2">
                  User Name:
                  <br/>
                  No Of Books:
                  <br/>
                  Delivery Status:
                </span>
              </div>
              <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">                
                <div className="p-t-0">
                  <span className="stext-105 cl10">
                  {data?.userData?.username}
                  <br/>
                  {data?.bookdata.qty}
                  <br/>
                  {data?.orderstatus}
                  </span>
                 
                </div>
              </div>
            </div></>
            :<></>}
            
            
            
            </>
            

           
            </>))}
            <div className="flex-w flex-t  p-t-15 p-b-30">
              <div className="size-208 w-full-ssm">
                <span className="stext-110 cl2">
                  Rental Details:
                </span>
              </div>
              
                <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">                
                <div className="p-t-0">
                  <span className="stext-301 cl10">
                    {rent===null?<>No Data Found</>:<>  {rent} book Rented</>}
                   
                  </span>
                </div>
              </div>
     
              
            </div>

            
            
            
           
          </div>
          </div>
            </div>
        </div>
        ))}
      
      </div>
    </div>
  </form>
</div>

  )
}