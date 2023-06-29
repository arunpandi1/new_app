import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import {Route,Routes} from 'react-router-dom'
import Login from './register';


function Loginone() {

    const intiallogin = {
        username2: { required: false },

        passward2: { required: false },

        username2:{deva:false},
        passward2:{deva:false}
    };

    const [login, setlogin] = useState(intiallogin);
    var history=useNavigate();

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
            if(user.Addusername == loginput.username2){

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

            // localStorage.setItem('logout','logout')
            // history('/main');
        }
        setlogin(login);

    }
  
    return (
        <>
            <div className='firstpage'>

           
               {
(()=>{

    if(localStorage.getItem('logout')){
        return <button className='submitbtn'>logout</button>
    }

    else{
         return <Form onSubmit={loginsubmit}>
        <div>
        <Form.Group className="mt-2">
            <Form.Label className='textname'>Username:</Form.Label>
            <Form.Control className='control' name='username2' onChange={handlelogin} type="text" placeholder="Username" /></Form.Group>
        {login.username2.required ?
            (<span className='vaild '>***Enter your username</span>) : null}
        {login.username2.deva?   
            (<span className='vaild '>***Invaild username</span>):null}
         <Form.Group className="mt-2">
             <Form.Label className='textname'>Passward:</Form.Label>
             <Form.Control className='control' name='passward2' type="password" onChange={handlelogin} placeholder="password"/></Form.Group>
         {login.passward2.required ? (
            <span className='vaild mt-2' >***Enter your password</span>) : null}
{login.passward2.deva?
           ( <span className='vaild '>***Invaild passward</span>):null}



        <input className='submitbtn' type='submit' value="Sign In"></input>

        <li  className='registerone'> <NavLink  className="aa" to="/register" >New user? Register Now!</NavLink></li></div>
    </Form>
}
})()

                    } 

                    </div>
      
            
        </>
    )
}

export default Loginone;
