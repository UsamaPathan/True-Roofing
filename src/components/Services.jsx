import React from "react";
import services from "../assets/images/services.png";
import Button from "./Button";
import storm from "../assets/images/storm.png";


export default function Services() {
  return (
    <div>
      <section className="Services py-5">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center gap-3 mb-5">
            <p>Services</p>
            <div className="d-flex align-items-lg-center ">
              <h2>What we do for you</h2>
            </div>
            <div className="d-flex align-items-md-center">
              <h4>
                Complete roofing solutions for Central Florida homes and
                businesses
              </h4>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-12">
              <figure>
                <img src={services} alt="" />
              </figure>
              <div className="d-flex flex-column gap-3 align-items-start align-items-lg-start align-items-md-start pt-5 ps-2  border">
                <h6>Replacement</h6>
                <div>
                  <h3>New roof installation</h3>
                </div>
                <div className="">
                  <h6>
                    Your roof has reached the end. We remove the old, install
                    the new, and leave your home protected. One to three days.
                    Done right.
                  </h6>
                </div>
                <div className="d-flex gap-2 align-items-center">
                             <Button text="Learn More" type="hover1" style={{background: '#dadad9' }} className="border border-2"/> <i className="fa-solid fa-chevron-right"></i>

                  
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
                <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-column gap-4 align-items-start align-items-lg-start ps-2 border">
                <figure><img src={storm} alt="" /></figure>
                <div>
                  <h3>Storm damage repair</h3>
                </div>
                <div className="">
                  <h6>
                    Hurricane or severe weather damaged your roof? We assess, document, and repair fast. Emergency service available now.
                  </h6>
                </div>
                <div className="d-flex gap-2 align-items-center">
                            <Button text="Get Help" type="hover1" style={{background: '#dadad9' }} className="border border-2"/> <i className="fa-solid fa-chevron-right"></i>

                  
                </div>
              </div>
              <div className="d-flex flex-column gap-4 align-items-start align-items-lg-start ps-2  border">
             <figure><img src={storm} alt="" /></figure>
                <div>
                  <h3>Insurance claim help</h3>
                </div>
                <div className="">
                  <h6>
                    Storm damage covered by insurance? We handle inspections, documentation, and adjuster communication. You get fair coverage.
                  </h6>
                </div>
                <div className="d-flex gap-2 align-items-center">
                             <Button text="Start Now" type="hover1" style={{background: '#dadad9' }} className="border border-2"/> <i className="fa-solid fa-chevron-right"></i>

                  
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
