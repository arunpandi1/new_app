import { Route, Routes } from 'react-router-dom';
import Sign from './sign.png'
import Arun from "./logoone.png";

import Tamil from "./pexels-yan-krukau-8197534.jpg"
import Tamilone from "./pexels-photo-3059750.jpeg"
import Tamiltwo from "./pexels-photo-6238068.webp"
import Tamilthr from "./pexels-photo-8199761.jpeg"
import Navigetion from './navi';
import './home.css'
import CountUp from "react-countup";
// import { Card } from 'react-bootstrap';
function Home() {


  return (
    <>
      <div className='text-center mt-5' >
        <img src={Arun} alt='logo' width="120px" height="120px"></img>
        <div className='container fs-3'><marquee><span className='text-warning fs-3'><i class="fa-solid fa-user-graduate"></i></span>Autonomous Institution affiliated to <span className='text-warning fs-2'>Jisha University,</span> Approved By AICTE,New York,Accredited By USA</marquee></div>
      </div>


      <div className="container head-one">
        <h5 className="heado">Creative Thinking & Innovation</h5>
        <p className="headt">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, porro! Neque veniam repellendus quaerat dolore
          adipisicing elit. At, porro!  repellendus quaerat dolore mollitia, aliquid sed laudantium  repellendus quaerat dolore mollitia, aliquid sed laudantium, optio
          repella
          explicabo.</p>
        <button className="program">SEE PROGRAMS</button>
        <button className="programone">LEARN MORE</button>
      </div>
      <br></br><br></br><br></br><br></br><br></br>
      <div className="steptwo container">
        <h1 className='welcome'>welcome</h1>
        <p className="headt"> Lorem ipsum dolor sit amet consectetur adipisicing elit. At, porro! Neque veniam repellendus quaerat dolore
          adipisicing elit. At, porro! veniam repellendus quaerat dolore mollitia, aliquid sed laudantium  repellendus quaerat dolore mollitia, aliquid sed laudantium  repellendus quaerat dolore mollitia, aliquid sed laudantium, optio
          repella Lorem ipsum dolor sit a</p>
        <div className="imgone">
          <img src={Sign} alt='sign'></img>
        </div>

      </div>
      <div className='fourr mt-5'>
        <h1 className='mt-5 mb-4 text-black'>Our Courses</h1>

        <div className="stepfour text-black">
          <div className="card" style={{ width: "17rem" }}>
            <img src={Tamil} className="card-img-top" alt="image"></img>
            <div className="card-body">
              <h5 className="card-title">Human Science</h5>
              <p className="card-text">Some quick example text to build on the card title </p>
              <a href="#" className="btn btn-primary">View Details</a>
            </div>
          </div>
          <div className="card" style={{ width: "17rem" }}>
            <img src={Tamilone} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">BioChemistry</h5>
              <p className="card-text">Some quick example text to build on the card title </p>
              <a href="#" className="btn btn-primary">View Details</a>
            </div>
          </div>
          <div className="card" style={{ width: "17rem" }}>
            <img src={Tamiltwo} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">History</h5>
              <p className="card-text">Some quick example text to build on the card title </p>
              <a href="#" className="btn btn-primary">View Details</a>
            </div>
          </div>
          <div className="card" style={{ width: "17rem" }}>
            <img src={Tamilthr} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Earth science</h5>
              <p className="card-text">Some quick example text to build on the card title </p>
              <a href="#" className="btn btn-primary">View Details</a>
            </div>
          </div>

        </div>
        <br></br><br></br><br></br>
        <div>
          <a href="#" className='buttonone'>View all Courses</a></div>

      </div>
      <br></br>
      <div className="counter container-fuild ">

        <div className="row g-0 arun ">
          <p className="col-md-3 text-center fs-2"><span className="spanone"><CountUp start={0} end={39} duration={10}>
          </CountUp>+</span><br></br>Teachers</p>

          <p className="col-md-3 text-center fs-2"><span className="spanone"> <CountUp start={0} end={2600} duration={10}>
          </CountUp>+</span><br></br>Students</p>

          <p className="col-md-3 text-center fs-2"><span className="spanone"> <CountUp start={0} end={56} duration={10}>
          </CountUp>+</span><br></br>Course</p>
 
          <p className="col-md-3 text-center fs-2"><span className="spanone"> <CountUp start={0} end={13} duration={10}>
          </CountUp>+</span><br></br>years Exp.</p>
        </div>


      </div>
      {/* <div className='row g-0 events'>
        <h1 className='text-dark'>Upcoming Events</h1>
        <div className=' eventsone col-md-6 mt-5'>
          <img src={events} alt='image'></img>
          <div className='eventtwo'>
            <h2 className='ms-3 p-3'>Event Heading</h2>
            <p className='ms-5 fs-5 p-1 me-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. At, porro! Neque veniam repellendus quaerat dolore
              adipisicing elit. At, porro!</p>
          </div>

        </div>



        <div className='col-md-2 box1 me-4  mt-5'>
          <h2 className='text-center text-warning pt-2'>05</h2>
          <h5 className='text-center text-warning'>Mar.23</h5>

          <div className='col-md-2 box1 me-4  mt-5'>
            <h2 className='text-center text-warning pt-2'>06</h2>
            <h5 className='text-center text-warning'>Apr.23</h5>
          </div>

          <div className='col-md-2 box1 me-4  mt-5'>
            <h2 className='text-center text-warning pt-2'>15</h2>
            <h5 className='text-center text-warning'>Mar.23</h5>
          </div>
        </div>


        <div className='col-md-4 text-dark ms-5 mt-5'>
          {/* <h1 className='p-1'>Important Events</h1> */}
          {/* <h3>Eestibulim sodeles metus</h3>
          <p>adipisicing elit. At, porro! Neque veniam repellendus quaerat dolore
            adipisicing elit. At, porro</p>

          <div className=' text-dark  mt-5'>
            {/* <h1 className='p-1'>Important Events</h1> */}
            {/* <h3>Eestibulim sodeles metus</h3>
            <p>adipisicing elit. At, porro! Neque veniam repellendus quaerat dolore
              adipisicing elit. At, porro</p>
          </div>
          <div className='text-dark mt-5'> */}
            {/* <h1 className='p-1'>Important Events</h1> */}
            {/* <h3>Eestibulim sodeles metus</h3>
            <p>adipisicing elit. At, porro! Neque veniam repellendus quaerat dolore
              adipisicing elit. At, porro</p>
              </div> */}

        {/* </div> */}
      
    
      <Navigetion />
    </>
  )
}
export default Home;