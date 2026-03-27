import React from 'react'

export default function ServicesArea() {
  return (
    <div>
        <section className="Services-Area bg-white ">
            <div className="container">
                <div className="d-flex mb-3 flex-column gap-2 align-items-start pt-5">
                            <h6 className='text-black'>Service</h6>
                            <div><h2 className='text-black'>Areas</h2></div>
                            <div className='pe-5 text-black'><h4>We cover Central Florida and surrounding counties.</h4></div>
                
                        </div>
                        <div className="row g-3">
                            <div className="col-md-5 col-12">
                                <div className="d-flex flex-column  align-items-md-start gap-5">
                                    <div className="d-flex flex-column gap-2">
                                        <h5 className='text-black'>Orlando</h5>
                                        <h6 className='text-black'>6500 W Colonial Dr Suite E, Orlando, FL 32818</h6>
                                        <h6 className='text-black'>Contact us</h6>
                                    </div>
                                    <div className="d-flex flex-column gap-2">
                                        <h5 className='text-black'>Contact us</h5>
                                        <h6 className='text-black'>Orange, Osceola, Seminole, Lake, Brevard, Volusia, and more</h6>
                                        <h6 className='text-black'>Learn more</h6>
                                    </div>
                                    <div className="d-flex flex-column gap-2">
                                        <h5 className='text-black'>London</h5>
                                        <h6 className='text-black'>123 Sample St, London W1C 1DE, United Kingdom</h6>
                                        <h6 className='text-black'>View Office</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 col-12">
                                <figure>
                                    <img src= "" alt="" />
                                </figure>
                            </div>
                        </div>
            </div>
        </section>
    </div>
  )
}
