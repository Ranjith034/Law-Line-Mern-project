import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import b3 from "../Assects/Advertising 5.png";
import b1 from "../Assects/Consulting.png";
import b2 from "../Assects/User Group.png";
import "./u-enter.css";

function Userenter() {

   const navigate = useNavigate()

   const [inputValue, setInputValue] = useState("");

    let { userId } = useParams();
    let [user, setUser] = useState([]);
    let [lawyer, setLawyer] = useState([]);
    
    const [activeComponent, setActiveComponent] = useState("ComponentA");

    const showComponent = (component) => {
        setActiveComponent(component);
    };

    const gather = async () => {
        try {
            const userRes = await axios.get(`https://law-line-backend-1.onrender.com/user?userId=${userId}`);
            setUser(userRes.data);
           
            
          
      
            

           

            
            const lawyerRes = await axios.get("http://localhost:7000/topget");
            setLawyer(lawyerRes.data);
        } catch (err) {
            console.error(err);
        }
    };

    localStorage.setItem("storedValue", (user.userId));
    // alert((user.userId));

    useEffect(() => {
        gather();
    }, []);

    return (
        <div className="wlc-u">
            <div className="wlc-left">
            <div className="box-2">
                <div className="card_container12">
                    <div className="card_hover12">
                        
                    </div>
                    
                    <div className="card12">
                        <div className="say-hi">
                            {/* SVG code */}
                        </div>
                        <div className="title12">
                            <span>Hi, {user.name}</span>
                        </div>
                        <div className="paragraph12">
                            
                        </div>
                    </div>
                    <div>
                   
                    </div>
                    
                    


                
                 </div> 
                 <div className="box2-1">
                    
                 
                 </div>
                 </div>
                 <div>

                    </div> 
                 
                 <div className="tools0">
                        <div className="tools1">
                            <button onClick={() => showComponent("ComponentA")}>Public Profile<span><box-icon name='user-circle' type='solid' ></box-icon></span></button>
                            <button onClick={() => showComponent("ComponentB")}>My Appoinments<span><box-icon name='cog' type='solid' ></box-icon></span></button>
                            <button onClick={() => showComponent("ComponentC")}>Following<span><box-icon type='solid' name='right-arrow-circle'></box-icon></span></button>
                            <button onClick={() => showComponent("ComponentD")}>Notifications<span><box-icon name='bell' type='solid' ></box-icon></span></button>
                        </div>
                    </div>

                    
                    <div className="component-container">
                        {activeComponent === "ComponentA" && <ComponentA />}
                        {activeComponent === "ComponentB" && <ComponentB />}
                        {activeComponent === "ComponentC" && <ComponentC />}
                        {activeComponent === "ComponentD" && <ComponentD />}
                    </div>
                 
            </div>
            
               

            <div>
                <div className="card20">
                    <div className="loader20">
                        <p>Make</p>
                        <div className="words20">
                            <span className="word20">Follow</span>
                            <span className="word20">Chat</span>
                            <span className="word20">Advice</span>
                            <span className="word20">Link</span>
                            <span className="word20">Appointment</span>
                        </div>
                    </div>
                </div>

                <div className="scroll-snap-card">
                    <div className="card11">
                        <p className="title1">Who to follow</p>
                        {lawyer.map((value) => (
                            <div className="user__container1" key={value.id}>
                                <div className="user1">
                                    <div className="image1">
                                        <img src={`http://localhost:7000/static/${value.originalname}`} alt="Lawyer" />
                                    </div>
                                    <div className="user__content1">
                                        <div className="text1">
                                            <span className="name1">{value.name}</span>
                                            <p className="username1">{value.lawtype}</p>
                                        </div>
                                        <button className="follow1" onClick={() => navigate(`/userenter/${userId}/${value._id}`) }>Follow</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ComponentA() {

    let navigate = useNavigate()

    let { userId } = useParams();
    let [user, setUser] = useState([]);
     const gather = async () => {
        try {
            const userRes = await axios.get(`http://localhost:7000/user?userId=${userId}`);
            setUser(userRes.data);
           
            
          
      
            

           

            
           
        } catch (err) {
            console.error(err);
        }
    };

   
    useEffect(() => {
        gather();
    }, []);

    return (
       
       <>
         <div className="box-pro">
      
      <img src={`http://localhost:7000/static/${user.originalname}`} style={{width:'100px', height:"100px"}}/  >
      <p>Name : { user.name}</p>
      <p>Age : { user.age}</p>
      <button className="divpro" onClick={() => navigate(`/useredite/${user._id}`)} >Edite Profile</button>
      
      </div> 
      
      <div className="line">
      <div className="wide">
        
        <img src={b2} style={{width:"150px",height:"150px"}}/>
      </div>
       
        
      </div>
      <div>
      

      </div>
      
   
    
   
</>
   
    )}

function ComponentB() {

    
let navigate = useNavigate();
let { userId } = useParams();
let [user, setUser] = useState([]);
let [appoin, setAppoin] = useState([]);

const gather = async () => {
  try {
    // First fetch user data
    const userRes = await axios.get(`http://localhost:7000/user?userId=${userId}`);
    setUser(userRes.data);

    // Then fetch appointments based on user data
    const appoinRes = await axios.post("http://localhost:7000/findapp", userRes.data);
    setAppoin(appoinRes.data);
    console.log(appoinRes.data);
  } catch (err) {
    console.error(err);
  }
};

         const clicked = async (val) => {
          await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to cancel Appointment!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
          }).then((result) => {
            if (result.isConfirmed) {
               axios
               .delete(`http://localhost:7000/deleteapp?_id=${val}`)
              .then((res)=>{
                Swal.fire({
                title: "Cancled!",
                text: "Your appointment has been cancled.",
                icon: "success"
              });
            })
            }
          });
            
          }


useEffect(() => {
  gather();
}, []);

    return(
    <div className="comb">
        <div className="scroll-snap-cardll">
      {appoin.map(value => (
  <div className="space-ll">
<div class="card70">
  
  <div class="textBox70">
    <div class="textContent70">
      <div className="trap">
      <p class="h1701">Appointment</p>
      <span class="span701">{value.ondate}</span>
      <button className="cancel-app" onClick={ () => clicked(value._id)}><box-icon name='calendar-x'></box-icon></button>
      </div>
      
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

function ComponentC() {

  const navigate = useNavigate()

   const { userId } = useParams()

   const [following, setfollowing] = useState([])

   const gf = async () =>{
    
    await axios
    .get(`http://localhost:7000/getfol?userdet=${userId}`)
    .then((res)=>{
      console.log(res.data)
      setfollowing(res.data)
    })
    .catch((err)=>{
      console.log(`${err}`)
    })
   }

   useEffect(()=>{
    gf()
   },[])
   
  console.log(following)


    return(
      <div className="whole">
    <div className="foll-out">
        
        <div className="fol-car">
        {following.map(values =>(
        <div className="foll-img">
        <img src={`http://localhost:7000/static/${values.originalname}`} style={{width:"100px",height:"100px"}}/>
        <p>{values.name}</p>
        
        </div>
      

      ))}
        </div>
        </div>
        </div> 
    )
}

function ComponentD() {
    return (
    <div>
     
     <div className="wide">
     <p> No Notifications</p>
        
        <img src={b3} style={{width:"200px",height:"200px"}}/>
      </div>
     <div>
     
      
     </div>
      </div>
    )
}

export default Userenter;
