import React from "react"
import g2 from '../Assects/Lawyer.png'
import Footer from "../User/footer"
import './lawyerhome.css'
import Lawprofile from "./lawyerprofile"


function Lawyerhome() {
    return(
        <div>
            
        <div className="left">
           <div className="l-c">
           <p><h1>Welcome <span className="col">Lawyer</span><br></br> Get Your Clients !</h1>
            <Lawprofile/></p> 
            
           </div>
          
        

       <div className="limg">
        <img src={g2}/>

       
        </div>
        </div>
        <Footer/>
       
        </div>
    )
}

export default Lawyerhome