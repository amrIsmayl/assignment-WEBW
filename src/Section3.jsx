import React from 'react'
import { Link } from 'react-router-dom'
import photo from './item.PNG'

export default function Section3() {
    return (
        <>
            <div className=' row py-3 mt-5'>
                <div className='col-md-6 d-flex justify-content-center align-items-center pe-5 pt-5'>
                    <div className=' pe-5 ms-5 BestPlatform'>
                        <div className='section-2-dach-position'>
                            <div className=' dach rounded-1 mb-4'></div>
                        </div>
                        <h2 className=' fw-bold mb-4 Section3-font-size'>Best platform for the <br /> Technological Era</h2>
                        <p className=' text-secondary mb-4 pe-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laudantium expedita, eum corrupti, tempore cum.</p>
                        <Link className=' text-decoration-none text-danger fw-bold' to='https://github.com/amrIsmayl' target="_blank">Learm About Our Success<i className="fa-solid fa-arrow-right-long ps-5 ms-3"></i></Link>
                    </div>
                </div>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <img src={photo} alt="" className=' w-100 shadow border border-white border-5 rounded-4 Overview-scale-img' />
                </div>
            </div>
        </>
    )
}
