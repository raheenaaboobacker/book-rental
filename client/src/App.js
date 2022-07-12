import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import AdminDashboard from './pages/Admin/AdminDashboard';
import UserDashboard from './pages/User/UserDashboard';


function App() {
	
  return (
    
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Product/>}/>
				<Route path='/adminDashboard' element={<AdminDashboard/>}/>
				<Route path='/login' element={<Login/>}/>

			</Routes>
		</BrowserRouter>

        
  );
}

export default App;
