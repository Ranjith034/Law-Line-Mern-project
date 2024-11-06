import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './enter.css'

function Lawyerenter() {

    let {userId} = useParams()

    console.log("userid",userId)

    const [lawyer , setlawyer] = useState([])

    const lawyerid = async () => {
       await axios
       .get(`http://localhost:7000/lawyeruid?userId=${userId}`)
       .then((res) => {
        console.log(res.data)
        setlawyer(res.data)
       })
       .catch((err)=> {
        console.log(`${err}`)
       })
    }
useEffect(() => {
    lawyerid()
},[])

    return(
        <div className="enter-out">
          <div>
           <h1>Welcome <span className="name">{lawyer.name}</span></h1> 
           <div className="enter-in">
           <p>Your Access</p>
           <p></p>
           </div>
           </div>
           <div>
           <div className="card6">
      <div className="card6__img">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%">
          <rect fill="#ffffff" width="540" height="450"></rect>
          <defs>
            <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100%" gradientTransform="rotate(222,648,379)">
              <stop offset="0" stopColor="#ffffff"></stop>
              <stop offset="1" stopColor="#FC726E"></stop>
            </linearGradient>
            <pattern patternUnits="userSpaceOnUse" id="b" width="300" height="250" x="0" y="0" viewBox="0 0 1080 900">
              <g fillOpacity="0.5">
                {/* Polygon shapes here */}
                {/* Example of one shape */}
                <polygon fill="#444" points="90 150 0 300 180 300"></polygon>
                {/* Add other polygon shapes as in your SVG */}
              </g>
            </pattern>
          </defs>
          <rect x="0" y="0" fill="url(#a)" width="100%" height="100%"></rect>
          <rect x="0" y="0" fill="url(#b)" width="100%" height="100%"></rect>
        </svg>
      </div>
      
      <div className="card6__avatar">
        <img src={`http://localhost:7000/static/${lawyer.originalname}`} style={{ maxWidth: '80px', maxHeight: '80px'  }}/>
      </div>

      <div className="card6__title">{lawyer.name}</div>
      <div className="card6__subtitle">{lawyer.age}</div>
      <div className="card6__subtitle"><p>Lawyer</p></div>
      {/* <div className="card6__wrapper">
        <button className="card6__btn">Button</button>
        <button className="card6__btn card6__btn-solid">Button</button>
      </div> */}
    </div>
           

           </div>
          
        </div>
    )
}

export default Lawyerenter