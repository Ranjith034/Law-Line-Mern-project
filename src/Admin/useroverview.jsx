import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Swal from 'sweetalert2'
import "./overview.css"


function UserOverview() {

    const {userId} = useParams()

    const navigate = useNavigate()

   const [onelaw , setonelaw] = useState([])

   const details =  async () => {
     
    await axios
    .get(`https://law-line-backend-1.onrender.com/user?userId=${userId}`)
    .then((res)=> {
        console.log(res.data)
        setonelaw(res.data)
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

    const Verify = async () => {

        await axios
        .post("https://law-line-backend-1.onrender.com/verifylawyer", onelaw)
        .then((res) => {
            console.log("successfully verifyed")
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Set  Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch((err) => {
            console.log(`${err}`)
        })
    }

    const toprate = async () => {

      await axios
      .post("https://law-line-backend-1.onrender.com/toprate", onelaw)
      .then((res) => {
          console.log("successfully verifyed")
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Verified  Successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/admin/lawyer')
      })
      .catch((err) => {
          console.log(`${err}`)
      })
  }

  const deleteid = async (id) => {
    await axios
    .delete(`https://law-line-backend-1.onrender.com/deleteuser?_id=${id}`)
    .then((res) => {
       console.log(res.data)
       Swal.fire({
           position: "center",
           icon: "success",
           title: "User Deleted Successfully",
           showConfirmButton: false,
           timer: 1500
         });
         navigate('/admin/userdetail')

    })
    .catch((err) => {
       console.log(`error:${err}`)
       Swal.fire({
           position: "center",
           icon: "error",
           title: `${err}`,
           showConfirmButton: false,
           timer: 1500
         });
   })
}





   useEffect(() => {
    details()

   },[])

    return(
      <div className="design">
        <div className="over-view-mains">
            <div className="rect">
            <div className="circle2">
                <img src={`https://law-line-backend-1.onrender.com/static/${onelaw.originalname}`} style={{ maxWidth: '290px', maxHeight: '250px'  }}/>


            </div>
            
            <div className="content-q">
                <div className="d-v">
                    <p>Name : {onelaw.name}</p>
                    <p>Age : {onelaw.age}</p>
                    <p>email : {onelaw.email}</p>
                    <p>Mobile : {onelaw.mobile}</p>
                    
                    

                </div>


            </div>
            </div>
            <div className="navig">
           
<button class="cssbuttons-io" onClick={() => deleteid(onelaw._id)}>
  <span>Remove</span>
</button>
{/* <button class="cssbuttons-io" onClick={toprate}>
  <span>Verify<span><box-icon type='solid' name='badge-check'></box-icon></span></span>
</button> */}

            </div>
            
        </div>
        </div>
    )
}

export default UserOverview