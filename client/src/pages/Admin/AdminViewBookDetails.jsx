import React from 'react'
import AdminNav from '../../components/AdminNav'
import AdminSidebar from '../../components/AdminSidebar'
import ViewBookDetails from '../../components/ViewBookDetails'
import { useParams } from 'react-router-dom';

export default function AdminViewBookDetails() {
    const {id}=useParams()
    console.log(id);
  return (
    <div className="app sidebar-mini">
    <AdminNav/>
    <div className="adminapp-sidebar__overlay" data-toggle="sidebar"></div>
    <AdminSidebar/>
    <main className="app-content">

    <ViewBookDetails bookId={id}/>
        </main>
    </div>
  )
}
