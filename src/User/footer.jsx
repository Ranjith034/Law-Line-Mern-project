import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assects/logo.jpg";
import './footer.css';


function Footer() {
return(
    <footer className="footer">
         <div className="foot-out">
            <div className="foot-inn">
                <img src={logo} style={{width:"180px", height:"100px"}}/>
                <h2>Connect With Us</h2>
                <p>Stay updated with our latest insights and legal tips:</p>
                <p><box-icon type='logo' name='instagram-alt'></box-icon>
                <box-icon name='facebook-circle' type='logo' ></box-icon>
                <box-icon type='logo' name='youtube'></box-icon>
                </p>
            </div>
            <div>
                <h2>Contact Us</h2>
                <p> Office Address: Chennai</p>
                <p> Phone: 1289451245</p>
                <p> Email: lawline@gmail.com</p>
            </div>

            <div>
                <h2>Quick Links</h2>
                <Link to={"/"}><p>Home</p></Link>
                <Link><p>Lawyer Login</p></Link>
                <p>Ipc Sections</p>
                <p>Login</p>
            </div>

         </div>
         <div className="fot-fot">
            <h3>© 2024 Law Line. All Rights Reserved.</h3>
         </div>
        </footer>
)
}
export default Footer; 