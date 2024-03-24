import Navbar from "../../layouts/Navbar/navbar";
import Footer from "../../layouts/Footer/footer";
import img2 from "../../assets/img/hero/img2.png";
//import "./signin.css";
import { useState } from "react";
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
import axiosApi from "../../config/axios";

  
export default () => {
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()

    const signIn = () => {
        let data = {
            
            userName: userName,
            password: password,

        }
        axiosApi.post("http://localhost:5000/auth/signin", data).then((res) => {
            if (res.status === 201) {
                Swal.fire(
                    'welcome back!',
                    "You've successfully signed in."
                )
                localStorage.setItem('user', JSON.stringify(res.data))
                navigate("/")
            }
        }).catch((err) => {
            console.log(err.message);
        })
    }


    return (
        <>
        <Navbar/>
          
            
             <div className="header__info">
                 <div className="container">
            <div className="section spad mt-5" >
                <div className="contact-form spad">
                    <div className="container">
                        <div className="row">
                            <div className=" col-lg-6 mt-5">
                            <div className="contact__text text-center">
                                            <h3>sign in</h3>
                                        </div>
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="font-weight-bold" htmlFor="username">user Name</label>
                                        <input type="text" id="username" className="form-control" placeholder="user Name"
                                            name="name"
                                                    onChange={(e) => setuserName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="font-weight-bold" htmlFor="password">Password</label>
                                        <input type="password" id="password" className="form-control" placeholder="Password"
                                            name="password"
                                                    onChange={(e) => setpassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="site-btn"
                                            onClick={signIn}>Sign In</button>
                                            <Link to="/signup"><button type="submit" className="btn light">Don't have an account?</button>
                                        <button button type="submit" className="btn light"
                                                style={{ color: "#101D5E", font: "bold" }}>Sign Up</button></Link>
                            </div>
                                    <div className="col-lg-6  md-5 " >
                                        <img src={`${img2}`} width="100%" height="100%" />
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