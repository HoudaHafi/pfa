import useSelection from "antd/es/table/hooks/useSelection"
import Navbar from "../../layouts/Navbar/navbar"
import { useState ,useEffect } from "react"
import Footer from "../../layouts/Footer/footer"
import axiosApi from "../../config/axios";
import Swal from 'sweetalert2'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default () => {
  const [file, setfile]= useState(null)
  const {id}=useParams()
  const [oneCategory, setoneCategory] = useState({})
  console.log(id , "id*******");
  const getCategoryById=()=>{
    axiosApi.get("http://localhost:5000/categories/"+id).then((res)=>{
        setoneCategory(res.data.data)
    }).catch(err=>{
        console.log(err.message)
    })
  }
  useEffect(() => {
    getCategoryById()  
  
  }, [])
  console.log(oneCategory, "Onecategory*********")
  const navigate=useNavigate()

  const updateCategory=()=>{
    const data=new FormData()
    data.append('name',oneCategory?.name)
    data.append('file',file)
    axiosApi.patch("http://localhost:5000/categories/" +id,data).then((res)=>{
      setoneCategory(res.data.data)
      navigate("/listcategories")
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
          <div className=" col-lg-6 mb-5 ">
          <div className="row form-group">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="name"> Name</label>
                <input type="text" id="name" className="form-control" placeholder="name"
                 name="name"
                 value={oneCategory?.name}
                 onChange={(e)=>setoneCategory({...oneCategory, name:e.target.value})}
                 
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
            onClick={updateCategory}
            >Update Category</button>
            </div>
            <div className="col-lg-6">
            <img src={"http://localhost:5000/file/categories/" +oneCategory?.file}alt="" />
            </div>
            </div>
            </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}