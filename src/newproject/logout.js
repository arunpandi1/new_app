import { useNavigate } from "react-router-dom";
import React from "react";

const Logout = () => {

  const historylogout = useNavigate();
 const  Out=()=>{


 
   
    localStorage.removeItem('logout')
 

 historylogout('/');
 window.location.reload(true)
 }
 
 const In=()=>{


 }
  

  
      return (
        <>
        <div className="text-center">
          <h3>Reset</h3>
          <button className='submitbtn' onClick={Out}>yes</button>
          <button className='submitbtn' onClick={In}>No</button>
          </div>
        </>
      );
    };
  export default Logout;