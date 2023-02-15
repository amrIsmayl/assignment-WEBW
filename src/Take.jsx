import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import photo1 from './2379004.PNG'
import photo2 from './2204531.PNG'
import photo3 from './99999.PNG'

export default function Take() {
    return (
        <>
            <div className=' py-5 mt-3 mb-4'>
                <h2 className='text-center fw-bold pb-5'>Don't Just Take <br /> our Word for it!</h2>
                <div className=' row py-3'>
                    <div className=' col-md-3 col-sm-6 text-center'>
                        <h2 className=' fw-bold text-danger opacity-75'>570</h2>
                        <p className=' fw-bold'>Download</p>
                    </div>
                    <div className=' col-md-3 col-sm-6 text-center'>
                        <h2 className=' fw-bold text-danger opacity-75'>570</h2>
                        <p className=' fw-bold'>Active User</p>
                    </div>
                    <div className=' col-md-3 col-sm-6 text-center'>
                        <h2 className=' fw-bold text-danger opacity-75'>570</h2>
                        <p className=' fw-bold'>Positive Feedback</p>
                    </div>
                    <div className=' col-md-3 col-sm-6 text-center'>
                        <h2 className=' fw-bold text-danger opacity-75'>570</h2>
                        <p className=' fw-bold'>+ ratig</p>
                    </div>

                </div>

                <div className=' row'>

                    <div className=' col-lg-6 d-flex justify-content-center align-items-center shadow p-0'>

                        <div className=' w-100 bg-white p-5'>
                            <Carousel fade>
                                <Carousel.Item>
                            
                            
                                    <div className=" mb-3 carousel-width h-25 ">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={photo1} className="img-fluid rounded w-100 height-img " alt="img"/>
                                            </div>
                                            <div className="col-md-8 ps-5">
                                                <div className="card-body">
                                                    <h5 className="card-title pb-2 Take-text-margin">Ahmed Ali</h5>
                                                    <span>CEO Company</span>
                                                    <p className="card-text pt-3 Take-font-size">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officiis numquam architecto, obcaecati voluptatibus ratione iure error asperiores.</p>
                                                    <i className="fa-solid fa-star text-color mx-1"></i><i className="fa-solid fa-star text-color mx-1"></i><i className="fa-solid fa-star text-color mx-1"></i><i className="fa-solid fa-star text-color mx-1"></i><i className="fa-solid fa-star text-color mx-1"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </Carousel.Item>
                                <Carousel.Item>
                            
                                    <div className=" mb-3 carousel-width h-25 ">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={photo2} className="img-fluid rounded w-100 height-img" alt="..."/>
                                            </div>
                                            <div className="col-md-8 ps-5">
                                                <div className="card-body">
                                                    <h5 className="card-title pb-2 Take-text-margin">Ali Abdo</h5>
                                                    <span>CEO Company</span>
                                                    <p className="card-text pt-3 Take-font-size">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officiis numquam architecto, obcaecati voluptatibus ratione iure error asperiores.</p>
                                                    <i className="fa-solid fa-star text-color mx-1"></i><i className="fa-solid fa-star text-color mx-1"></i><i className="fa-solid fa-star text-color mx-1"></i><i className="fa-solid fa-star text-color mx-1"></i><i className="fa-solid fa-star text-color mx-1"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            
                                    
                                </Carousel.Item>
                                <Carousel.Item>
                            
                                    <div className=" mb-3 carousel-width h-25 ">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={photo3} className="img-fluid rounded w-100 height-img" alt="..."/>
                                            </div>
                                            <div className="col-md-8 ps-5">
                                                <div className="card-body">
                                                    <h5 className="card-title pb-2 Take-text-margin">moaz ismayl</h5>
                                                    <span>CEO Company</span>
                                                    <p className="card-text pt-3 Take-font-size">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officiis numquam architecto, obcaecati voluptatibus ratione iure error asperiores.</p>
                                                    <i className="fa-solid fa-star text-color mx-1"></i><i className="fa-solid fa-star text-color mx-1"></i><i className="fa-solid fa-star text-color mx-1"></i><i className="fa-solid fa-star text-color mx-1"></i><i className="fa-solid fa-star text-color mx-1"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            
                                    
                                </Carousel.Item>
                            </Carousel>
                        </div>

                    </div>

                    <div className=' col-lg-6 d-flex align-items-center ps-5 Take-section-3 Take-text-centr Take-padding'>
                        <div>
                            <h2 className=' fw-bold mb-3'>Grow Your Business and<br />join Our Happy Users</h2>
                            <p className=' mb-4 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos nulla ducimus fugit hic nisi, consectetur quos commodi, suscipit sit quasi aspernatur modi necessitatibus nobis porro maiores deleniti quae assumenda quam explicabo eveniet placeat. Amet, eveniet. <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, id?</p>
                            <button className=' btn btn-danger px-5 stvdy'>About us</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
