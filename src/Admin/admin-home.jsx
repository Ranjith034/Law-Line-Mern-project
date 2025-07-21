import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import g2 from "../Assects/Data Maintenance.png"
import '../Lawyer/lawyerhome.css'
import Lawprofile from "../Lawyer/lawyerprofile"
import Footer from "../User/footer"


function AdminHome() {

    const navigate = useNavigate()


  useEffect(() => {
    const isAdmin = sessionStorage.getItem("isAdmin") === "true";
    if (!isAdmin) {
      navigate("/login");
    }
  }, [navigate]);

    return(
        <div>
            <div className="left">
           
           
           
        

       <div className="limg">
        <img src={g2}/>

       
        </div>
        <div className="l-c">
           <p><h1>Welcome <span className="col">Admin</span><br></br> Get Your Clients !</h1>
            <Lawprofile/></p> 
            
           </div>
        </div>
        <div className="foot">
            <Footer/>
            </div>
        </div>
    )
}

export default AdminHome