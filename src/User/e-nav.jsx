import React from "react"
import { Link, Outlet } from "react-router-dom"
import l1 from "../Assects/logo.jpg"
import './nav.css'



function EntNav() {
    return(
        <div>
            <header>
                <nav className="navbar">
                    <div className="nav-contents">
                    <img src={l1} style={{width:"100px", height:"63px"}}/>
                        <p>Find Lawyer</p>
                        <p>Legal Advice</p>
                        <Link to={"/"}><p>Logout</p></Link>
                        <Link to={""}><button className="btn">My Profile</button></Link>
                    </div>
                    
                </nav>
                <Outlet/>
            </header>
            
        </div>
    )
}
export default EntNav