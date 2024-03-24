import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"
import axiosApi from "../../config/axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default () => {
  const [file, setfile] = useState(null)
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
  
  }, [])
  const navigate=useNavigate()

  const updateProject=()=>{
    const data=new FormData()
    data.append('name',oneProject?.name)
    data.append('file',file)
    data.append('description',oneProject?.description)
    data.append('deadline',oneProject?.deadline)
    
    axiosApi.patch("http://localhost:5000/projects/" +id,data).then((res)=>{
      setoneProject(res.data.data)
      navigate("/listprojets")
    }).catch((err)=>{
      console.log(err.message);
    })
  }
  console.log(oneProject, "Oneproject*********")
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
                <label className="font-weight-bold" htmlFor="name"> Name</label>
                <input type="text" id="name" className="form-control" placeholder="name"
                 name="name"
                 value={oneProject?.name}
                 onChange={(e)=>setoneProject({...oneProject, name:e.target.value})}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="file">File</label>
                <input type="file" id="file" className="form-control" placeholder="file"
                 name="file"
                 onChange={(e)=>setfile(e.target.files[0])}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label className="font-weight-bold" htmlFor="description">Description</label>
                <input type="description" id="description" className="form-control" placeholder="description"
                 name="description"
                value={oneProject?.description}
                 onChange={(e)=>setoneProject({...oneProject, description:e.target.value})}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label className="font-weight-bold" htmlFor="deadline">Deadline</label>
                <input type="deadline" id="deadline" className="form-control" placeholder="deadline"
                 name="deadline"
                 value={oneProject?.deadline}
                 onChange={(e)=>setoneProject({...oneProject, deadline:e.target.value})}
                />
              </div>
            </div>
            
            <button type="submit" className="site-btn"
            onClick={updateProject}
             >Update Project</button>
            </div>
            <div className="col-lg-6">
            <img src={"http://localhost:5000/file/projects/" +oneProject?.file}alt="" />
            </div>
            </div>
            </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}