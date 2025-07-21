import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './admin.css'

function Adminuser() {

    const navigate = useNavigate()

    let [form , setform] = useState([])
     
    const fetch = async (req,res) => {
    await axios
    .get("https://law-line-backend-1.onrender.com/alluser")
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
        
           <div className="flexinger">
           
           {form.map(value => (  
           <div class="card10">
           
            <div class="card10-border-top">
            </div>
           
           
          
           
                      
           <div class="img">
           
           <img src={`https://law-line-backend-1.onrender.com/static/${value.originalname}`} style={{ maxWidth: '90px', maxHeight: '90px' }}/>
            </div>
           
           <span>{value.name}</span>
           
           <p class="job"> {value.location}</p>
           <p class="job"> {value.age}</p>
           <p class="job">User</p>
           <button onClick={() => navigate(`view/${value.userId}`)}>View</button>
          
          
           
             </div>
             ))}
           
           </div>
        
    )
}

export default  Adminuser

