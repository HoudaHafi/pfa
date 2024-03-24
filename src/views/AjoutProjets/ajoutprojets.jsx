import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"
import axiosApi from "../../config/axios";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react"
import Select from 'react-select';

export default () => {
//style react-select
  const styleData = {
    option: (provided, state) => ({
        ...provided,
        fontWeight: state.isFocused ? "bold" : "normal",
        color: state.isSelected ? "#FF4040" : "#181D38",
        backgroundColor: state.isSelected ? "#A0A0A0" : "#06BBCCz",
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: "black",
        icon: state.data.icon,
    }),
    control: (provided) => ({
        ...provided,
     borderColor:"#06BBCC",
     focus:"#06BBCC"
      }),
};


  const [name, setname] = useState('')
  const [file, setfile] = useState(null)
  const [description, setdescription] = useState('')
  const [deadline, setdeadline] = useState('')
  const [category, setcategory] = useState('')
  
  const[listcategories, setlistcategories]=useState([])
   
  console.log(listcategories , "liste categoriesssss");
  //get all
  const getAllCategories=()=>{
    axiosApi.get("http://localhost:5000/categories").then(res=>{
       // console.log(res , "response categories******")

        setlistcategories(res.data.data)
    
    }).catch(err=>{
        console.log(err.message)
    })
}
useEffect(() => {
  getAllCategories()  

}, [])

const [list, setlist] = useState([])

useEffect(()=>{
    setlist(
      listcategories.map((res)=>{
        return{
          label:res.name,
          value:res._id
        }
      })
    )
},[listcategories])

  const AddProject=()=>{
    const data=new FormData()
    data.append('name',name)
    data.append('file',file)
    data.append('description',description)
    data.append('deadline',deadline)
    data.append('category',category)
   
    axiosApi.post("http://localhost:5000/projects" ,data).then((res)=>{
      if(res.status===201){
        Swal.fire(
          'Good job!',
          'Project Added Successfully',
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
        <div className="col-lg-12">
          <h3>Add Project</h3>
        </div>
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
            <div className="row form-group">
              <div className="col-md-12">
                <label className="font-weight-bold" htmlFor="description">Description</label>
                <input type="description" id="description" className="form-control" placeholder="description"
                 name="description"
                 onChange={(e)=>setdescription(e.target.value)}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label className="font-weight-bold" htmlFor="deadline">Deadline</label>
                <input type="deadline" id="deadline" className="form-control" placeholder="deadline"
                 name="deadline"
                 onChange={(e)=>setdeadline(e.target.value)}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
              <Select classname="form-control" placeholder="Select category"
                                   styles={styleData}
                                   options={list}
                                   onChange={(e)=>setcategory(e?.value)}
                               />
              </div>
            </div>
            
            <button type="submit" className="site-btn"
             onClick={AddProject}>Add Project</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}