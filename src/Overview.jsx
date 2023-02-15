import React from 'react'
import photo from './item.PNG'
import Carousel from 'react-bootstrap/Carousel';


export default function Overview() {
    return (
        <>
            <div className=' py-5 my-3 text-center Overview'>
                <p className=' text-secondary mt-5 pt-5 Overview'>Advanced Customer Service Platform</p>
                <h2>Platform Overview</h2>
                <div className=' d-flex justify-content-center pb-4'>
                    <div className=' w-75'>
                        <div className=' d-flex justify-content-center mb-2'>
                            <p className='w-75 text-secondary font-s px-5 Overview'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatum sequi, illo culpa eligendiincidunt sed perferendis natus asperiores molestiae dolorem debitis! <br /> Lorem ipsum dolor sit amet. Iste iure sapiente nihil deserunt praesentium?</p>
                        </div>

                        <div>
                            <Carousel fade>
                                <Carousel.Item>
                                    <div className=' pt-3'>
                                        <img src={photo} alt="" className='Overview-scale-img w-100 border border-white border-5 rounded-4 shadow' />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className=' pt-3'>
                                        <img src={photo} alt="" className='Overview-scale-img w-100 border border-white border-5 rounded-4 shadow' />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className=' pt-3'>
                                        <img src={photo} alt="" className='Overview-scale-img w-100 border border-white border-5 rounded-4 shadow' />
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
