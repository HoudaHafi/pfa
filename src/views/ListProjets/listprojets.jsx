import Navbar from "../../layouts/Navbar/navbar"
import { Table ,Button } from "antd";
import { EditOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import axiosApi from "../../config/axios";
import Swal from 'sweetalert2'
import Footer from "../../layouts/Footer/footer";
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
    //delete project
  const deleteProjet=(id)=>{
    axiosApi.delete("http://localhost:5000/projects/"+id).then((res)=>{
      let arr=[...listprojets]

      setlistprojets(arr.filter(c=>c._id !==id))
    }).catch((err)=>{
      console.log(err.message);
    })
  }
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'File',
          render:(text, record)=>(
            <img style={{width:'50px' , height:'50px'}}
            src={"http://localhost:5000/file/projects/"+record.file}/>
          )
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        
        {
            title: 'Deadline',
            dataIndex: 'deadline',
            key: 'deadline',
        },
        {
          title: 'Category',
          render:(text, record)=>{
            return<>{record?.category?.name}</>
          }
        
        },
        
        {
          title: 'Update',
          render:(text, record)=>
          <Link to={`/updateproject/${record._id}`}>
          <Button style={{color:"#389e0d"}} shape="round" icon={<EditOutlined />} />
          </Link>
        },
        {
          title: 'Delete',
          render:(text, record)=>
          <Button style={{color:"#FF0000"}} shape="round" icon={<DeleteOutlined />}
          onClick={()=>Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              deleteProjet(record._id)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })} />
        },
      ];
    return(
        <>
        <Navbar/>
        <div className="section spad mt-5">
            <div className="contact-form spad">
        <div className="container">
      <div className="row">
      <div className="col-md-12">
                                <div className="contact__text text-center">
                                    <h3 style={{color:"#00216D"}}>
                                        List of projects
                                    </h3>
                                    
                                </div>
        <Table dataSource={listprojets} columns={columns} />
      </div>
         </div>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}