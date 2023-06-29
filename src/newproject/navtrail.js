import { Collapse } from "bootstrap";

 export default function Navnew(){

return(
    <>
    <nav className="navbar">
        <div className="container-fluid">
            <a>navbar</a>
            <button className="" data-bs-toggle="Collapse" data-bs-target="#navbarnew"><i class="fa-solid fa-bars"></i></button>

            <div className="collapse navbar-collapse" id="navbarnew">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">home</li>
                    <li className="nav-item">home</li>
                    <li className="nav-item">home</li>
                    <li className="nav-item">home</li>
                </ul>
            </div>
        </div>
    </nav>
    </>
)

}