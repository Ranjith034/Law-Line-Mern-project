import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './admin.css'

function Adminlog() {

    const navigate = useNavigate()

    let [form , setform] = useState([])
     
    const fetch = async (req,res) => {
    await axios
    .get("http://localhost:7000/getlawerd")
    .then((res) => {
        console.log(res.data)
        setform(res.data)
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
    


useEffect(() => {
    fetch()
},[])

    return(
        <div className="admin-out">
           {/* <div className="admin-card">
            {form.map (value => (
                <div className="admin-in-card">
                    <box-icon name='badge-check' type='solid' ></box-icon>
                    <div className="image-con">
                        <img src={`http://localhost:7000/static/${value.originalname}`} style={{ maxWidth: '200px', maxHeight: '200px' }}/>
                    </div>
                    <div className="c-con">
                    <p><span>Lawyer Name</span> :{value.name}</p>
                    <p><span>Lawyer Age</span> :{value.age}</p>
                    <p><span>Lawyer Work Experience</span> : {value.exp}</p>
                    <p><span>Lawyer Location</span>: {value.location}</p>
                    <p><Ratings num={value.ratings} /></p>
                    <button className="btn">Verify</button>
                    </div>
                    
                </div>
            )

            )}

           </div> */}
           <div className="down-add">
           
           {form.map(value => (  
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
           <button onClick={() => navigate(`view/${value._id}`)}>View</button>
          
           
             </div>
             ))}
           
           </div>
        </div>
    )
}

export default  Adminlog

