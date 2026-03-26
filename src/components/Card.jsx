import React from 'react'
import card2 from "../assets/images/card2.png";
import Button from './Button'

export default function Card() {
  return (
    <div>
        <section className="card">
            <div className="container">
                <div className="d-flex flex-column gap-3 justify-content-center align-items-center text-center position-relative" style={{ backgroundImage: `url(${card2})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '400px' }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{opacity: 0.4}}></div>
                    <div className="position-relative">
                    <div><h2 className='text-white'>Ready to protect your roof?</h2></div>
                    <div><h4 className='text-white'>Call 1-800-798-1636 or book your free inspection online today</h4></div>
                    <div className='d-flex align-items-center justify-content-center gap-3'>
            <Button text="Learn More" type="hover2" style={{background: ''}} claName="border border-2"/>
                        <a href="/True-Roofing/">Book Inspection</a>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
