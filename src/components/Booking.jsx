import React from 'react'
import Button from './Button'

export default function Booking() {
  return (
    <div>
        <section className="Booking">
            <div className="container">
                <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                    <div className='mb-0'><h2 className='text-white'>Book your free roof inspection</h2></div>
                    <div className='mt-0'><h4 className='text-white'>No obligation. Just honest assessment and clear recommendations</h4></div>
                    <div className="d-flex justify-content-center align-items-lg-center gap-3">
                        <input type="text"  placeholder='Enter Your Phone Number'style={{background: '#5a93c0'}}/>
                        <Button text="Schedule Now" type="hover2"  claName="border border-2"/>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'><p className='text-white'>By submitting this form you agree to our terms and privacy policy</p></div>
                </div>
            </div>
        </section>
    </div>
  )
}
