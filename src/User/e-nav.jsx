import React from "react"
import { Link, Outlet } from "react-router-dom"
import './nav.css'



function EntNav() {
    return(
        <div>
            <header>
                <nav className="navbar">
                    <div className="nav-contents">
                        <p>Logo</p>
                        <p><span><box-icon name='file-find' type='solid' animation='tada' ></box-icon></span>Find Lawyer</p>
                        <p><span><box-icon name='chat' type='solid' animation='tada' ></box-icon></span>Legal Advice</p>
                        <p><span><box-icon name='certification' animation='tada' ></box-icon></span>IPC Sections</p>
                        <Link to={""}><button className="btn">My Profile</button></Link>
                    </div>
                    
                </nav>
                <Outlet/>
            </header>
            
        </div>
    )
}
export default EntNav