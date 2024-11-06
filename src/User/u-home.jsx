// 

import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import c1 from '../Assects/c1.png';
import c3 from '../Assects/c4.png';
import test1 from '../Assects/test1.png';
import Add from "./add-comp";
import './home.css';
import Lawyercard from "./lawyercard";



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
        .get("http://localhost:7000/getverflawer")
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
            {/* <div className="down-add">
                            {datas.map(value => (
                                
                                <div  className="fetch-h">
                                     <div className="image-con">
                        <img src={`http://localhost:7000/static/${value.originalname}`} />
                    </div>
                                <p><span>Lawyer Name</span> :<span> </span>{value.name}</p>
                                <p><span>Lawyer Age</span> :<span> </span>{value.age}</p>
                                <p><span>Lawyer Work Experience</span> :<span> </span>{value.exp}</p>
                                <p><span>Lawyer Location</span>: <span> </span>{value.location}</p>
                                <p><Ratings num={value.ratings} /></p>
                                </div>
                            ))}
                        </div> */}
                        {/* <div className="down-add">
                       
                        <div class="container1">
                         <div class="card_box1">
                         <span>
                            <p>Experienced Attorneys</p>
                         </span>
                         </div>
                        </div>
                        
                        <div class="container1">
                         <div class="card_box1">
                         <span className="text-c">
                            <p>Personalized Approach</p>
                            </span>
                         </div>
                        </div>
                        
                        <div class="container1">
                         <div class="card_box1">
                         <span className="text-c">
                            <p>Clear Communication</p>
                            </span>
                         </div>
                        </div>
                        
                        <div class="container1">
                         <div class="card_box1">
                         <span className="text-c">
                            <p>Proven Results</p>
                         </span>
                         </div>
                        </div>
                       
                        </div> */}
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
                            <div className="c1-img">
                                <img src={c3}/>
                            </div>
                            </div>
                            <div className="c2-card">
                                <div className="le">
                                <p>Clear Communication
                                </p>
                                </div>
                            <div className="c-img">
                                <img src={c1}/>
                            </div>
                            </div>
                            <div className="c3-card">
                                <div className="le">
                                <p>Proven Results
                                </p>
                                </div>
                            <div className="c-img">
                                <img src={c1}/>
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
            
            <img src={`http://localhost:7000/static/${value.originalname}`} style={{ maxWidth: '90px', maxHeight: '90px' }}/>
             </div>
            
            <span>{value.name}</span>
            
            <p class="job"> {value.location}</p>
            <p class="job"> {value.age}</p>
            <p class="job">Senior Lawyer</p>
            <button onClick={click}> Click
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
            <div className="fig">
                <img src={test1}/>
            </div>
            <div className="down-add">
            <div className="down-add">
                <div className="upper">
                <Lawyercard/>
                </div>
            </div>
 <div className="logos">         
<div id="triangle">
  <svg id="Layer_1" data-name="Layer 1" version="1.1" viewBox="0 0 2000 2000">
    <polygon
      class="cls-1"
      points="928 781 1021 951 784.5 1371.97 1618 1371.97 1530.32 1544 509 1539 928 781"
    ></polygon>
    <polygon
      class="cls-3"
      points="1618 1371.97 784.5 1371.97 874.93 1211 1346 1211 923.1 456 1110.06 456 1618 1371.97"
    ></polygon>
    <g id="Layer_2" data-name="Layer 2">
      <polygon
        class="cls-2"
        points="418 1372.74 509 1539 928 781 1162.32 1211 1346 1211 923.1 456 418 1372.74"
      ></polygon>
    </g>
  </svg>
</div>
<div className="l-name">
    <h1>Find Lawyer</h1>
    <p className="">"Find the Right Lawyer, Right When You Need Them."</p>
</div>
</div>  


            </div>


        </>
    );
}

export default UserHome;
