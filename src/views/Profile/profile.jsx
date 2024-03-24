import Navbar from "../../layouts/Navbar/navbar";
import Footer from "../../layouts/Footer/footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default () => {
  const [user, setuser] = useState({})

  useEffect(() => {
   setuser(JSON.parse(localStorage.getItem("user")))
  }, [])
  


return (
    <>
    <Navbar/>
<section  >
            <div className="container py-5  " style={{ marginTop: "150px" , marginBottom:'200px'}}>
  
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width: 150}} />
            <h5 className="my-3">{user?.user?.fullName}</h5>
            <p className="text-muted mb-1">{user?.user?.adress}</p>
            <p className="text-muted mb-4">{user?.user?.phone}</p>
            <div className="d-flex justify-content-center mb-2">
              <Link   to={`/updateprofile/${user?.user?._id}`}>
                     <button  type="button" className="btn btn-primary" >Update Profile</button>
                     </Link>
            </div>
          </div>
        </div>
      
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user?.user?.fullName}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user?.user?.email}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user?.user?.phone}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">User Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user?.user?.userName}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user?.user?.adress}</p>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  </div>
</section>
<Footer/>
    </>
)
}