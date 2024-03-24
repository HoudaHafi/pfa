import useSelection from "antd/es/table/hooks/useSelection"
import Navbar from "../../layouts/Navbar/navbar"
import { useState } from "react"
import Footer from "../../layouts/Footer/footer"
import axiosApi from "../../config/axios";
import Swal from 'sweetalert2'

export default () => {

  
  const [name, setname]= useState('')
  const [file, setfile]= useState(null)

  const addCategory=()=>{
    const data=new FormData()
    data.append('name',name)
    data.append('file',file)
    axiosApi.post("http://localhost:5000/categories" ,data).then((res)=>{
      if(res.status===201){
        Swal.fire(
          'Good job!',
          'Category Added Successfully',
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
                <label className="font-weight-bold" htmlFor="name"> Name</label>
                <input type="text" id="name" className="form-control" placeholder="name"
                 name="name"
                 onChange={(e)=>setname(e.target.value)}
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
            
            <button type="submit" className="site-btn"
            onClick={addCategory}>Add Category</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}