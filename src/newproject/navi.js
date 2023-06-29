import Form from 'react-bootstrap/Form';
import Arun from "./logoone.png";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navigetion() {

    const initialstateerror = {

        email: { required: false }
    }

    const [erros, seterrors] = useState(initialstateerror);

    const handlesubmit = (event) => {
        
        event.preventDefault();

        let errors = initialstateerror;
        if (inputs.email == "") {

            errors.email.required = true;
        }

        seterrors(errors);

        // if(inputs.email != ""){
        //    alert("Subscription added Sucessfully");

        // }




    }


    const [inputs, setinputs] = useState({
        email: ""
    })

    const handleinput = (event) => {
        setinputs({ ...inputs, [event.target.name]: event.target.value })

    }


    return (
        <>

            <div className="container-fuild bg-dark acadefive">
                <h2 className="headline text-center" >Newsletter</h2>

                <div className="formover">

                    <form onSubmit={handlesubmit}>
                        <div className="formone">
                            <i class="fa-sharp fa-solid fa-envelope icon-one text-muted"></i><input className="inputtext" onChange={handleinput} name="email" type="email" placeholder="Enter your Email Address"></input>

                        </div>{erros.email.required?(

                            <span className="address">***Invaild email address</span>):null

                        }
                        <div className="formtwo"> <input className="inputsubmit text-white" type="submit" value="Subscribe"></input><i class="fa-solid fa-thumbs-up icon-two "></i></div>
                    </form>
                </div>
                <br></br>
                <br></br><br></br>
                <hr style={{ marginLeft: "70px", marginRight: "70px" }} ></hr>
                <br></br><br></br>
                <div className="row g-2  end container-fuild ms-auto">
                    <div className=" col-md-3 p-3  end-one ">
                        <img src={Arun} alt="logo" width="80px" height="80px"></img>
                        <p className="span">Thiksha <br></br> University</p>
                        <p className="normal">2016 © copyright
                            All rights reserved.</p>
                    </div>

                    <div className=" col-md-2 p-1 g-2  end-two">
                        <h3>Nevigetion</h3>
                        <br></br>
                        <ul className="fs-5 p-1">
                            <li className="nav-item"> <NavLink className="nav-link text-light " to='/' activeStyle={{ Color: 'red' }}>Home</NavLink></li>
                            <li>  <NavLink activeStyle={{ Color: 'green' }} className="nav-link text-light p-1" to='/Admissions'>Admissions</NavLink></li>
                            <li> <NavLink className="nav-link text-light" to='/academics'>Academics</NavLink></li>
                            <li> <NavLink className="nav-link text-light p-1" to='/research '>Research</NavLink></li>
                            <li> <NavLink className="nav-link text-light" to='/pages'>Pages</NavLink></li>
                            <li> <NavLink className="nav-link text-light p-1" to='/Contact'>Contact</NavLink></li>
                        </ul>

                    </div>

                    <div className=" col-md-3 p-1 end-three">
                        <h3>Tweets</h3>
                        <br></br>
                        <p><i class="fa-brands fa-twitter text-warning f-4 p-1 "></i>Welcome to Fog-bridge! Well, that's how it was earlier this week 🌁 What's your favourite photo? Let us know in the… <a href='#' >https://t.co/JzhZYRnZMX</a></p>
                        <p><i class="fa-brands fa-twitter text-warning f-4 p-1"></i>🗣 "You have to tackle the problem in collage to give girls who want to do science the courage to do it." Be inspir…<a href='#' >https://t.co/8iDdFZAz9Z</a></p>
                    </div>

                    <div className=" col-md-3 p-1 end-four">
                        <h3>Contact us</h3>
                        <br></br>
                        <p><i class="fa-solid fa-location-dot text-warning p-1"></i>Address: <span className="text-warning f-4">Thiksha University</span><br></br> Albany, NY, USA. 11001</p>
                        <p><i class="fa-sharp fa-solid fa-envelope p-1 text-warning"></i>Email : info@thiksha.com<br></br>
                            <i class="fa-solid fa-phone p-1 text-warning"></i>Phone : +91 555 668 986</p>
                        <div className="end-icon"><i class="fa-brands fa-facebook text-primary p-2"></i><i class="fa-brands fa-linkedin text-primary p-3"><i class="fa-brands fa-twitter text-info p-4"></i></i><i class="fa-brands fa-square-whatsapp text-success "></i></div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Navigetion