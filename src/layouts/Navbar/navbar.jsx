import { Link } from 'react-router-dom';
import header from '../../assets/img/hero/header.jpg'
import { useEffect, useState } from 'react';
import logo from '../../assets/img/hero/logo.png'
import { Button } from 'antd';

export default () => {
    const style = {
        backgroundImage: `url(${header})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      };

      const [user, setuser] = useState({})

      useEffect(() => {
       setuser(JSON.parse(localStorage.getItem("user")))
      }, [])
      
      const [showLogoutIcon, setShowLogoutIcon] = useState(false);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");
    // Redirect to the login page
    window.location.href = "/signin";
  };
 // const handleUsernameClick = () => {
   // setShowLogoutIcon(!showLogoutIcon);
  //};

  const handleLogoutClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling to the handleUsernameClick
    handleLogout();
  };
    return(
        <>
         <header className="header-section" style={style}>
  <div className="header__info">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="header__info-left">
            <ul>
              <li><span className="icon_phone" /> (+216) - 52 012 022</li>
              <li><span className="fa fa-envelope" /> contact@itgust-group.tn</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
     

<div className=" header__menu pr-1 pt-0 " >
            <ul >
              {
                user
                ?
                <div className="m-0 " style={{color:"white" , }}>
                 <li><a ><span className="fa fa-user mr-2"/>{user?.user?.fullName}</a>
               <ul className="dropdown m-0" >
                <li><Link to="/profile">Profile</Link></li>
                <li style={{cursor:"pointer"}}onClick={handleLogoutClick}><a>Logout </a></li>
               
               </ul>
                </li>
                </div>
                :
                <li><Link to="/signup"><span className="fa fa-user" />Login/ Register</Link></li>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3">
        <div className="header__logo">
        <img src={`${logo}`} alt width="50px"  height="50px"/>
        </div>
      </div>
      <div className="col-lg-7 col-md-7">
        <nav className="header__menu">
          <ul>
            <li><Link to='/'><a>Home</a></Link></li>
            <li><Link to='/about'><a>About</a></Link></li>
            <li><a href="#">Dashboard</a>
              <ul className="dropdown">
                <li><Link to='/listcategories'><a>List of categories</a></Link></li>
                <li><Link to='/ajoutcategories'><a>Add categories</a></Link></li>
                <li><Link to='/listprojets'><a>List of projects</a></Link></li>
                <li><Link to='/ajoutprojets'><a>Add projects</a></Link></li>
                <li><Link to='/listtasks'><a>List of tasks</a></Link></li>
                <li><Link to='/ajouttasks'><a>Add tasks </a></Link></li>
                <li><Link to='/listconges'><a>List of holidays</a></Link></li>
                <li><Link to='/listsalary'><a>List salaries</a></Link></li>
              </ul>
            </li>
            <li><Link to='/projects'><a>Projects</a></Link></li>
            <li><Link to='/contact'><a>Contact</a></Link></li>
          </ul>
        </nav>
      </div>
    </div>
    <div className="canvas__open">
      <span className="fa fa-bars" />
    </div>
  </div>
</header>

        
        </>
    )
}