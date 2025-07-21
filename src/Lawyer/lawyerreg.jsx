import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import g9 from '../Assects/Authentication 4.png';
import Footer from "../User/footer";
import './lawyerreg.css';



function Lawyerreg() {

  const navigate = useNavigate()
 



  const initialData = {
    uploadfile: null,            
    name: "",
    age: "",
    exp: "",
    details: "",
    location: "",
    ratings: "",
    successcase: "",
    csYear: "",
    lemail:"",
    lawtype:""
  };

  const [form, setForm] = useState(initialData);

 
  const submit = async (e) => {
    e.preventDefault();

   
     const formData = new FormData();
     formData.append("uploadfile", form.uploadfile); 
     formData.append("name", form.name);
     formData.append("age", form.age);
     formData.append("exp", form.exp);
     formData.append("details", form.details);
     formData.append("location", form.location);
     formData.append("ratings", form.ratings);
     formData.append("successcase", form.successcase);
     formData.append("csYear", form. csYear);
     formData.append("lemail", form.lemail);
     formData.append("lawtype", form.lawtype);

    console.log("checking formdata: ",formData)
    console.log("checking form",form)
    

    await axios
      .post("https://law-line-backend-1.onrender.com/lawyerreg", formData)
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
         navigate('lawyerhome/lawyerlog')
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
    <div className='vp-out'>
      <div class="reg-img">
        <img src={g9}/>
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
                  placeholder="Lawyer Name"
                  required
                />
                
              
                
                <input
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                  placeholder="Lawyer Age"
                  required
                />
              </p>
              <p>
               
                <input
                  value={form.exp}
                  onChange={(e) => setForm({ ...form, exp: e.target.value })}
                  placeholder="Lawyer Experience"
                  required
                />
              
                
                <input
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  placeholder="Lawyer Deatils"
                />
              </p>
              <p>
               
                <input
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  placeholder="Your Address"
                />
             
                
                <input
                  value={form.ratings}
                  onChange={(e) => setForm({ ...form, ratings: e.target.value })}
                  placeholder="Ratings"
                />
              </p>
              <p>
                
                <input
                  value={form.successcase}
                  onChange={(e) => setForm({ ...form, successcase: e.target.value })}
                  placeholder="Success Case"
                />
              
               
                <input
                  value={form.csYear}
                  onChange={(e) => setForm({ ...form, csYear: e.target.value })}
                  placeholder="Career Starting Year"
                />
              </p>
              <p>
              <input
                  value={form.lemail}
                  onChange={(e) => setForm({ ...form, lemail: e.target.value })}
                  placeholder="email"
                  required
                />
              
              <input
                  value={form.lawtype}
                  onChange={(e) => setForm({ ...form, lawtype: e.target.value })}
                  placeholder="lawyer"
                  required
                />
              </p>
              <p>
                <div className="bt-out">
              <button className="bt" type="submit">Submit</button>
              </div>
              </p>
            </form>
          </div>
        </div>
        
        
      </div>
     
    </div>
     <Footer/>
     </>
  );
}

export default Lawyerreg
