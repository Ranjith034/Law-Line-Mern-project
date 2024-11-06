import axios from "axios"
import 'boxicons'
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import ur from "../Assects/ur.png"
import './u-reg.css'


function Register()  {

    const navigate = useNavigate()

    let initialstate = {
        name:"",
        age:"",
        email:"",
        password:"",
        verifyPassword:"",
        mobile:""
    }

    const [form , setform] = useState(initialstate)

    const submit = (e) => {
        if(form.verifyPassword !== form.password) {
           return alert("password not match")
        }
        e.preventDefault()
        console.log(form)

        axios
        .post("http://localhost:7000/reg" ,form)
        .then((res) => {
         console.log("backend",res.data)
         Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Register Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
         navigate('/login')
        })
        .catch((err) => {
            console.log(`error:${err}`)
        })
        setform(initialstate)
        

    }



    return(
      <>
        <div className="reg-out">
          <div className="r-i-m"> 
            <img src={ur}/>
          </div>
            <div className="reg-inn">
          <p className="heading">Register</p>
          <div className="red-container">
          <form onSubmit={submit}>
          <p>
            <span className="icon"><box-icon name='user'></box-icon></span>
          <input  placeholder="Name"
           value={form.name} onChange={(e) => setform({...form , name: e.target.value})}
           required
           />
          </p>
          <p>
          <span className="icon"><box-icon name='message-alt-detail'></box-icon></span>
          
          <input  placeholder="Age"
           value={form.age} onChange={(e) => setform({...form , age: e.target.value})}
           required
           />
          </p>
          <p>
          <span className="icon"><box-icon type='logo' name='gmail'></box-icon></span>
          <input  placeholder="Email"
           value={form.email} onChange={(e) => setform({...form, email: e.target.value})}
           required
           />
          </p>
          <p>
          <span className="icon"><box-icon name='key' ></box-icon></span>
          <input  placeholder="Password"  type="password" 
          value={form.password} onChange={(e) => setform({...form, password: e.target.value})}
          required
          />
          </p>
          <p>
          <span className="icon"><box-icon name='low-vision' ></box-icon></span>
          <input  placeholder="Confirm password" type="password" 
          value={form.verifyPassword} onChange={(e) => setform({...form ,verifyPassword: e.target.value})}
          required
          />
          </p>
          <p>
          <span className="icon"><box-icon name='mobile' ></box-icon></span>
          <input  placeholder="Mobile" 
          value={form.mobile} onChange={(e) => setform({...form ,mobile: e.target.value})}
          required
          />
          </p>
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
    ></polyline></svg>Register</span>
            
          </button>

          <Link to={"/login"}><p className="bot">Go to Login</p></Link>
          </form>
          </div>
          </div>
        
          
          </div>
          
          </>

    )
   

}

export default Register