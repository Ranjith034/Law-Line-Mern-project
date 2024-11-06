import React from "react"
import { Outlet } from "react-router-dom"
import './adminnav.css'



function AdminNav() {
    return(
        <div>
            <header>
                <nav className="navbar">
                    <div className="nav-contents">
                        <p>Logo</p>
                        <p><span><box-icon name='file-find' type='solid' animation='tada' ></box-icon></span>Lawyer</p>
                        <p><span><box-icon name='chat' type='solid' animation='tada' ></box-icon></span>Verified</p>
                        <p><span><box-icon name='certification' animation='tada' ></box-icon></span>IPC Sections</p>
                        <button className="btn">My Profile</button>
                    </div>
                    
                </nav>
                <Outlet/>
            </header>
            
        </div>
    )
}
export default AdminNav