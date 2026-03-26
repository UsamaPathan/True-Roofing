import React from 'react'
import Tab from "../assets/images/Tab.png";

export default function ServicesAreas() {
  return (
    <div>
        <section className="Services-Area">
            <div className="container">
                <div className="d-flex mb-3 flex-column gap-2 align-items-start pt-5">
                            <h6 className='text-white'>Service areas</h6>
                            <div><h2 className='text-white'>Coverage</h2></div>
                            <div className='pe-5 text-white'><h4>We serve fourteen counties across Central Florida</h4></div>
                
                        </div>
                        <div className="row g-3">
                            <div className="col-md-5 col-12">
                                <div className="d-flex flex-column align-items-center align-items-md-start gap-5">
                                    <div className="d-flex flex-column gap-2">
                                        <h5 className='text-white'>Orlando, Florida</h5>
                                        <h6 className='text-white'>6500 W Colonial Dr Suite E, Orlando, FL 32818</h6>
                                        <h6 className='text-white'>Call us</h6>
                                    </div>
                                    <div className="d-flex flex-column gap-2">
                                        <h5 className='text-white'>Service areas</h5>
                                        <h6 className='text-white'>Orange, Osceola, Seminole, Lake, Brevard, Volusia, Flagler, Saint John's, Duval, Sumter, Hernando, Pasco, Hillsborough, and Polk counties</h6>
                                        <h6 className='text-white'>View map</h6>
                                    </div>
                                    <div className="d-flex flex-column gap-2">
                                        <h5 className='text-white'>Local roofing</h5>
                                        <h6 className='text-white'>We know Central Florida. We know the weather. We know your neighborhood.</h6>
                                        <h6 className='text-white'>Get local help</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 col-12">
                                <figure>
                                    <img src= {Tab} alt="" />
                                </figure>
                            </div>
                        </div>
            </div>
        </section>
    </div>
  )
}
