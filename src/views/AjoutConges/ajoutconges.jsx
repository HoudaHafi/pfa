import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"
import axiosApi from "../../config/axios";
import Swal from 'sweetalert2'
import { useState } from "react"

export default () => {
  const [datedeb, setdatedeb] = useState('')
  const [datefin, setdatefin] = useState('')
  const [type, settype] = useState('')
  const [status, setstatus] = useState('')
  


  const AddConge=()=>{
    let data={
      datedeb:datedeb,
      datefin:datefin,
      type:type,
      status:status,
    }
    axiosApi.post("http://localhost:5000/conges" ,data).then((res)=>{
      if(res.status===201){
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
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
                <label className="font-weight-bold" htmlFor="datedeb"> Datedeb</label>
                <input type="text" id="datedeb" className="form-control" placeholder="datedeb"
                 name="datedeb"
                 onChange={(e)=>setdatedeb(e.target.value)}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="datefin">Datefin</label>
                <input type="text" id="datefin" className="form-control" placeholder="datefin"
                 name="datefin"
                 onChange={(e)=>setdatefin(e.target.value)}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label className="font-weight-bold" htmlFor="type">Type</label>
                <input type="type" id="type" className="form-control" placeholder="type"
                 name="type"
                 onChange={(e)=>settype(e.target.value)}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label className="font-weight-bold" htmlFor="status">Status</label>
                <input type="status" id="status" className="form-control" placeholder="status"
                 name="status"
                 onChange={(e)=>setstatus(e.target.value)}
                />
              </div>
            </div>
            
            <button type="submit" className="site-btn"
            onClick={AddConge}>Add Holiday</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}