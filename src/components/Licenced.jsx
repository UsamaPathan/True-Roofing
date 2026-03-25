import React, { useState } from 'react'
import Button from './Button'
import Credentials from './Credentials'
import LocalExpertise from './LocalExpertise'
import StormSpecialist from './StormSpecialist'

export default function Licenced() {
  const [active, setActive] = useState("credentials")
  return (
    <div>
        <section className='Licenced-Section p-5'>
        <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 ">
                <p>Certified</p>
                <div className='d-flex align-items-lg-center '><h2>Licensed and fully insured</h2></div>
             <div className="d-flex align-items-md-center">
            <h4>Florida Certified Roofing Contractor with license CCC1332991. Thirty years of experience protecting Central Florida homes and businesses.</h4>
            </div>
               <div className="d-flex gap-5 align-items-center">
            <Button text="Learn More" type="hover1" style={{background: '#dadad9'}} className="border border-2"/>
            <a href="/" className='d-flex align-items-center gap-3'>Arrow <i class="fa-solid fa-chevron-right"></i></a>
          </div>
             </div>
             <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
  <h6 style={{cursor:'pointer'}} onClick={() => setActive("credentials")}>Our Credentials</h6>
  <h6 style={{cursor:'pointer'}} onClick={() => setActive("local")}>Local Expertise</h6>
  <h6 style={{cursor:'pointer'}} onClick={() => setActive("storm")}>Storm specialists</h6>
</div>
      {/* 👇 Components render */}
<div className="container mt-4">
  {active === "credentials" && <Credentials />}
  {active === "local" && <LocalExpertise />}
  {active === "storm" && <StormSpecialist />}
</div>
        </div>
        </section>
  
    </div>
  )
}
