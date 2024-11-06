import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Swal from 'sweetalert2'




function Appoinment() {

    const {id} = useParams()

    const navigate = useNavigate()

    const [storedValue, setStoredValue] = useState("");

   const [onelaw , setonelaw] = useState([])

   const [lawyers, setlawyers] = useState([])

   const details =  async () => {
    
    await axios
    .get(`http://localhost:7000/lawyerverf?_id=${id}`)
    .then((res)=> {
        console.log(res.data)
        setonelaw(res.data)

    })
    .catch((err) => {
        console.log(`${err}`)
    })

    await axios
    .get("http://localhost:7000/getlawerd")
    .then((res) => {
        setlawyers(res.data);
        console.log(res.data)
    })
    .catch((err) => {
            console.error(err);
        })

        const value = localStorage.getItem("storedValue");
        if (value) {
            setStoredValue(value);
        }
        if(!value){
            alert("value not come")
        }

        

       
        
        
        

    }
   

    console.log("local",storedValue)
    

    

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

    const Verify = async () => {

        await axios
        .post("http://localhost:7000/verifylawyer", onelaw)
        .then((res) => {
            console.log("successfully verifyed")
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "verifyed Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch((err) => {
            console.log(`${err}`)
        })

       

       




    }





   useEffect(() => {
    details()

   },[])

    return(
        <div className="over-view-main">
            <div className="rect">
            <div className="circle2">
                <img src={`http://localhost:7000/static/${onelaw.originalname}`} style={{ maxWidth: '290px', maxHeight: '250px'  }}/>


            </div>
            
            <div className="content-q">
                <div className="d-v">
                    <p className="name2">{onelaw.name}</p>
                    <p>Age :{onelaw.age}</p>
                    <p>Location :{onelaw.location}</p>
                    <p>Carrier Started:{onelaw.csYear}</p>
                    <p>No of SuccessCase:{onelaw.successcase}</p>
                    <p><Ratings num={onelaw.ratings} /></p>

                </div>
                <div className="msg-out">
                <div className="msg">

                </div>
                <div className="msg">

                </div>
                <div className="msg">

                </div>
                
                </div>
                <div>
                    <button>Make Appoinment</button>
                    
                </div>
                



            </div>
            
            </div>
            <div className="scroll-snap-cards">
                    <div className="card11">
                        <p className="title1">Who to follow</p>
                        {lawyers.map((value) => (
                            <div className="user__container1" key={value.id}>
                                <div className="user1">
                                    <div className="image1">
                                        <img src={`http://localhost:7000/static/${value.originalname}`} alt="Lawyer" />
                                    </div>
                                    <div className="user__content1">
                                        <div className="text1">
                                            <span className="name1">{value.name}</span>
                                            <p className="username1">@namedlorem</p>
                                        </div>
                                        <button className="follow1" onClick={() => navigate(`/appoinment/${value._id}`) }>Follow</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
           
            
        </div>
    )
}

export default Appoinment