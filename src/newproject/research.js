import Navigetion from './navi'
import Research1 from './research-features_img.jpg'
import Reone from './resources-img_01.jpg'
import Retwo from './resources-img_02.jpg'
import Rethr from './resources-img_03.jpg'


function Others() {
    return (
        <>
            <div className=" container mainacade">
                <div className="icon"><span> <i class="fa-brands fa-searchengin"></i></span></div>
                <h1>Research</h1>
            </div>

            <div>
                <h1 className='text-dark text-center p-5 fs-1'>Current Research</h1>
                <img src={Research1} className="container-fluid" alt='img'></img>
                <div className='researchone'>
                    <h2>Research with Purpose</h2>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum...

                    </p>
                </div>
            </div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <h1 className='text-dark text-center mt-5'>Resourse</h1>
            <div className='researchtwo text-center'>
                
                <div className='reseone '>
                    <img src={Reone} alt='one'></img>
                    <h4>Economic Development</h4>
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...

                    </p>
                </div>
                <div className='reseone'>
                    <img src={Retwo} alt='one'></img>
                    <h4>Aenean ullamcorper</h4>
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...

                    </p>
                </div>
                <div className='reseone'>
                    <img src={Rethr} alt='one'></img>
                    <h4>Centers and Institutes</h4>
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...

                    </p>
                </div>
            </div>
<Navigetion/>
        </>
    )
}
export default Others;