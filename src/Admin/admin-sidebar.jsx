import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./sidebar.css";



function Sidebar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        
        sessionStorage.removeItem("isAdmin");
    
        navigate("/login");
      };

    return(
        <div className="si-fl">
        <div className="side-bar"> 
            <div className="side-bar-con">
           <Link to={"userdetail"}><p><span><box-icon type='solid' name='user-circle'></box-icon></span>User Details</p></Link> 
            
           <Link to={"toprated"} ><p><span><box-icon type='solid' name='check-shield'></box-icon></span>Top Rated Lawyers</p></Link>
        <button className="btn-1" onClick={handleLogout}><span><box-icon name='log-out-circle'></box-icon></span>Logout</button>
            </div>
           
            
            
            
        </div>
        <div >
           <Outlet/>
            
            </div>
        </div>
        
    )
}

export default Sidebar