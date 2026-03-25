import React, { useState } from 'react'
import Button from './Button'
import One from './One'
import Two from './Two'
import Three from './Three'

export default function Claims() {
  const [active, setActive] = useState("credentials")
  return (
    <div>
        <section className='Claims p-5'>
        <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 ">
                <p>Claims</p>
                <div className='d-flex align-items-lg-center '><h2>Insurance claims made simple</h2></div>
             <div className="d-flex align-items-md-center">
            <h4>Storm damage covered by insurance? We guide you through every step, from inspection to approval to repair completion.</h4>
            </div>
               <div className="d-flex gap-5 align-items-center">
            <Button text="Learn More" type="hover1" style={{background: '#dadad9'}} className="border border-2"/>
            <a href="/" className='d-flex align-items-center gap-3'>Arrow <i class="fa-solid fa-chevron-right"></i></a>
          </div>
             </div>
             <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
  <h6 style={{cursor:'pointer'}} onClick={() => setActive("credentials")}>Step One</h6>
  <h6 style={{cursor:'pointer'}} onClick={() => setActive("local")}>Step Two</h6>
  <h6 style={{cursor:'pointer'}} onClick={() => setActive("storm")}>Step Three</h6>
</div>
      {/* 👇 Components render */}
<div className="container mt-4">
  {active === "credentials" && <One/>}
  {active === "local" && <Two />}
  {active === "storm" && <Three />}
</div>
        </div>
        </section>
  
    </div>
  )
}
