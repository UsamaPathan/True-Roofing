import React from 'react'
import Button from './Button'
import HeroImage from '../assets/images/HeroImage.png'
export default function Hero() {
  return (
    <div>
        <section className='Hero-Section'>
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 col-12">
                        <div className="d-flex flex-column gap-3 ps-5">
                        <h1>Central Florida's trusted roofing experts</h1>
                        <p>Three decades of proven roofing excellence. Licensed, insured, and ready to protect your home with a free inspection today.</p>
                    </div>
                    <div className="d-flex gap-2 ps-5">
            <Button text="Call now" type="hover1" />
            <Button text="Book Inspection" type="hover2" />
          </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <figure><img src={HeroImage} alt="Hero Image" /></figure>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
