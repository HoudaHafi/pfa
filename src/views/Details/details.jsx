import { useEffect, useState } from "react";
import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"
import axiosApi from "../../config/axios";
import { useParams } from "react-router-dom";

export default () => {
  const {id}=useParams()
  const [oneProject, setoneProject] = useState({})
  console.log(id , "id*******");
  const getProjectById=()=>{
    axiosApi.get("http://localhost:5000/projects/"+id).then((res)=>{
        setoneProject(res.data.data)
    }).catch(err=>{
        console.log(err.message)
    })
  }
  useEffect(() => {
    getProjectById()  
  
  }, [id])
    return(
        <>
        <Navbar/>
        <section className="choose-plan-section spad mt-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <img src={"http://localhost:5000/file/projects/"+oneProject?.file} />
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="plan__text">
          <h3>{oneProject?.name}</h3>
          <ul>
            <li><span className="fa fa-check" /> <span>Category:</span>{oneProject?.category?.name}</li>
            <li><span className="fa fa-check" /> <span>Deadline:</span>{oneProject?.deadline}</li>
            <li><span className="fa fa-check" /> <span>Description</span>{oneProject?.description}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
        <Footer/>
        </>
    )
}