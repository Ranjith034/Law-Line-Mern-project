import React from "react"
import { Link, Outlet } from "react-router-dom"
import l1 from "../Assects/logo.jpg"
import './nav.css'
import TopNav from "./topnav"



function Nav() {
    return(
        <div>
            <header>
                <TopNav/>
                <nav className="navbar">
                    <div className="nav-contents">
                    <img src={l1} style={{width:"100px", height:"63px"}}/>
                        <p>Home</p>
                        <p>Legal Advice</p>
                        <p>About Us</p>
                        <Link to={"/reg"}><button className="btn">Login/Register</button></Link>
                    </div>

                </nav>
                <Outlet/>
            </header>
            
        </div>
    )
}
export default Nav