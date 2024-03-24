import Navbar from "../../layouts/Navbar/navbar"
import { Table , Button } from "antd";
import { EditOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import axiosApi from "../../config/axios";
import Swal from 'sweetalert2'
import Footer from "../../layouts/Footer/footer";
import { Link } from "react-router-dom";

export default () => {
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

  //delete category
  const deleteCategory=(id)=>{
    axiosApi.delete("http://localhost:5000/categories/"+id).then((res)=>{
      let arr=[...listcategories]

      setlistcategories(arr.filter(c=>c._id !==id))
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
            src={"http://localhost:5000/file/categories/"+record.file}/>
          )
        },
        
        {
          title: 'Update',
          render:(text, record)=>
         <Link to={`/updatecategory/${record._id}`}> 
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
              deleteCategory(record._id)
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
                                        List of Categories
                                    </h3>
                                    
                                </div>
                                
        <Table dataSource={listcategories} columns={columns} />
      </div>
         </div>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}