 import './home.css'
 import events from './events.jpeg'
 
 function Pages(){
    return(
        <>
        <div className=" container mainacade">
        <div className="icon"> <span><i class="fa-solid fa-recycle"></i></span></div>
            <h1>Pages</h1>
        </div>
        
          <div className='row g-0 events'>
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

          <div className=' box1 me-4  mt-5'>
            <h2 className='text-center text-warning pt-2'>06</h2>
            <h5 className='text-center text-warning'>Apr.23</h5>
          </div>

          <div className=' box1 me-4  mt-5'>
            <h2 className='text-center text-warning pt-2'>15</h2>
            <h5 className='text-center text-warning'>Mar.23</h5>
          </div>
        </div>


        <div className='col-md-4 text-dark ms-5 mt-5 '>
        
           <h3>Eestibulim sodeles metus</h3>
          <p className='fs-5'>adipisicing elit. At, porro! Neque
            adipisicing elit. At, porro</p>

           <div className=' text-dark mt-4'>
           
            <h3>Eestibulim sodeles metus</h3>
            <p  className='fs-5'>adipisicing elit. At, porro! Neque 
              adipisicing elit. At, porro</p>
          </div>
          <div className='text-dark mt-4'>
        
            <h3>Eestibulim sodeles metus</h3>
            <p  className='fs-5'>adipisicing elit. At, porro! Neque 
              adipisicing elit. At, porro</p>
              </div>

        </div>
      </div>
        </>
    )
}
export default Pages;