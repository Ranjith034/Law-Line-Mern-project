// // import axios from "axios"
// // import 'boxicons'
// // import React, { useState } from "react"
// // import { Link, useNavigate } from "react-router-dom"
// // import Swal from 'sweetalert2'
// // import ur from "../Assects/ur.png"
// // import './u-reg.css'


// // function Register()  {

// //     const navigate = useNavigate()

// //     let initialstate = {
// //         name:"",
// //         age:"",
// //         email:"",
// //         password:"",
// //         verifyPassword:"",
// //         mobile:""
// //     }

// //     const [form , setform] = useState(initialstate)

// //     const submit = (e) => {
// //         if(form.verifyPassword !== form.password) {
// //            return alert("password not match")
// //         }
// //         e.preventDefault()
// //         console.log(form)

// //         axios
// //         .post("http://localhost:7000/reg" ,form)
// //         .then((res) => {
// //          console.log("backend",res.data)
// //          Swal.fire({
// //           position: "top-right",
// //           icon: "success",
// //           title: "Register Successfully",
// //           showConfirmButton: false,
// //           timer: 1500,
// //         });
// //          navigate('/login')
// //         })
// //         .catch((err) => {
// //             console.log(`error:${err}`)
// //         })
// //         setform(initialstate)
        

// //     }
    
// //     const imageUpload = (e) => {
// //       const file = e.target.files[0]; 
// //       if (file) {
// //         setform({
// //           ...form,
// //           uploadfile: file, 
// //         });
// //       }
// //     };


// //     return(
// //       <>
// //         <div className="reg-out">
// //           <div className="r-i-m"> 
// //             <img src={ur}/>
// //           </div>
// //             <div className="reg-inn">
// //           <p className="heading">Register</p>
// //           <div className="red-container">
// //           <form onSubmit={submit}>
// //           <p>
// //             <span className="icon"><box-icon name='user'></box-icon></span>
// //           <input  placeholder="Name"
// //            value={form.name} onChange={(e) => setform({...form , name: e.target.value})}
// //            required
// //            />
// //           </p>
// //           <p>
// //           <span className="icon"><box-icon name='message-alt-detail'></box-icon></span>
          
// //           <input  placeholder="Age"
// //            value={form.age} onChange={(e) => setform({...form , age: e.target.value})}
// //            required
// //            />
// //           </p>
// //           <p>
// //           <span className="icon"><box-icon type='logo' name='gmail'></box-icon></span>
// //           <input  placeholder="Email"
// //            value={form.email} onChange={(e) => setform({...form, email: e.target.value})}
// //            required
// //            />
// //           </p>
// //           <p>
// //           <span className="icon"><box-icon name='key' ></box-icon></span>
// //           <input  placeholder="Password"  type="password" 
// //           value={form.password} onChange={(e) => setform({...form, password: e.target.value})}
// //           required
// //           />
// //           </p>
// //           <p>
// //           <span className="icon"><box-icon name='low-vision' ></box-icon></span>
// //           <input  placeholder="Confirm password" type="password" 
// //           value={form.verifyPassword} onChange={(e) => setform({...form ,verifyPassword: e.target.value})}
// //           required
// //           />
// //           </p>
// //           <p>
// //           <span className="icon"><box-icon name='mobile' ></box-icon></span>
// //           <input  placeholder="Mobile" 
// //           value={form.mobile} onChange={(e) => setform({...form ,mobile: e.target.value})}
// //           required
// //           />
// //           </p>
// //           <p>
// //                 <span><box-icon type='solid' name='file-image'></box-icon></span>
// //                 <input className="file" type="file" accept="image/*" onChange={imageUpload} 
// //                 required
// //                 />
// //               </p>
// //           <button onClick={submit} className="btnss">
// //           <span class="fold"></span>

// // <div class="points_wrapper">
// //   <i class="point"></i>
// //   <i class="point"></i>
// //   <i class="point"></i>
// //   <i class="point"></i>
// //   <i class="point"></i>
// //   <i class="point"></i>
// //   <i class="point"></i>
// //   <i class="point"></i>
// //   <i class="point"></i>
// //   <i class="point"></i>
// // </div>

// // <span class="inner"
// //   ><svg
// //     class="icon"
// //     fill="none"
// //     stroke="currentColor"
// //     viewBox="0 0 24 24"
// //     xmlns="http://www.w3.org/2000/svg"
// //     stroke-linecap="round"
// //     stroke-linejoin="round"
// //     stroke-width="2.5"
// //   >
// //     <polyline
// //       points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"
// //     ></polyline></svg>Register</span>
            
// //           </button>

// //           <Link to={"/login"}><p className="bot">Go to Login</p></Link>
// //           </form>
// //           </div>
// //           </div>
        
          
// //           </div>
          
// //           </>

// //     )
   

// // }

// // export default Register


// import axios from "axios";
// import 'boxicons';
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2';
// // import ur from "../Assets/ur.png";
// import './u-reg.css';

// function Register() {
//   const navigate = useNavigate();

//   const initialstate = {
//     name: "",
//     age: "",
//     email: "",
//     password: "",
//     verifyPassword: "",
//     mobile: "",
//     uploadfile: null
//   };

//   const [form, setForm] = useState(initialstate);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const imageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setForm((prevState) => ({
//         ...prevState,
//         uploadfile: file
//       }));
//     }
//   };

