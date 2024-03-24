import Footer  from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"
import { useState } from "react"
import axiosApi from "../../config/axios";
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../assets/img/hero/img1.png";

export default () => {
  const [fullname, setfullname] = useState('')
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [adress, setadress] = useState('')
  const [password, setpassword] = useState('')
  const [phone, setphone] = useState(0)

  const navigate=useNavigate()

  const signUp=()=>{
    let data={
      items:"Salary",
      fullName:fullname,
      userName:username,
      email:email,
      password:password,
      adress:adress,
      phone:phone
    }
    axiosApi.post("http://localhost:5000/users" ,data).then((res)=>{
      if(res.status===201){
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        navigate('/signin')
      }
    }).catch((err)=>{
      console.log(err.message);
    })
  }

return(
    <>
    <Navbar/>
    <div className="header__info">
                 <div className="container">
    <div className="section spad mt-5">
            <div className="contact-form spad">
        <div className="container">
      <div className="row">
          <div className=" col-lg-6 mb-5">
          <div className="contact__text text-center">
                                            <h3>sign up</h3>
                                        </div> 
          <div className="row form-group">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="fullname">FullName</label>
                <input type="text" id="fullname" className="form-control" placeholder="Full Name"
                 name="name"
                 onChange={(e)=>setfullname(e.target.value)}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="username">Username</label>
                <input type="text" id="username" className="form-control" placeholder="Username"
                 name="username"
                 onChange={(e)=>setusername(e.target.value)}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label className="font-weight-bold" htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Email Address"
                 name="email"
                 onChange={(e)=>setemail(e.target.value)}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label className="font-weight-bold" htmlFor="adresse">Adress</label>
                <input type="text" id="adresse" className="form-control" placeholder="Enter Adresse"
                 name="adresse"
                 onChange={(e)=>setadress(e.target.value)}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="Phone">Phone</label>
                <input type="text" id="phone" className="form-control" placeholder="phone"
                 name="phone"
                 onChange={(e)=>setphone(e.target.value)}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" placeholder="Password"
                 name="password"
                 onChange={(e)=>setpassword(e.target.value)}
                 />
              </div>
            </div>
            <button type="submit" className="site-btn"
            onClick={signUp}>Sign Up</button>
            <Link to='/signin'><button type="submit" className="btn light">Already have an account?</button>
                                <button button type="submit" className="btn light"
                                        style={{ color: "#101D5E", font: "bold" }}>Sign In</button></Link>
            </div>
            <div className="col-lg-6  md-5 " >
                                        <img src={`${img1}`} width="100%" height="100%" />
                                    </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            
    <Footer/>
    </>
)


}