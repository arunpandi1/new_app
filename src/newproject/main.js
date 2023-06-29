import { Routes, Route,Link, Outlet } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./Admissions";
import Academics from "./academics";
import Others from "./research";
import Pages from "./pages";
import Contact from "./Contact";
import Newpage from "./another";
import Trail from "./trail";
import Arun from "./logoone.png";
import Login from "../register";
// import Loginone from "../login";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import Logout from './logout'

function Loginone() {

 
  // import {Route,Routes} from 'react-router-dom'
  // import Login from './register';
  
  
  // const Loginone = ()=> {
  
      const intiallogin = {
          username2: { required: false },
  
          passward2: { required: false },
  
          username2:{deva:false},
          passward2:{deva:false}
      };
  
      const [login, setlogin] = useState(intiallogin);


      var historylog=useNavigate();
  
      const [loginput, setloginput] = useState({
          username2: "",
          passward2: ""
      });
  
      const handlelogin = (event) => {
  
          setloginput({ ...loginput, [event.target.name]: event.target.value })
      }
  
      
  
      const loginsubmit = (event) => {
          event.preventDefault();
  
          let login = intiallogin;
          var Adds=JSON.parse(localStorage.getItem('Adds'));
  
          var i=0;
          for(var user of  Adds){
              if(user.Addusername === loginput.username2){
                
  
                i++;
              }
            
          }
        if(i==1){
          // alert('sucess')
          login.username2.required = false;
        }
        else{
          // alert("illaa")
          login.username2.deva= true;
      }
     
      var i=0;
      for(var user of  Adds){
          if(user.Addpassward == loginput.passward2){
  
            i++;
          }
        
      }
    if(i==1){
      // alert('sucess')
      login.passward2.deva= false;
    }
    else{
      // alert("illaa")
      login.passward2.deva = true;
  }
  
          if (loginput.username2 == "") {
              login.username2.required = true;
  
          }
          if (loginput.passward2 == "") {
              login.passward2.required = true
          }
  
      
         
          if ((loginput.username2 != "") && (loginput.passward2 != "") && (user.Addusername == loginput.username2) && (user.Addpassward == loginput.passward2)) {
                alert("loginsucessfully")
  
              localStorage.setItem('logout','logout')
              historylog('/Home');
          }
          setlogin(login);
  
      
      }

    
  return (


    <>
    
    <div className="backone">
{
    (()=>{

           if(localStorage.getItem('logout')){ 
    
    return <div>

      <nav className="navbar navbar-expand-lg new">
        <div className="container-fuild new-oneone">
          <a class="navbar-brand text-light fs-2 pe-5" href="#"><img src={Arun} alt='logo' width='50px' height='50px'></img>Ajisha University</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"  aria-expanded="false" aria-label="Toggle navigation">
          <span><i class="fa-solid fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  fs-4">
              <li className="nav-item"> <Link className="nav-link text-light" activeStyle={{color:'red',backgroundcolor:'black' }} to='/Home'>Home</Link></li>
              <li>  <Link activeStyle={{ Color: 'green' }} className="nav-link text-light" to='/Admissions'>Admissions</Link></li>
              <li> <Link className="nav-link text-light" to='/academics'>Academics</Link></li>
              <li> <Link className="nav-link text-light" to='/research'>Research</Link></li>
              <li> <Link className="nav-link text-light" to='/pages'>Pages</Link></li>
              <li> <Link className="nav-link text-light" to='/Contact'>Contact</Link></li>
              <li> <Link className="nav-link text-light"  to='logout'>logout</Link></li>
            </ul></div>
        </div></nav>
{/* <Home/> */}
        </div>
      
}
else{
        return  <Form onSubmit={loginsubmit}>
        
        <div className='loginstepone'>
 <h1 className='text-center welcome'>Welcome</h1>
 

 <hr className='boxs'></hr>
        <Form.Group className="mt-2">
            <Form.Label className='textname'>Username:</Form.Label>
            <Form.Control  className='control'  name='username2' onChange={handlelogin} type="text" placeholder="Username"></Form.Control>
            </Form.Group>
        {login.username2.required ?
            (<span className='vaild '>***Enter your username</span>) : null}
        {login.username2.deva?   
            (<span className='vaild '>***Invaild username</span>):null}
        <Form.Group className="mt-2">
            <Form.Label className='textname'>Passward:</Form.Label>
            <Form.Control className='control' name='passward2' type="password" onChange={handlelogin} placeholder="password"/></Form.Group>
        {login.passward2.required ?  
         (
            <span className='vaild mt-2' >***Enter your password</span>)
             : null}
{login.passward2.deva?
           ( <span className='vaild '>***Invaild passward</span>):null}

        <input className='submitbtn' type='submit' value="Sign In"></input>

        <li  className='registerone'> <Link  className="aa" to="/register" >New user? Register Now!</Link></li></div>
    </Form>
}

})()
    
}



      <Routes>

      {/* {/* <Route path="/login" element={<Loginone></Loginone>}></Route> */}
    <Route path='/register' element={<Login></Login>}></Route>
      <Route path='/Home' element={<Home></Home>} />
        <Route path='/Admissions' element={<About></About>} />
        <Route path='/academics' element={<Academics></Academics>}>
          <Route path='another' element={<Newpage></Newpage>}></Route>
          <Route path='trail' element={<Trail />}></Route>
        </Route>

        <Route path='/research' element={<Others></Others>} />
        <Route path='/pages' element={<Pages></Pages>} />
        <Route path='/contact' element={<Contact></Contact>} /> 
        <Route path='/logout' element={<Logout></Logout>} /> 

     </Routes>
    </div>

    </>
  )



  }





export default Loginone;