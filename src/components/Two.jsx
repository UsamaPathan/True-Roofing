import React from 'react'
import Button from './Button'
import claim from '../assets/images/claim.png'

export default function Two() {
  return (
    <div>
        <section className="Claims">
         <div className="border  border-2 mt-5 align-items-center">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="d-flex flex-column gap-5 align-items-start pt-5 ps-5">
                            <h6 className='text-white'>Assessment</h6>
                            <div><h3 className='text-white'>Free damage inspection and documentation</h3></div>
                            <div className='pe-5'><h6 className='text-white'>We inspect your roof thoroughly and create detailed documentation for your insurance claim. This protects your coverage.</h6></div>
                        <div className="d-flex gap-5 align-items-center">
            <Button text="Schedule Now" type="hover1" style={{background: '#dadad9' }} className="border border-2"/>
            <a href="/" className='d-flex align-items-center gap-3 text-white'>Arrow <i className="fa-solid fa-chevron-right"></i></a>
          </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <figure><img src={claim} alt="" /></figure>
                    </div>
                </div>
            </div>
            </section>
    </div>
  )
}
