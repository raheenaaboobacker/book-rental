import React from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import ViewBookDetails from '../../components/ViewBookDetails';

export default function UserViewBookDetails() {
    const {id}=useParams()
    console.log(id);
  return (
    <div>
      <Nav/>
<ViewBookDetails bookId={id}/>
<Footer/>
    </div>
  )
}
