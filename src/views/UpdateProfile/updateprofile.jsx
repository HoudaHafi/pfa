import Footer  from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"
import { useEffect, useState } from "react"
import axiosApi from "../../config/axios";
import Swal from 'sweetalert2'
import { useNavigate, useParams } from "react-router-dom";

export default () => {
  const {id}=useParams()
  const [fullname, setfullname] = useState('')
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [adress, setadress] = useState('')
  const [password, setpassword] = useState('')
  const [phone, setphone] = useState(0)
const [profile, setprofile] = useState({})
  const navigate=useNavigate()

  const getUserById=()=>{
    axiosApi.get("http://localhost:5000/users/"+id).then((res)=>{
      setprofile(res.data.data)
    }).catch(err=>{
        console.log(err.message)
    })
  }
  useEffect(() => {
    getUserById()  
  
  }, [])

  console.log(profile , "profile");

  const updateprofile=()=>{
    
    axiosApi.patch("http://localhost:5000/auth/profile/"+id ,profile).then((res)=>{
      if(res.status===200){
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        navigate('/profile')
        localStorage.setItem('user' , JSON.stringify(res.data))
      }
    }).catch((err)=>{
      console.log(err.message);
    })
  }

return(
    <>
    <Navbar/>
    <div className="section spad mt-5">
            <div className="contact-form spad">
        <div className="container">
      <div className="row">
          <div className=" col-lg-6 mb-5">
          <div className="row form-group">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="fullname">FullName</label>
                <input type="text" id="fullname" className="form-control" placeholder="Full Name"
                 name="name"
                 value={profile?.fullName}
                 onChange={(e)=>setprofile({...profile , fullName:e.target.value})}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="username">Username</label>
                <input type="text" id="username" className="form-control" placeholder="Username"
                 name="username"
                 value={profile?.userName}
                 onChange={(e)=>setprofile({...profile , userName:e.target.value})}

                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label className="font-weight-bold" htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Email Address"
                 name="email"
                 value={profile?.email}
                 onChange={(e)=>setprofile({...profile , email:e.target.value})}

                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label className="font-weight-bold" htmlFor="adresse">Adress</label>
                <input type="text" id="adresse" className="form-control" placeholder="Enter Adresse"
                 name="adresse"
                 value={profile?.adress}
                 onChange={(e)=>setprofile({...profile , adress:e.target.value})}

                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="Phone">Phone</label>
                <input type="text" id="phone" className="form-control" placeholder="phone"
                 name="phone"
                 value={profile?.phone}
                 onChange={(e)=>setprofile({...profile , phone:e.target.value})}

                />
              </div>
            </div>
         
            <button type="submit" className="site-btn"
            onClick={updateprofile}>Update Profile</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            
    <Footer/>
    </>
)


}