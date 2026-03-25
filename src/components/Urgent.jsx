import React, { useState } from 'react'
import urgent from '../assets/images/urgent.png'

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
         <div className="border  border-2 mt-5 align-items-center">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="d-flex flex-column gap-5 align-items-start pt-5">
                            <h6>Local expertise</h6>
                            <div><h3>Certified roofing contractor in Florida</h3></div>
                            <div className='pe-5'><h6>State license CCC1332991 ensures every job meets Florida's highest standards. Your roof deserves certified hands.</h6></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <figure><img src={urgent} alt="" /></figure>
                    </div>
                </div>
            </div>
            </section>

        </div>
        </section>
  
    </div>
  )
}
