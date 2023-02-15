import React from 'react'

export default function Footer() {
    return (
        <>
            <div className=' container-fluid '>
                <div className=' row bg-dark text-white pt-5 Footer-text'>

                    <div className=' offset-md-1 col-md-3 pe-5 Footer-text'>
                        <h1 className=' font-style pb-3'>Study</h1>
                        <p className=' pe-4 Footer-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero atque recusandae porro eveniet nostrum!</p>
                    </div>
                    <div className=' col-md-3 pe-5 pt-4 Footer-section-2 Footer-text'>
                        <p className=' fw-bold pb-3'>Nos Services</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio soluta necessitatibus debitis quod dicta corporis.</p>
                    </div>
                    <div className=' col-md-4 Footer-bg-dark bg-dark pt-4'>
                        <p className=' fw-bold pb-3'>Sign up for offers!</p>
                        <div className=' position-relative'>
                            <input className=' position-absolute top-0 start-0 end-0 rounded-pill py-1 border-0 px-4' placeholder='Mail' type="text" />
                            <button className=' text-white px-5 py-1 border-0 position-absolute end-0 top-0 show-buttom bg-danger rounded-pill Footer-padding '>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
