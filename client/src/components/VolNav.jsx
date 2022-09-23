import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom';

export default function VolNav() {
    const navigate=useNavigate()
	const [token,setToken]=useState(localStorage.getItem("token"));
	const [arr, setArr] = useState([])
	const [searchitem,setSearchitem]=useState("")

    const [newdate,setNewdate]=useState("")
    useEffect(() => {
        fetch("http://localhost:5000/order/vol-view-rent-book", {
            method: 'GET',
        })
            .then(res => res.json())
            .then((data) => {
                console.log("Result========", data)
                if (data.success == true) {
                    setArr(data.data.length)
                    console.log(arr);
                    // alert(data.message)
                }
                else {

                    alert(data.message)
                }
            })
      
    }, [token])

	const logout=()=>
	{
		localStorage.clear();
		window.sessionStorage.clear();
		// window.location.reload();
		navigate("/")
	
	}
	const addvalue=(e)=>{
		console.log(e.target.value);
		setSearchitem(e.target.value)
	   console.log(searchitem);
		}
	// window.onunload = () => {
	// 	// Clear the local storage
	// 	window.localStorage.clear()
	// 	}
  return (
    < >
    <header className="header-v4">
            {/* <!-- Header desktop --> */}
            <div className="container-menu-desktop">
                
    
                <div className="wrap-menu-desktop how-shadow1" style={{top:"0px"}}>
                    <nav className="limiter-menu-desktop container">
                        
                        {/* <!-- Logo desktop -->		 */}
                        <a href="/volunteerDashboard" className="logo">
                            <img src="/assets/images/icons/logo-01.png" alt="IMG-LOGO"/>
                        </a>
    
                        {/* <!-- Menu desktop --> */}
                        {/* <div className="menu-desktop">
                            <ul className="main-menu">
                                <li>
                                    <a href="/">Home</a>
                                    <ul className="sub-menu">
                                        <li><a href="/">Homepage </a></li>
                                    </ul>
                                </li>
                                
                                <li>{!token?null:<a href='/addBook'>Add Book</a>}</li>
    
    
                                <li className="label1" data-label1="hot">
                                    <a href="#">Features</a>
                                </li>
    
                                <li>
                                    <a href="/register">Register</a>
                                </li>
    
                                <li>
                                    {!token?null:<a href='/userViewBook'>Added Books</a>}
                                </li>
    
                                <li>
                                    {!token?<a href="/login">login</a>:<a onClick={logout}>Logout</a>}
                                </li>
                                
                            </ul>
                        </div>	 */}
    
                        {/* <!-- Icon header --> */}
                        <div className="wrap-icon-header flex-w flex-r-m">
                            <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                <i className="zmdi zmdi-search"></i>
                            </div>
                            
                            <a href="/volunteerViewRequest" className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti " data-notify={!arr?0:arr}>
                            
                                <i className="zmdi zmdi-notifications-active" style={{color:"black"}}></i>
                        
                            </a>

                            <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                            <a onClick={logout}>Logout</a>
                            </div>
                        </div>
                    </nav>
                </div>	
            </div>
    
            {/* <!-- Header Mobile --> */}
            <div className="wrap-header-mobile">
                {/* <!-- Logo moblie -->		 */}
                <div className="logo-mobile">
                    <a href="/volunteerDashboard"><img src="/assets/images/icons/logo-01.png" alt="IMG-LOGO"/></a>
                </div>
    
                {/* <!-- Icon header --> */}
                <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                        <i className="zmdi zmdi-search"></i>
                    </div>
                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                    <a onClick={logout}>Logout</a>
                    </div>
                    <div href="/volunteerViewRequest" className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
                        <i className="zmdi zmdi-notifications-active"></i>
                    </div>
                  
                </div>
    
                {/* <!-- Button show menu --> */}
                {/* <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </div> */}
            </div>
            
            {/* <!-- Menu Mobile --> */}
            {/* <div className="menu-mobile">
                
    
                <ul className="main-menu-m">
                    <li>
                        <a href="/volNav">Home</a>
                        <ul className="sub-menu-m">
                            
                            
                        </ul>
                        <span className="arrow-main-menu-m">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                    </li>
    
                    <li><a href="addBook">Add Book</a></li>
    
                    <li>
                        <a href="#" className="label1 rs1" data-label1="hot">Features</a>
                    </li>
    
                    <li>
                        <a href="#">Blog</a>
                    </li>
    
                    <li>
                        <a href="#">About</a>
                    </li>
    
                </ul>
            </div> */}
    
            {/* <!-- Modal Search --> */}
            <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search" id='exampleModalCenter'>
                <div className="container-search-header">
                    <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
                        <img src="/assets/images/icons/icon-close2.png" alt="CLOSE"/>
                    </button>
    
                    <form className="wrap-search-header flex-w p-l-15">
                        <button className="flex-c-m trans-04"  >
                            <i className="zmdi zmdi-search"></i>
                        </button>
                        <input className="plh3" type="text" name="search" placeholder="Search..." onChange={addvalue} value={searchitem}/>
                    </form>
                </div>
            </div>
        </header>
    
    
      
            
        
            
      </>  )
}
