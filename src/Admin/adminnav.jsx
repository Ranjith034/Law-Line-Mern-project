import React from "react"
import { Link, Outlet } from "react-router-dom"
import l1 from "../Assects/logo.jpg"
import './adminnav.css'



function AdminNav() {
    return(
        <div>
            <header>
                <nav className="navbar">
                    <div className="nav-contents">
                    <img src={l1} style={{width:"100px", height:"63px"}}/>
                       <Link to={"admin/lawyer"}><p>Lawyer</p></Link> 
                        <Link to={"admin/verifylaw"}><p>Verified</p></Link>
                        <p>IPC Sections</p>
                        <button className="btn">My Profile</button>
                    </div>
                    
                </nav>
                <Outlet/>
            </header>
            
        </div>
    )
}
export default AdminNav