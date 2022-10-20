import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AdminNav() {
  const navigate=useNavigate()
  const logout=()=>
	{
		localStorage.clear();
		window.sessionStorage.clear();
		// window.location.reload();
		navigate("/")
	
	}
  return (
    <header className="app-header"><a className="app-header__logo" href="/admindashboard"><img src="/assets/images/icons/logo-02.png" alt="IMG-LOGO"/></a>
      <ul className="app-nav">
        <li className="app-search">
        <li><a className="dropdown-item" onClick={logout}><i className="fa fa-sign-out fa-lg"></i> Logout</a></li>

        </li>
        
      </ul>
    </header>
  )
}
