import { useEffect, useState } from "react";
import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"
import axiosApi from "../../config/axios";
import { Link } from "react-router-dom";

export default () => {
  const[listprojets, setlistprojets]=useState([])
   
    console.log(listprojets , "liste projetsssss");
    //get all
    const getAllProjets=()=>{
      axiosApi.get("http://localhost:5000/projects").then(res=>{
         // console.log(res , "response projets******")

          setlistprojets(res.data.data)
          
      }).catch(err=>{
          console.log(err.message)
      })
  }
  useEffect(() => {
    getAllProjets()  
  
  }, [])
    return(
        <>
        <Navbar/>
       <section className="blog-section spad mt-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 mt-5">
        <div className="row">
          {
            listprojets.map(p=>(
              <div className="col-lg-6 col-md-6 col-sm-6 mt-5">
              <div className="blog__item">
                <div className="blog__pic set-bg">
                  <img src={"http://localhost:5000/file/projects/"+ p?.file}/>
                  <div className="label">Hosting</div>
                </div>
                <div className="blog__text">
                  <h5><Link to={`/details/${p._id}`}><a href="#">{p?.name}</a></Link></h5>
                  <ul>
                    <li><i className="fa fa-user" /> {p?.category?.name}</li>
                    <li><i className="fa fa-clock-o" /> {p?.deadline}</li>
                  </ul>
                </div>
              </div>
            </div>
            ))
          }
         
          <div className="col-lg-12">
            <div className="load-more">
              <a href="#" className="primary-btn">Load more posts</a>
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