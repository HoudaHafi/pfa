import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"
import axiosApi from "../../config/axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
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

  const {id}=useParams()
  const [oneTask, setoneTask] = useState({})
  const [project, setproject] = useState('')
  console.log(id , "id*******");
  const getTaskById=()=>{
    axiosApi.get("http://localhost:5000/tasks/"+id).then((res)=>{
        setoneTask(res.data.data)
    }).catch(err=>{
        console.log(err.message)
    })
  }
  useEffect(() => {
    getTaskById()  
  
  }, [])
  const navigate=useNavigate()
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
  const [list, setlist] = useState([])

useEffect(()=>{
    setlist(
      listprojets.map((res)=>{
        return{
          label:res.name,
          value:res._id
        }
      })
    )
},[listprojets])

  const updateTask=()=>{
    let data={
        name:oneTask?.name,
        description:oneTask?.description,
        project:project
      }
    
    axiosApi.patch("http://localhost:5000/tasks/" +id,data).then((res)=>{
      setoneTask(res.data.data)
      navigate("/listtasks")
    }).catch((err)=>{
      console.log(err.message);
    })
  }
  console.log(oneTask, "Onetask*********")
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
                 value={oneTask?.name}
                 onChange={(e)=>setoneTask({...oneTask, name:e.target.value})}
                />
              </div>
            </div>
            
            <div className="row form-group">
              <div className="col-md-12">
                <label className="font-weight-bold" htmlFor="description">Description</label>
                <input type="description" id="description" className="form-control" placeholder="description"
                 name="description"
                value={oneTask?.description}
                 onChange={(e)=>setoneTask({...oneTask, description:e.target.value})}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
              <Select classname="form-control" placeholder="Select project"
                                   styles={styleData}
                                   options={list}
                                   onChange={(e)=>setproject(e?.value)}
                               />
              </div>
            </div>
            
            
            <button type="submit" className="site-btn"
            onClick={updateTask}
             >Update Task</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}