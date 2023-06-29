import {NavLink, Outlet} from "react-router-dom";
import Uni from './welcome-img.jpg'
import Navigetion from "./navi";
import CountUp from "react-countup";


const Academics=()=>{
    return(
        <>
        <div className=" container mainacade">
        <div className="icon"> <span><i class="fa-solid fa-users"></i></span></div>
            <h1>Academics</h1>
        </div>
        <div className=" container acamain">
<div className="acaone">
    <h1>What we are</h1>
    <p>Lorem ipsum  quaerat adipisicing elit. At, porro! veniam repellendus a, aliquidt dolore mollitia, aliquid sed laudanre mollitia, aliquid sed laudantium, optio
            adipisicing elit. At, porro! veniam rsicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, porro! Nero! veniam repellendus a, aliquid sed laudantium  repellaliquid sed laudantium  repellendus quaerat dolore mollitia, aliquid sed laudantium, optio
            repella</p>
        <a  href="#" className="btn btn-primary">View all Details</a>
</div>
<div className="acatwo">
    <img className="imagee img-fluid w-100 " src={ Uni} alt='imageuni'></img>
</div>
</div>
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
        
       <hr style={{color:"rgb(53, 80, 30)",marginLeft:"70px"  ,marginRight:"70px"}}></hr>

        <nav className="acade">
            <ul>
           <li> <NavLink className="acadethree" to="another" activeStyle={{color:'red'}} >Our Teachers</NavLink></li>
            <li><NavLink  className="acadefour" to="trail">Our Blog</NavLink></li>
            </ul>
        </nav>
 <Outlet/>
<br></br>

<Navigetion/>

   </>
    );
}
export default Academics;