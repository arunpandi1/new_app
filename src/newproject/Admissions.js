import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navigetion from './navi';

function About(){
    return(
        <>
    <div className=" container mainacade">
        <div className="icon"> <span><i class="fa-solid fa-book-open-reader"></i></span></div>
            <h1>Admissions</h1>
            <div className='marq fs-5 mt-3 container '><marquee><span className='text-warning fs-3'><i class="fa-solid fa-user-graduate"></i></span>  2023   <span className='text-warning fs-3'>ADMISSION </span>OPEN NOW GET <span className='text-warning'>REGISTRATION!!!</span></marquee></div>
        </div>


<div className='loginform container'> 

<h1 className='text-center p-4'><i class="fa fa-award  text-warning texticon"></i><br></br>Admission Form</h1>
    <hr className='ms-5 me-5 mb-5' ></hr>
    <Form className='row g-3 container'>
        <div className='col-md-5 ps-5'>
    <Form.Group className="mb-3" controlId="">
    <Form.Label>Select Course</Form.Label>
    <Form.Select aria-label="Default select example">
      <option placeholder="select course" className='text-secondary'>Select course</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select></Form.Group>
    <Form.Group className="mb-3" controlId="">
        <Form.Label>Jion Date</Form.Label>
        <Form.Control type="date" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the Fisrtname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the Lastname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="Enter the Mobilenumber" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="Date" placeholder="DOB" />
      </Form.Group></div>
<div className='col-md-2'></div>
      <div className='col-md-5  pe-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="city" /></Form.Group>
       <Form.Group className='mb-3'>
        
         <Form.Control type="text" placeholder="state" />
</Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Education</Form.Label>
        <Form.Control type="text" placeholder="Education" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <textarea className='form-control '  placeholder='Any other comments?' rows="6" cols="60"></textarea>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Upload your Marksheet</Form.Label>
        <Form.Control type="file" placeholder="submit your certificate" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Upload your photo</Form.Label>
        <Form.Control type="file" placeholder="Education" />
      </Form.Group>
      </div>
     
      <Button variant="warning mt-5 mb-5 fs-5" className='col-md-2 m-auto' type="submit">
        SUBMIT NOW
      </Button>
    </Form>
    </div>

    <Navigetion/>
    </>
  )
}


export default About;