import React from "react"
import { Link } from "react-router-dom"
import "./topnav.css"


function TopNav() {

    return(
       <div className="top-nav-o">
        <p>lawline@gmail.com</p>
        <Link to={"lawyerhome/lawyerlog"}><p>Lawyer Signup</p></Link>
       </div>
    )
}

export default TopNav
