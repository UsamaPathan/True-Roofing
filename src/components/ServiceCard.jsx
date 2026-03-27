import React from 'react'
import ServiveCard from "../assets/images/ServiceCard.png";
import Button from "./Button";

export default function ServiceCard() {
  return (
    <div>
        <section className="card Service-Card">
            <div className="container">
                <div className="d-flex flex-column gap-3 justify-content-center align-items-center text-center position-relative" style={{ backgroundImage: `url(${ServiveCard})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '400px' }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{opacity: 0.4}}></div>
                    <div className="position-relative">
                    <div className='d-flex align-items-center justify-content-center text-center'><h2 className='text-white ServicesHero '>Schedule your inspection</h2></div>
                    <div className='d-flex align-items-center justify-content-lg-center'><h4 className='text-white text-center'>Get a free roof assessment from our certified inspectors today.</h4></div>
                   <div className='d-flex align-items-center justify-content-center gap-3'>
            <Button text="Call" type="hover2" style={{background: ''}} claName="border border-2"/>
            <Button text="Book Now" type="hover1" style={{background: 'transparent'}} claName="border border-2"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
