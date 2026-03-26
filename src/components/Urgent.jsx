import React, { useState } from 'react'
import urgent from '../assets/images/urgent.png'
import Button from "./Button";

export default function Urgent() {
  return (
    <div>
        <section className='Licenced-Section p-5'>
        <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 ">
                <p>Urgent</p>
                <div className='d-flex align-items-lg-center '><h2>Storm damage? We respond fast</h2></div>
             <div className="d-flex align-items-md-center">
            <h4>Hurricane or severe weather hit your roof? Don't wait. We provide emergency inspections and immediate repairs.</h4>
            </div>
               
             </div>
        <section className="Licenced-Section">
         <div className="border  border-2 mt-2 align-items-center">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="d-flex flex-column gap-5 align-items-start pt-5">
                            <h6>Emergency</h6>
                            <div><h3>Get emergency roof assessment</h3></div>
                            <div className='pe-5'><h6>Call 1-800-798-1636 now for immediate assistance. We're standing by to help.</h6></div>
                            <div className="d-flex align-items-center">
                             <Button text="Call Now" type="hover1" style={{background: '#dadad9' }} className="border border-2"/> <i className="fa-solid fa-chevron-right"></i>
                       </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <figure className=''><img src={urgent} alt="" /></figure>
                    </div>
                </div>
            </div>
            </section>

        </div>
        </section>
  
    </div>
  )
}
