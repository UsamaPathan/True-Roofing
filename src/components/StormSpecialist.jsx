import React from 'react'
import Button from './Button'

export default function StormSpecialist() {
  return (
    <div>  
        <section className="Licenced-Section">
         <div className="border  border-2 mt-5 align-items-center">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="d-flex flex-column gap-5 align-items-start pt-5">
                            <h6>Storm Specialist</h6>
                            <div><h3>Certified roofing contractor in Florida</h3></div>
                            <div className='pe-5'><h6>State license CCC1332991 ensures every job meets Florida's highest standards. Your roof deserves certified hands.</h6></div>
                        <div className="d-flex gap-2 align-items-center">
            <Button text="Learn More" type="hover1" style={{background: '#dadad9' }} className="border border-2"/>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <figure><img src="" alt="" /></figure>
                    </div>
                </div>
            </div>
            </section>
            </div>
  )
}
