import React from "react";
import Loginone from "../login";
import Login from "../register";
import Home from "./Home";
import About from "./Admissions";
import Academics from "./academics";
import Others from "./research";
import Pages from "./pages";
import Contact from "./Contact";
import Newpage from "./another";
import Trail from "./trail";
import Mypage from "./main";
import {Routes,Route, Link} from 'react-router-dom'


function Appone(){

    return(
        <>


        {/* <Loginone/> */}
        {/* <nav>
            <button><Link to='/'>login</Link></button>
            {/* <button><Link to='/register'>login</Link></button> */}
            
        {/* </nav> */}


<Routes>

    {/* <Route path="/login" element={<Loginone></Loginone>}></Route>
    <Route path='/register' element={<Login></Login>}></Route> */}

    <Route path='/main' element={<Mypage></Mypage>}>
    {/* <Route path='/' element={<Home></Home>} />
        <Route path='Admissions' element={<About></About>} />
        <Route path='academics' element={<Academics></Academics>}>
          <Route path='another' element={<Newpage></Newpage>}></Route>
          <Route path='trail' element={<Trail />}></Route>
        </Route>

        <Route path='research' element={<Others></Others>} />
        <Route path='pages' element={<Pages></Pages>} />
    <Route path='contact' element={<Contact></Contact>} /> */}
    </Route> 
</Routes>
        
        </>
    )
}

export default Appone;