import Teachone from './our-teachers_01.jpg'
import Teachtwo from './our-teachers_02.jpg'
import Teacht from './our-teachers_03.jpg'
import Teachf from './our-teachers_04.jpg'
import Card from 'react-bootstrap/Card';
import Imageo from './tech 1.png'
import Imaget from './tech 2.png'
// import Imageth from 'tech 4.jpeg'
// import Imagef from 'teac 3.png'

function Newpage() {
  return (
    <>

      <h1 style={{color:'black',marginTop:'80px', textAlign: 'center' }}>Our Teachers</h1>
      <br></br><br></br>
      <div className="row g-0 container-fuild  p-7 over-one">


         <div className="col-md-2 card  over-th">

          <Card.Img className="" variant="bottom" src={Teachone} alt="image" />
        </div>
        <div className="col-md-3 card over-two">
          <Card.Body className='text-dark'>
            <Card.Title className="title-one"><h3>Melissa Baker </h3><span>
              MBA, PhD</span>
            </Card.Title><br></br><hr></hr>
            <Card.Text className="title-two" >
              Syllabus :<span> Economics, Marketing & Finance</span>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted p-2 title-three">
            <i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-linkedin-in"></i><i class="fa-brands fa-square-whatsapp"></i>
            {/* <small >Last updated 3 mins ago</small> */}
          </Card.Footer>
        </div>
      
        <div className="col-md-2 card over-four">

<Card.Img className="" variant="top" src={Teachf} alt="image" />
</div>
<div className="col-md-3 card">
<Card.Body className='text-dark'>
  <Card.Title className="title-one"><h3>Alexander Bennett </h3><span>
    MCA, PhD</span>
  </Card.Title><br></br><hr></hr>
  <Card.Text className="title-two" >
    Syllabus :<span>  Computer Science, Astronomy & Robotics</span>
  </Card.Text>
</Card.Body>
<Card.Footer className="text-muted p-2 title-three">
  <i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-linkedin-in"></i><i class="fa-brands fa-square-whatsapp"></i>
  {/* <small >Last updated 3 mins ago</small> */}
</Card.Footer>
</div>
      </div>
<br></br><br></br><br></br>
      <div className="row g-0 container-fuild  p-7 over-one">


<div className="col-md-2 card  over-th">

 <Card.Img className="" variant="bottom" src={Teacht} alt="image" />
</div>
<div className="col-md-3 card over-two">
 <Card.Body className='text-dark'>
   <Card.Title className="title-one"><h3>Charles Murphy </h3><span>
      PhD,Medical Sciences</span>
   </Card.Title><br></br><hr></hr>
   <Card.Text className="title-two" >
     Syllabus :<span> Physics, Chemistry & Biology</span>
   </Card.Text>
 </Card.Body>
 <Card.Footer className="text-muted p-2 title-three">
   <i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-linkedin-in"></i><i class="fa-brands fa-square-whatsapp"></i>
   {/* <small >Last updated 3 mins ago</small> */}
 </Card.Footer>
</div>

<div className="col-md-2 card over-four">

<Card.Img className="" variant="top" src={Teachtwo} alt="image" />
</div>
<div className="col-md-3 card">
<Card.Body className='text-dark'>
<Card.Title className="title-one"><h3>Raymond Salazar </h3><span>
MFA, PhD</span>
</Card.Title><br></br><hr></hr>
<Card.Text className="title-two" >
Syllabus :<span>  English, Language & Arts</span>
</Card.Text>
</Card.Body>
<Card.Footer className="text-muted p-2 title-three">
<i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-linkedin-in"></i><i class="fa-brands fa-square-whatsapp"></i>
{/* <small >Last updated 3 mins ago</small> */}
</Card.Footer>
</div>
</div>
               
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  )
}
export default Newpage;