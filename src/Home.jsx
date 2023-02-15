import React from 'react'
import photo from './item.PNG'

export default function Home() {
  return (

    <>
      <div className=' home-screen row pt-5 my-5'>
        <div className=' col-md-6 d-flex justify-content-center align-items-center'>
          <div>
            <h6>Advanced platform</h6>
            <h2 className=' fw-bold'>Take your team <br />to the next level</h2>
            <p className=' home-p pe-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam ad praesentium?</p>
            <button className=' home-button btn btn-danger px-5 my-2 stvdy'>About us</button>
          </div>
        </div>
        <div className='col-md-6 shadow border border-white border-5 rounded-4 p-0'>
          <img src={photo} alt="" className=' w-100 home-img' />
        </div>
      </div>
      <div className=' home-brands row py-5 d-flex justify-content-center '>
        <h3 className=' offset-md-1 col-md-2 col-sm-5 fst-italic fw-bold'>shopify</h3>
        <h3 className=' col-md-2 col-sm-5 font-style'>nearpod</h3>
        <h3 className=' col-md-2 col-sm-5 fw-bold'>Bench</h3>
        <h3 className=' col-md-2 col-sm-5 fw-bold'>Forbes</h3>
        <h3 className=' col-md-2 col-sm-5'>bumble</h3>
      </div>
    </>
  )
}
