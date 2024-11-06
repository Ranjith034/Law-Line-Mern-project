import React from "react"
import { Link, Outlet } from "react-router-dom"
import '../User/nav.css'



function LawyerNav() {
    return(
        <div>
            <header>
                <nav className="navbar">
                    <div className="nav-contents">
                        <p>Logo</p>
                        <Link to = {""}><p><span><box-icon name='file-find' type='solid' animation='tada' ></box-icon></span>Lawyer</p></Link>
                        <Link to = {"lawyerreg"}><p><span><box-icon name='chat' type='solid' animation='tada' ></box-icon></span>Register</p></Link>
                        <Link to = {"lawyerlog"}><p><span><box-icon name='certification' animation='tada' ></box-icon></span>Login</p></Link>
                        <Link to = {"/lawyerlog"}><button className="btn">Logout</button></Link>
                    </div>
                    
                </nav>
                <Outlet/>
            </header>
            
        </div>
    )
}
export default LawyerNav