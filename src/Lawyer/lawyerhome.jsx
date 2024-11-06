import React from "react"
import g2 from '../Assects/Group 2.png'
import r1 from '../Assects/Group 3.png'
import g8 from "../Assects/Group 8.png"
import './lawyerhome.css'
import Lawprofile from "./lawyerprofile"


function Lawyerhome() {
    return(
        <div>
            
        <div className="left">
           <div className="l-c">
            <h1>Welcome <span className="col">Lawyer</span><br></br> Get Your Clients !</h1>
            
           </div>
           <div className="l-c">
           <Lawprofile/>
           </div>
           
        

       <div className="limg">
        <img src={g2}/>

       
        </div>
        </div>
        <div className="left-y">
        <div className="limg">
            <img src={g8}  />
            </div>
           

        </div>
        
        <div className="left-y">
        <div className="limg">
        
            <img src={r1}/>
            
            </div>
        </div>
        </div>
    )
}

export default Lawyerhome