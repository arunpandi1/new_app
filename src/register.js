import { clear } from '@testing-library/user-event/dist/clear';
import { useState } from 'react';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import {json } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {useNavigate} from 'react-router-dom'

function  Login(){

    const intailstateErrors={
        name:{required:false},
        username:{required:false},
        email:{required:false},
        passward:{required:false},
        confirmpassward:{required:false}

    };

    // const [loading,setloading]=useState(false);

 const [errors,setErrors]=useState(intailstateErrors);



const[Input,setInput]=useState({
    name:"",
    username:"",
    email:"",
    passward:"",
    confirmpassward:""
})
 const handlelogin=(event)=>{
      setInput({...Input,[event.target.name]:event.target.value})
}
var historyone=useNavigate();

const handlesubmit =(event)=>{
    event.preventDefault();
   
    let errors=intailstateErrors;
    let haserrors= false;

    if(Input.name ==""){
        errors.name.required=true;
    }
   
    if(Input.username == ""){
       errors.username.required=true;
       haserrors=true;
    }
    if(Input.email == ""){
       errors.email.required=true;
       haserrors=true;
    }
    if(Input.passward == ""){
       errors.passward.required=true;
       haserrors=true;
    }
    if(Input.confirmpassward == ""){
        errors.confirmpassward.required=true;
    }
   
   
    setErrors(errors);

    var Adds=JSON.parse(localStorage.getItem('Adds')||"[]")



    var Add={
Addname:Input.name,
        Addusername:Input.username,
        Addemail:Input.email,
        Addpassward:Input.passward,
        Addconfirmpassward:Input.confirmpassward
    }
    Adds.push(Add)

    localStorage.setItem('Adds',JSON.stringify(Adds))
    


    if((Input.name != "")&&(Input.username)&&(Input.email)&&(Input.passward)&&(Input.confirmpassward)){
    alert("registration sucessfully");

    historyone('/login')
    }
  
   
     }

  
    return(
        <>
        <div className="backone resgitertwo">
        <div className='loginstepone'>
            <h3 className='text-center welcome'>Registration Form</h3>
            <hr className='boxs'></hr>
            <div>
                <Form className='fs-4 p-3' onSubmit={handlesubmit}>

                <Form.Group className="mt-2">
                    <Form.Label className='textname'>Name:</Form.Label>
                    <Form.Control className='control' name='name' onChange={handlelogin}  type="text" placeholder="" /></Form.Group>
                    { errors.username.required? 
                        (<span className='vaild '>***enter your name</span>) :null}

                    <Form.Group className="mt-2">
                    <Form.Label className='textname'>Username:</Form.Label>
                    <Form.Control className='control' name='username' onChange={handlelogin}  type="text" placeholder="" /></Form.Group>
                    { errors.username.required? 
                        (<span className='vaild '>***enter your username</span>) :null}

                    <Form.Group className="mt-2">
                    <Form.Label className='textname'>Email:</Form.Label>
                    <Form.Control className='control' name='email' onChange={handlelogin} type="email" placeholder="" /></Form.Group>
                    { errors.email.required? 
                    (<span className=' vaild'>***enter your email address</span>) :null}

                    <Form.Group className="mt-2">
                    <Form.Label className='textname'>Passward:</Form.Label>
                    <Form.Control className='control' name='passward'onChange={handlelogin} type="password" placeholder="" /></Form.Group>
                    { errors.passward.required? (
                    <span className='vaild mt-2' >***enter your password</span>):null}

<Form.Group className="mt-2">
                    <Form.Label className='textname'>Confirm Passward:</Form.Label>
                    <Form.Control className='control' name='confirmpassward'onChange={handlelogin} type="password" placeholder="" /></Form.Group>
                    { errors.passward.required? (
                    <span className='vaild mt-2' >***enter your confirm password</span>):null}
                    <br></br>
                    
                    <br></br>

                    <input className='submitbtn' type='submit' value="submit"></input>
                    
                </Form>
                
            </div>
        </div>

              
        </div>

        <Table>
            <thead>
            <tr><th>Username</th>
           <th>email</th>
           <th>passward</th></tr>
           </thead>
           <tbody>
            <tr>
                {/* {Add.map((data)=>{
                    return(
                        <td>{data.Addusername}</td>
                    )
                })} */}
            </tr>
           </tbody>
        </Table>
        </>
    )
}  


export default Login;