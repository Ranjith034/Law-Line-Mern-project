import React from "react";
import Swal from 'sweetalert2';
import he from "../Assects/he.png";
import l0 from "../Assects/law.png";
import './addcom.css';


function Add() {
    const  addcon = "Free Legal Advice Online"
    const con2= "From Top Rated Lawyers" 
    const con3 = "Choose from over 10,000 lawyers across 700+ cities in India"

    const view = () => {
      Swal.fire({
        title: "Login Please",
        text: "That thing is still around?",
        icon: "question"
      });
    }
    return(
        <div className="add-out">
          <div className="h-top">
            
            <div className="h-im"> 
              <div className="fit">
              <h2>{addcon}<br></br>{con2}</h2>
              {/* <h2>{con2}</h2> */}
              <div className="rtx">
             <span className="sew"><img src={l0} style={{width:"120px", height:"50px"}}/></span> 
             <p>Top Rated Lawyers</p>
             </div>
              <button className="btnt" onClick={view}>Make Appoinment</button>
              </div> 
              
              </div>
              <div className="h-im">
            <img src={he}/>
            </div>
            
            
            

          </div>
          
            

   
 

        </div>
        
    )
}

export default Add