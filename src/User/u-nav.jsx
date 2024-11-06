import React from "react"
import { Link, Outlet } from "react-router-dom"
import './nav.css'



function Nav() {
    return(
        <div>
            <header>
                <nav className="navbar">
                    <div className="nav-contents">
                        <p>Logo</p>
                        <p><span><box-icon name='file-find' type='solid' animation='tada' ></box-icon></span>Find Lawyer</p>
                        <p><span><box-icon name='chat' type='solid' animation='tada' ></box-icon></span>Legal Advice</p>
                        <Link to={"lawyerhome"}><p><span><box-icon name='certification' animation='tada' ></box-icon></span>Lawyer Login</p></Link>
                        <Link to={"/reg"}><button className="btn">Login/Register</button></Link>
                    </div>
                    
                </nav>
                <Outlet/>
            </header>
            
        </div>
    )
}
export default Nav