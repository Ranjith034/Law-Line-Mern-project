// 

import axios from "axios";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import c5 from "../Assects/Advertising 5.png";
import c3 from '../Assects/Approval 3.png';
import c1 from '../Assects/Lawyer (1).png';
import c4 from "../Assects/World Connection 1.png";
import Add from "./add-comp";
import Footer from "./footer";
import './home.css';



function UserHome() {

     let [datas ,setdatas] = useState([])

    // const getHomePage = async () => {
    //     const token = localStorage.getItem('token');
    //     console.log("Token from localStorage:", token);
     
    //     try {
    //         const response = await axios
    //         .get("http://localhost:7000/home", {
    //             headers: { Authorization: `Bearer ${token}` }
    //         });
    //         console.log("Home Page Data:", response.data); 
    //     } catch (error) {
    //         console.error("Error fetching home page data:", error);
    //         alert("Failed to fetch home page data. Please check your login status.");
    //     }
    // };

       const getlawyers = async (req,res) => {
        await axios
        .get("https://law-line-backend-1.onrender.com/getverflawer")
        .then((res) => {
             console.log(res.data)
            setdatas(res.data)
            
        })
        .catch((err) => {
            console.log(`${err}`)
        })

       }
       const Ratings = ({ num }) => {
        const stars = [];
      
        for (let i = 0; i < num; i++) {
          stars.push(
            <span key={i}>
              <box-icon name='star' type='solid' animation='tada' color='#ffec00' ></box-icon>
            </span>
          );
        }
        console.log(stars)
        return <div>{stars}</div>;
      };

      const click = ()=> {
        Swal.fire({
            title: "Login Please",
            text: "That thing is still around?",
            icon: "question"
          });
      }

    useEffect(() => {
        getlawyers();
    }, []);

    return (
        <>
            <div className="head-add">
                <div>
                    <Add />
                    <div className="solo">
                        <p>Why Choose Us?</p>
                    </div>
                    <div >
                        
                    </div>
                </div>

            </div>
            
                        <div className="down-add">
                       
                            <div className="c-card">
                                <div className="le">
                                <p>Free Legal Advice Online
                                </p>
                                </div>
                            <div className="c-img">
                                <img src={c1}/>
                            </div>
                            </div>
                            <div className="c1-card">
                                <div className="le">
                                <p>Personalized Approach
                                </p>
                                </div>
                            <div className="c-img">
                                <img src={c3}/>
                            </div>
                            </div>
                            <div className="c2-card">
                                <div className="le">
                                <p>Clear Communication
                                </p>
                                </div>
                            <div className="c-img">
                                <img src={c4}/>
                            </div>
                            </div>
                            <div className="c3-card">
                                <div className="le">
                                <p>Proven Results
                                </p>
                                </div>
                            <div className="c-img">
                                <img src={c5}/>
                            </div>
                            </div>
            </div>
            <div className="solo">
                        <p>Top Rated Lawyers</p>
                    </div>

            <div className="down-add">
           
            {datas.map(value => (  
            <div class="card10">
            
             <div class="card10-border-top">
             </div>
            
            
           
            
                       
            <div class="img">
            
            <img src={`https://law-line-backend-1.onrender.com/static/${value.originalname}`} style={{ maxWidth: '370px', maxHeight: '160px' }}/>
             </div>
            
            <span>{value.name}</span>
            
            <p class="job"> {value.location}</p>
            <p class="job"> {value.exp}</p>
            <p class="job"> {value.lawtype}</p>
            <button onClick={click}> View
            </button>
           
            
              </div>
              ))}
            
            </div>
            <div className="c-h">
                <h2>Our Practice Areas</h2>
               
                
            </div>
            <div className="down-add">
            <div className="issue">
                <div className="align">
                <p className="h-c-c">Family Law <span><box-icon name='male-female' color='white'></box-icon></span></p>
                </div>
                <p>From divorce and child custody to adoption and support agreements, we provide compassionate and experienced representation in all family matters.</p>

            </div>
            <div className="issue">
                <div className="align">
                <p className="h-c-c">Business Law <span><box-icon type='solid'  color='white' name='business'></box-icon></span></p>
                </div>
                <p>For businesses of all sizes, we offer support in areas such as contract law, employment issues, and regulatory compliance.</p>

            </div>
           
            <div className="issue">
                <div className="align">
                <p>Criminal Defense<span><box-icon name='face-mask' type='solid' color='#ffffff' ></box-icon></span></p>
                </div>
                <p>Protecting your rights is our top priority. We defend clients facing misdemeanor and felony charges with thorough preparation and strategic advocacy.</p>

            </div>
            </div>
            <div className="down-add">
            <div>
                <h1>10000+ <span><box-icon name='happy' color='#010101' ></box-icon></span></h1>
                <p>Happy Customers</p>
            </div>
            <div>
                <h1>1000+ <span><box-icon name='award'></box-icon></span></h1>
                <p>Professional Lawyers</p>
            </div>
            <div>
                <h1>24/7 <span><box-icon name='phone' color='#010101' ></box-icon></span></h1>
                <p>Customer Service</p>
            </div>
            
            </div>
            <div>
                <div className="findlaw">
                    <button onClick={click}>Find Me a Lawyer</button>
                    <h2>Get Expert Advice</h2>
                    </div>
            </div>
            
            
            <div className="foot">
            <Footer/>
            </div>
           


        </>
    );
}

export default UserHome;
