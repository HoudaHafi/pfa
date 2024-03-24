import logo from './logo.svg';
import './App.css';
import Home from './views/Home/home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import About from './views/About/about';
import Signup from './views/Signup/signup';
import Signin from './views/Signin/signin';
import Listcategories from './views/ListCategories/listcategories';
import Ajoutcategories from './views/AjoutCategories/ajoutcategories';
import Listprojets from './views/ListProjets/listprojets';
import Ajoutprojets from './views/AjoutProjets/ajoutprojets';
import Listconges from './views/ListConges/listconges';
import Ajoutconges from './views/AjoutConges/ajoutconges';
import Listtasks from './views/ListTasks/listtasks';
import Ajouttasks from './views/AjoutTasks/ajouttasks';
import Contact from './views/Contact/contact';
import Listsalary from './views/ListSalary/listsalary';
import Updatecategory from './views/UpdateCategory/updatecategory';
import Updateproject from './views/UpdateProject/updateproject';
import Projects from './views/Projects/projects';
import Updatetask from './views/UpdateTask/updatetask';
import Updateconge from './views/UpdateConge/updateconge';
import Updateprofile from './views/UpdateProfile/updateprofile';
import Profile from './views/Profile/profile';
import Details from './views/Details/details';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Contact/>} path='/contact'/>
      <Route element={<Projects/>} path='/projects'/>
      <Route element={<Signup/>} path='/signup'/>
      <Route element={<Signin/>} path='/signin'/>
      <Route element={<Listcategories/>} path='/listcategories'/>
      <Route element={<Ajoutcategories/>} path='/ajoutcategories'/>
      <Route element={<Listprojets/>} path='/listprojets'/>
      <Route element={<Ajoutprojets/>} path='/ajoutprojets'/>
      <Route element={<Listconges/>} path='/listconges'/>
      <Route element={<Ajoutconges/>} path='/ajoutconges'/>
      <Route element={<Listtasks/>} path='/listtasks'/>
      <Route element={<Ajouttasks/>} path='/ajouttasks'/>
      <Route element={<Listsalary/>} path='/listsalary'/>
      <Route element={<Updatecategory/>} path='/updatecategory/:id'/>
      <Route element={<Updateproject/>} path='/updateproject/:id'/>
      <Route element={<Updatetask/>} path='/updatetask/:id'/>
      <Route element={<Updateconge/>} path='/updateconge/:id'/>
      <Route element={<Updateprofile/>} path='/updateprofile/:id'/>
      <Route element={<Profile/>} path='/profile'/>
      <Route element={<Details/>} path='/details/:id'/>

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
