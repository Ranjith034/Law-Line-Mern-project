import axios from "axios"
import 'boxicons'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import Swal from 'sweetalert2'
import Footer from "./footer"
import "./u-reg.css"



function Login() {

  const navigate = useNavigate()

    let initialstate = {
        name:"",
        password:""
       

    }

    const [form ,setform] = useState(initialstate)
    

    const submit = (e) => {
      e.preventDefault();
      const adminName = process.env.REACT_APP_ADMIN_NAME;
      const adminPassword = "1234";
  
     
      if (form.name === adminName && form.password === adminPassword) {
        sessionStorage.setItem("isAdmin", "true");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        return navigate("/admin"); 
     }
   
     
     axios
     .post("https://law-line-backend-1.onrender.com/log", form)
     .then((res) => {
      if(res){
        console.log(res.data)
        const userId = res.data
        // toast("Wow so easy!");
        // localStorage.setItem('token',res.data.token)
       

        setform(initialstate)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/userenter/${userId}`)
      }
        
       
        // if(res.data){
            

        // }
     })
     .catch((err) => {
        console.log(`${err}`)
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: err.response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
     })

    }


    

    return(
      
      <>
       <div className="reg-out">
        {/* <div className="reg-img">
          <img src={g6}/>
        </div> */}
        
        <div className="reg-inn">
        <p className="headings">Login</p>
        <div className="red-container">
            <form onSubmit={submit}> 
                <p>
               
                <input placeholder="name" value={form.name} onChange={(e) => setform({...form ,name: e.target.value})}/>
                </p>
                <p>
                
                <input placeholder="password"type="password" value={form.password} onChange={(e) => setform({...form ,password: e.target.value})}/>
                </p><br></br>
                
                <button onClick={submit} className="btnss">
          <span class="fold"></span>

<div class="points_wrapper">
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
  <i class="point"></i>
</div>

<span class="inner"
  ><svg
    class="icon"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2.5"
  >
    <polyline
      points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"
    ></polyline></svg>Login</span>
            
          </button>

          <Link to={"/reg"}><p className="bot">Go to Register</p></Link>
            </form>
            </div>
        </div>
        
       </div>
       <Footer/>
       </>
      
    )

}

export default Login