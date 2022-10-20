import React from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import PublisherNav from '../../components/PublisherNav';
import ViewBookDetails from '../../components/ViewBookDetails';

export default function PViewBookDetails() {
    const {id}=useParams()
    console.log(id);
  return (
    <div>
        <PublisherNav/>
        <ViewBookDetails bookId={id}/>
        <Footer/>
    </div>
  )
}