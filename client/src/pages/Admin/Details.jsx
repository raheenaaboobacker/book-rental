import React from 'react'
import { useParams } from 'react-router-dom';
import AdminNav from '../../components/AdminNav';
import AdminSidebar from '../../components/AdminSidebar';
import ViewBookDetails from '../../components/ViewBookDetails';

export default function Details() {
    const {id}=useParams()
    console.log(id);
  return (
    <div>
<AdminNav/>
<AdminSidebar/>
<ViewBookDetails bookId={id}/>

    </div>
  )
}
