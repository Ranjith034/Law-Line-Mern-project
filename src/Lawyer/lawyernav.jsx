import React from "react"
import { Link, Outlet } from "react-router-dom"
import l1 from "../Assects/logo.jpg"
import '../User/nav.css'



function LawyerNav() {
    return(
        <div>
            <header>
                <nav className="navbar">
                    <div className="nav-contents">
                    <img src={l1} style={{width:"100px", height:"63px"}}/>
                        <Link to = {""}><p>Lawyer</p></Link>
                        <Link to = {"lawyerreg"}><p>Register</p></Link>
                        <Link to = {"lawyerlog"}><p>Login</p></Link>
                        <Link to = {"/lawyerhome"}><button className="btn">Logout</button></Link>
                    </div>
                    
                </nav>
                <Outlet/>
            </header>

            
        </div>
    )
}
export default LawyerNav