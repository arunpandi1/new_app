import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigetion from './navi';
import Map from './pexels-pixabay-38271.jpg'
import Image from 'react-bootstrap/Image'
import { useState } from 'react';

function Contact() {

  const initialcon={

    name:{required:false},
    emailone:{required:false},
    number:{required:false},
    message:{required:false}

  }
  const [con,setcon]=useState(initialcon);

  const submitcontact =(event)=>{
event.preventDefault();

let con=initialcon;

    if(inputcon.name  = "" ){
      con.name.required =true;
    }
    if(inputcon.emailone = ""){
      con.emailone.required =true;
    }
    if(inputcon.number = ""){
      con.number.required =true;
    }
    if(inputcon.message = ""){
      con.message.required =true;
    }

    setcon(con);

    if((inputcon.name !=  "")&&(inputcon.emailone != "")&&(inputcon.number != "")&&(inputcon.message != "")){
      alert("Welcome our University")
    }

  }

  const [inputcon,setinputcon]=useState({

    name:"",
    emailone:"",
    number:"",
    message:""
  })
  
  const handleinputcon =(event)=>{

         setinputcon({...inputcon,[event.target.name]:event.target.value})
  }



    return (
        <>
            <div className=" container mainacade">
                <div className="icon"> <span><i class="fa-solid fa-address-book"></i></span></div>
                <h1>Contact Us</h1>
            </div>

            <div className="container-fuild text-dark text-center ">
                <h1 className="p-3">Contact Details</h1>
                <p>Welcome to Fog-bridge! Well, that's how it was Lorem earlier this week 🌁 What's your favourite photo?</p>
                <p>who want to do science the courage to do it." Be inspir…<a href='#' >https://t.co/8iDdFZAz9Z</a></p>
            </div>

            <div className="container-fuild bg-secondary row g-0 p-4">
                <div className="col-md-6  p-5">
                    <h1 className='text-center p-1'>Location</h1>
                    <p ><i class="fa-solid fa-location-dot text-warning p-1 fs-3 ms-5"></i><span className="fs-3 ms-1">Address: </span><br></br><span className="text-warning aru f-4">Jisha University</span><br></br><span className='text-center aru'> Albany NY,</span><br></br> <span className='aru'>USA. 11001</span></p>
                    <p><i class="fa-sharp fa-solid fa-envelope p-1 text-warning ms-5"></i><span className="fs-3 ms-1">Email: </span> <br></br><span className='aru'> info@hiksha.com</span><br></br><span className='aru'>admin@jisha</span></p>
                    <p><i class="fa-solid fa-phone p-1 text-warning ms-5"></i><span className="fs-3 ms-1">Phone: </span> <br></br><span className='aru'> +91 555 668 986</span></p>
                    {/* <div className="end-icon text-center"><i class="fa-brands fa-facebook text-primary p-2"></i><i class="fa-brands fa-linkedin text-primary p-3"><i class="fa-brands fa-twitter text-info p-4"></i></i><i class="fa-brands fa-square-whatsapp text-success "></i>
                    </div> */}
                </div>
            
            <div className="col-md-6 contactone  p-5">

<form action='next.php' onSubmit={submitcontact} >
<Form.Group className="mb-4">
       
        <Form.Control type="text" name="name" onChange={handleinputcon} placeholder="Name" />
        { con.name.required?(
        <span style={{color:'red',fontSize:'16px'}}>***Invaild your name</span>):null}
      </Form.Group>
     
      
      <Form.Group className="mb-4" controlId="formBasicEmail">
     
        <Form.Control className="formcontrol" type="email" onChange={handleinputcon} name="emailone" placeholder="Email" />
        { con.emailone.required?
          
          (<span style={{color:'red',fontSize:'16px'}}>***Invaild your email address</span>):null}

        </Form.Group>
        <Form.Group className="mb-4">
       
        <Form.Control type="number" name="number" onChange={handleinputcon} placeholder="Mobilenumber" />
        {con.number.required?
        (<span style={{color:'red',fontSize:'16px'}}>***enter your mobile number</span>):null}
      </Form.Group>
      <Form.Group className="mb-4" >
      
        <textarea className='form-control ' name="message" onChange={handleinputcon}  placeholder='Any other comments?' rows="6" cols="60"></textarea>
       { con.message.required? (<span style={{color:'red',fontSize:'16px'}}>***enter your comments</span>):null}
      </Form.Group>
      <Button variant="warning mt-4 " className=' m-auto' type="submit">
        SUBMIT NOW
      </Button>
</form>
            </div>
<hr></hr>

            <div className="googlemap">
            <img src={Map}  width="80%" height="400px" className="fluid mt-5 map-one" alt="map" ></img></div>
</div>

        <Navigetion/>
        </>
    )
}
export default Contact;

