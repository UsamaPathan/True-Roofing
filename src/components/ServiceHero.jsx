import React from 'react'
import ServiveHero from "../assets/images/ServiceHero.png";

export default function ServiceHero() {
  return (
    <div>
        <section className="card service-hero">
            
                <div className="d-flex flex-column gap-3 justify-content-center align-items-center text-center position-relative" style={{ backgroundImage: `url(${ServiveHero})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '400px' }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{opacity: 0.4}}></div>
                    <div className="position-relative">
                    <div className='d-flex align-items-center justify-content-center text-center'><h1 className='text-white ServicesHero '>Our roofing services</h1></div>
                    <div className='d-flex align-items-center justify-content-lg-center'><h4 className='text-white text-center'>Thirty years of Florida expertise and certified contractor credentials backing every job we do.</h4></div>
                   
                    </div>
                </div>
            
        </section>
    </div>
  )
}