//   const submit = (e) => {
//     e.preventDefault();

//     if (form.verifyPassword !== form.password) {
//       return Swal.fire("Error", "Passwords do not match!", "error");
//     }

//     const formData = new FormData();
//     formData.append("name", form.name);
//     formData.append("age", form.age);
//     formData.append("email", form.email);
//     formData.append("password", form.password);
//     formData.append("mobile", form.mobile);
//     if (form.uploadfile) {
//       formData.append("uploadfile", form.uploadfile);
//     }

//     axios
//       .post("http://localhost:7000/reg", formData)
//       .then((res) => {
//         Swal.fire({
//           position: "top-right",
//           icon: "success",
//           title: "Register Successfully",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         navigate('/login');
//       })
//       .catch((err) => {
//         console.error(`Error: ${err}`);
//       });

//     setForm(initialstate);
//   };

//   return (
//     <div className="reg-out">
//       <div className="r-i-m">
//         {/* <img src={ur} alt="User Register" /> */}
//       </div>
//       <div className="reg-inn">
//         <p className="heading">Register</p>
//         <div className="red-container">
//           <form onSubmit={submit}>
//             {[
//               { placeholder: "Name", name: "name", icon: 'user' },
//               { placeholder: "Age", name: "age", icon: 'message-alt-detail' },
//               { placeholder: "Email", name: "email", icon: 'gmail' },
//               { placeholder: "Password", name: "password", icon: 'key', type: "password" },
//               { placeholder: "Confirm password", name: "verifyPassword", icon: 'low-vision', type: "password" },
//               { placeholder: "Mobile", name: "mobile", icon: 'mobile' },
//             ].map((field, index) => (
//               <p key={index}>
//                 <span className="icon"><box-icon name={field.icon} type={field.type || 'solid'}></box-icon></span>
//                 <input
//                   placeholder={field.placeholder}
//                   type={field.type || 'text'}
//                   name={field.name}
//                   value={form[field.name]}
//                   onChange={handleChange}
//                   required
//                 />
//               </p>
//             ))}
//             <p>
//               <span><box-icon type="solid" name="file-image"></box-icon></span>
//               <input
//                 className="file"
//                 type="file"
//                 accept="image/*"
//                 onChange={imageUpload}
//                 required
//               />
//             </p>
//             <button type="submit" className="btnss">
//               <span className="fold"></span>
//               <div className="points_wrapper">
//                 {[...Array(10)].map((_, i) => (
//                   <i key={i} className="point"></i>
//                 ))}
//               </div>
//               <span className="inner">
//                 <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
//                   <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
//                 </svg>
//                 Register
//               </span>
//             </button>
//             <Link to="/login"><p className="bot">Go to Login</p></Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;


import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import g10 from '../Assects/Authentication 4.png';
import Footer from "./footer";
import "./u-reg.css";




function Register() {

  const navigate = useNavigate()
 

//   const navigate = useNavigate()
  const initialData = {
    uploadfile: null,            
    name: "",
    age: "",
    email: "",
    mobile: "",
    password: "",
    verifyPassword: "",
    
  };

  const [form, setForm] = useState(initialData);

 
  const submit = async (e) => {
    e.preventDefault();

   
     const formData = new FormData();
     formData.append("uploadfile", form.uploadfile); 
     formData.append("name", form.name);
     formData.append("age", form.age);
     formData.append("email", form.email);
     formData.append("mobile", form.mobile);
     formData.append("password", form.password);
     formData.append("verifyPassword", form.verifyPassword);
     

    console.log("checking formdata: ",formData)
    console.log("checking form",form)
    

    await axios
      .post("https://law-line-backend-1.onrender.com/reg", formData)
      .then((res) => {
        console.log(res.data); 
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      
        setForm(initialData);
        navigate('/login')
      })
      .catch((err) => {
        console.error(err);
      });
   
  }   
  
  
  const imageUpload = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      setForm({
        ...form,
        uploadfile: file, 
      });
    }
  };



  return (
    <>
    
    <div className='reg-out'>
     
      <div class="reg-img">
        <img src={g10}/>
      </div>
      
      
      <div className='cards'>
        <div className='cover'>
          <div className="uni">
          
            <form onSubmit={submit}>
            <h2>Register Your Details</h2>
            <div className="file-al">
            <label class="custum-file-upload" for="file">
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
</div>
<div class="text">
   <span>Click to upload image</span>
   </div>
   
   <input className="file" id="file" type="file" accept="image/*" onChange={imageUpload} />
  
</label>
</div>
              <p>
             
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="name "
                  required
                  
                />
                
                
              
               
                <input
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                  placeholder="age"
                  required
                />
              </p>
              <p>
                
               
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email"
                  required
                />
              
                
                <input
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  placeholder="mobile"
                />
              </p>
              <p>
               
                
                <input
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="password"
                />
             
                
                <input
                  value={form.verifyPassword}
                  onChange={(e) => setForm({ ...form, verifyPassword: e.target.value })}
                  placeholder="confirm password"
                />
              </p>
             
              <p>
                <div className="bt-out">
              <button className="bt" type="submit">Submit</button>


              </div>
              </p>
              <Link to={"/login"}><p>already register ! Go to Login</p></Link>

            </form>

            
          </div>
        </div>
        
        
      </div>
      </div>
      <div className="find">
      <Footer/>
      </div>
      </>
  
   
  );
}

export default Register
