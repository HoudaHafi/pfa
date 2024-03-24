import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"
import axiosApi from "../../config/axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default () => {

  const {id}=useParams()
  const [oneConge, setoneConge] = useState({})
  console.log(id , "id*******");
  const getCongeById=()=>{
    axiosApi.get("http://localhost:5000/conges/"+id).then((res)=>{
        setoneConge(res.data.data)
    }).catch(err=>{
        console.log(err.message)
    })
  }
  useEffect(() => {
    getCongeById()  
  
  }, [])
  const navigate=useNavigate()

  const updateConge=()=>{
    let data={
      datedeb:oneConge?.datedeb,
      datefin:oneConge?.datefin,
      type:oneConge?.type,
      status:oneConge?.status,
        
      }
    
    axiosApi.patch("http://localhost:5000/conges/" +id,data).then((res)=>{
      setoneConge(res.data.data)
      navigate("/listconges")
    }).catch((err)=>{
      console.log(err.message);
    })
  }
  console.log(oneConge, "OneConge*********")
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
                <label className="font-weight-bold" htmlFor="datedeb"> Datedeb</label>
                <input type="text" id="datedeb" className="form-control" placeholder="datedeb"
                 name="datedeb"
                 value={oneConge?.datedeb}
                 onChange={(e)=>setoneConge({...oneConge, datedeb:e.target.value})}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="datefin">Datefin</label>
                <input type="text" id="datefin" className="form-control" placeholder="datefin"
                 name="datefin"
                 value={oneConge?.datefin}
                 onChange={(e)=>setoneConge({...oneConge, datefin:e.target.value})}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label className="font-weight-bold" htmlFor="type">Type</label>
                <input type="type" id="type" className="form-control" placeholder="type"
                 name="type"
                 value={oneConge?.type}
                 onChange={(e)=>setoneConge({...oneConge, type:e.target.value})}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label className="font-weight-bold" htmlFor="status">Status</label>
                <input type="status" id="status" className="form-control" placeholder="status"
                 name="status"
                 value={oneConge?.status}
                 onChange={(e)=>setoneConge({...oneConge, status:e.target.value})}
                />
              </div>
            </div>
            
            <button type="submit" className="site-btn"
            onClick={updateConge}>Update Holiday</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}