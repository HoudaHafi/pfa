import Navbar from "../../layouts/Navbar/navbar"
import { Table, Button } from "antd";
import { EditOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import Footer from "../../layouts/Footer/footer";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import axiosApi from "../../config/axios";

export default () => {
  const[listsalaries, setlistsalaries]=useState([])
   
  console.log(listsalaries , "liste salariessssss");
  //get all
  const getAllSalaries=()=>{
    axiosApi.get("http://localhost:5000/salaries").then(res=>{
       // console.log(res , "response salaries******")

        setlistsalaries(res.data.data)
    
    }).catch(err=>{
        console.log(err.message)
    })
}
useEffect(() => {
  getAllSalaries()  

}, [])
  //delete salary
const deleteSalary=(id)=>{
  axiosApi.delete("http://localhost:5000/salaries/"+id).then((res)=>{
    let arr=[...listsalaries]

    setlistsalaries(arr.filter(c=>c._id !==id))
  }).catch((err)=>{
    console.log(err.message);
  })
}

    const dataSource = [
        {
          key: '1',
          fullname: 'houda hafi',
          username: 'houda',
          email: 'houdahafi38@gmail.com',
          adress: 'kebili',
          phone: '97156242',
        },
        {
          key: '2',
          fullname: 'eya hafi',
          username: 'eya',
          email: 'eyahafi38@gmail.com',
          adress: 'kebili',
          phone: '95842615',
        },
      ];
      
      const columns = [
        {
          title: 'Fullname',
          dataIndex: 'fullname',
          key: 'fullname',
        },
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
          {
            title: 'Adress',
            dataIndex: 'adress',
            key: 'adress',
          },
          {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
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
              deleteSalary(record._id)
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
                                        List of Salaries
                                    </h3>
                                    
                                </div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
         </div>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}