import React from 'react'
import { Link } from 'react-router-dom';

export default function Section2() {
    return (
        <>
            <div className='row pt-5 mt-5 section-2'>
                <div className=' col-md-6 d-flex justify-content-center align-items-center pe-5 section-2-right mb-4'>
                    <div className='section-2-right pe-5'>
                        <div className=' section-2-dach-position'>
                            <div className=' dach rounded-1 mb-4'></div>
                        </div>
                        <h2 className=' fw-bold mb-4'>The best business <br /> solution for you</h2>
                        <p className=' text-secondary mb-4 pe-3 section-2-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laudantium expedita, eum corrupti, tempore cum fugit ad vitae dignissimos temporibus quo perferendis id beatae asperiores deserunt. Dolorem autem harum tempore recusandae inventore, quasi alias amet beatae facilis ipsa, soluta voluptates eaque aliquid, aut ea assumenda?</p>
                        <Link className=' text-decoration-none text-danger fw-bold' to='https://github.com/amrIsmayl' target="_blank">Learm About Our Success<i className="fa-solid fa-arrow-right-long ps-5 ms-3"></i></Link>
                    </div>
                </div>

                <div className='section-2-right  col-md-6 row '>
                    <div className=' col-lg-6'>
                        <div className=' section-2-logo'>
                            <div className=' logo color-1 d-flex justify-content-center align-items-center mb-3'>
                                <i className="fa-solid fa-face-smile text-white fs-3"></i>
                            </div>
                        </div>
                        <h6 className=' fw-bold mb-3'>Scale Your Activity</h6>
                        <div className=' section-2-dach-position'>
                            <div className=' dach-1 rounded-1 mb-3'></div>
                        </div>
                        <p className=' text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in beatae eligendi blanditiis ad magni! Officia.</p>
                    </div>

                    <div className=' col-lg-6'>
                        <div className=' section-2-logo'>
                            <div className=' logo color-2 d-flex justify-content-center align-items-center mb-3'>
                                <i className="fa-brands fa-bootstrap text-white fs-3"></i>
                            </div>
                        </div>
                        <h6 className=' fw-bold mb-3'>Bootcamps</h6>
                        <div className=' section-2-dach-position'>
                            <div className=' dach-1 rounded-1 mb-3'></div>
                        </div>
                        <p className=' text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in beatae eligendi blanditiis ad magni! Officia.</p>
                    </div>

                    <div className=' col-lg-6'>
                        <div className=' section-2-logo'>
                            <div className=' logo color-3 d-flex justify-content-center align-items-center mb-3'>
                                <i className="fa-brands fa-fantasy-flight-games text-white fs-3"></i>
                            </div>
                        </div>
                        <h6 className=' fw-bold mb-3'>Hight Quality</h6>
                        <div className=' section-2-dach-position'>
                            <div className=' dach-1 rounded-1 mb-3'></div>
                        </div>
                        <p className=' text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in beatae eligendi blanditiis ad magni! Officia.</p>
                    </div>

                    <div className=' col-lg-6'>
                        <div className=' section-2-logo'>
                            <div className=' logo color-4 d-flex justify-content-center align-items-center mb-3'>
                                <i className="fa-solid fa-face-smile text-white fs-3"></i>
                            </div>
                        </div>
                        <h6 className=' fw-bold mb-3'>Get Certifcatiob</h6>
                        <div className=' section-2-dach-position'>
                            <div className=' dach-1 rounded-1 mb-3'></div>
                        </div>
                        <p className=' text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in beatae eligendi blanditiis ad magni! Officia.</p>
                    </div>

                </div>
            </div>
        </>
    )
}
