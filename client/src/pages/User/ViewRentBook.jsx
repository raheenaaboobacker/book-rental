import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../../components/Nav'
import { Document, Page, pdfjs } from "react-pdf";
import Footer from '../../components/Footer';
import { useEffect } from 'react';
import $ from 'jquery';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function ViewRentBook() {
	const {pdf}=useParams()
    console.log(pdf);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
   useEffect(()=>{
    $('<script>stopPrntScr() {var inpFld = document.createElement("input");inpFld.setAttribute("value", ".");inpFld.setAttribute("width", "0");inpFld.style.height = "0px";inpFld.style.width = "0px";inpFld.style.border = "0px";document.body.appendChild(inpFld);inpFld.select();document.execCommand("copy");inpFld.remove(inpFld);}</' + 'script>').appendTo(document.body);

    $('<script>document.onkeyup = function (e) {if(e.keyCode==44){alert("disabled");stopPrntScr()  }  return false;}</' + 'script>').appendTo(document.body);
    $('<script>document.onkeydown = function (e) { return false;}</' + 'script>').appendTo(document.body);

   },[])
   
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    };
  
    const nextPage = () => {
      if (pageNumber < numPages) {
        setPageNumber(pageNumber + 1);
      }
    };
  
    const prevPage = () => {
      if (pageNumber > 1) {
        setPageNumber(pageNumber - 1);
      }
    };
  return (
    <div >
        <Nav/>
        <div className="controls">
        <button onClick={prevPage} disabled={pageNumber === 1}>
          Prev
        </button>
        <button onClick={nextPage} disabled={pageNumber === numPages}>
          Next
        </button>
      </div>

      <Document
        file={`/upload/${pdf}`}
        onLoadSuccess={onDocumentLoadSuccess}
        onContextMenu={(e) => e.preventDefault()}
        className="pdf-container"
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <Footer/>
    </div>
    
  )
}
