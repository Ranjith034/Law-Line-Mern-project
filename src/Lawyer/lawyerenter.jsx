import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import b1 from "../Assects/Consulting.png";
import s3 from "../Assects/Data Maintenance.png";
import s1 from "../Assects/Lawyer (1).png";
import s2 from "../Assects/World Connection 1.png";
import './enter.css';

function Lawyerenter() {

  const navigate = useNavigate();
  let { userId } = useParams();

  const [lawyer, setLawyer] = useState({});
  const [appoinment, setAppoinment] = useState([]);
  const [activeComponent, setActiveComponent] = useState("ComponentA");

  const showComponent = (component) => {
    setActiveComponent(component);
  };

  const lawyerid = async () => {
    try {
      const lawyerRes = await axios.get(`https://law-line-backend-1.onrender.com/lawyeruid?userId=${userId}`);
      setLawyer(lawyerRes.data);
      
      const appoinmentRes = await axios.get(`https://law-line-backend-1.onrender.com/appoinmentval?lawyerId=${lawyerRes.data._id}`);
      setAppoinment(appoinmentRes.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    lawyerid();
  }, []);

    return(
      <div>
        <div className="enter-out">
          <div className="welcsd">
            <div className="card_container12">
                    <div className="card_hover12">
                        
                    </div>
                    
                    <div className="card12">
                        <div className="say-hi">
                            {/* SVG code */}
                        </div>
                        <div className="title12">
                            <span>Hi, {lawyer.name}</span>
                        </div>
                        <div className="paragraph12">
                            
                        </div>
                    </div>
                    <div>
                   
                    </div>
                    
                    


                
                 </div>
                 <div className="tools0">
                        <div className="tools1">
                            <button onClick={() => showComponent("ComponentA")}>Appointments<span><box-icon name='user-circle' type='solid' ></box-icon></span></button>
                            <button onClick={() => showComponent("ComponentB")}>Account<span><box-icon name='cog' type='solid' ></box-icon></span></button>
                            <button onClick={() => showComponent("ComponentC")}>Followers<span><box-icon type='solid' name='right-arrow-circle'></box-icon></span></button>
                            <button onClick={() => showComponent("ComponentD")}>Notifications<span><box-icon name='bell' type='solid' ></box-icon></span></button>
                        </div>
                    </div>
                    <div className="component-container">
                        {activeComponent === "ComponentA" && <ComponentA appoinment={appoinment} />}
                        {activeComponent === "ComponentB" && <ComponentB />}
                        {activeComponent === "ComponentC" && <ComponentC />}
                        {activeComponent === "ComponentD" && <ComponentD />}
                    </div>
                 </div>
                 
         
          







              
           <div>
            <div>
            
           

           <div className="card6">
      <div className="card6__img">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%">
          <rect fill="#ffffff" width="540" height="450"></rect>
          <defs>
            <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100%" gradientTransform="rotate(222,648,379)">
              <stop offset="0" stopColor="#ffffff"></stop>
              <stop offset="1" stopColor="#00154c"></stop>
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
        <img src={`https://law-line-backend-1.onrender.com/static/${lawyer.originalname}`} style={{ maxWidth: '80px', maxHeight: '80px'  }}/>
      </div>

      <div className="card6__title">{lawyer.name}</div>
      <div className="card6__subtitle">{lawyer.age}</div>
      <div className="card6__subtitle"><p>Lawyer</p></div>
      <div className="card6__wrapper">
        {/* <button className="card6__btn">Button</button> */}
        <button className="but" onClick={() => navigate(`/lawyerhome/lawyeredite/${lawyer._id}`)}>Edit profile</button>
      </div>
    </div>
    </div>
           

           </div>
          
        </div>
        
        </div>
    )
}

function ComponentA({appoinment}){

  return(
    <div  className="alig-box12">
      
    <div className="scroll-snap-cardll">
      {appoinment.map(value => (
  <div className="space-ll">
<div class="card70">
  <div class="img70">
    <img src={`https://law-line-backend-1.onrender.com/${value.originalname}`} style={{width:"50px",height:"50px"}}/>
  </div>
  <div class="textBox70">
    <div class="textContent70">
      <p class="h170">{value.name}</p>
      <span class="span70">{value.ondate}</span>
    </div>
   
  <div>
</div></div></div>
</div> 
      ))}
    </div>
    <div className="pas">
        <p>Your Appoinments</p>
        <img src={b1} style={{width:"200px",height:"200px"}}/>
      </div>
    </div>
  )
}

function ComponentB(){
  return(
    <div>
      <div className="wide">
     <p> No More Accounts</p>
        
        <img src={s1} style={{width:"200px",height:"200px"}}/>
      </div>
    </div>
  )
}

function ComponentC(){
  return(
    <div>
      <div className="wide">
     <p></p>
        
        <img src={s2} style={{width:"200px",height:"200px"}}/>
      </div>
    </div>
  )
}

function ComponentD(){
  return(
    <div>
      <div className="wide">
     <p> No Notifications</p>
        
        <img src={s3} style={{width:"200px",height:"200px"}}/>
      </div>
    </div>
  )
}

export default Lawyerenter







