import React from "react";
import roofing from "../assets/images/roofing.svg";
import storm from "../assets/images/storm.png";
import emergency from "../assets/images/emergency.png";
import Vector from "../assets/images/Vector.png";
import Vector8 from "../assets/images/Vector8.png";
import Vector10 from "../assets/images/Vector10.png";
import Vector6 from "../assets/images/Vector6.png";
import Vector7 from "../assets/images/Vector7.png";
import call from "../assets/images/call.png";
import Vector4 from "../assets/images/Vector4.png";

const InfoSection = () => {
  return (
    <div className="container my-5 info-section ">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex flex-column gap-2">
          <h6>Roofing work</h6>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center gap-3">
                <figure><img src={roofing} alt="Roofing" /></figure>
            <h6>Roof replacement</h6>
            </div>
          <p className="d-none d-md-flex">Complete roof replacement for homes and commercial properties</p>
          </div>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center gap-3">
                <figure><img src={storm} alt="Roofing" /></figure>
            <h6>Storm damage</h6>
            </div>
          <p className="d-none d-md-flex">Storm and hurricane damage roof replacement</p>
          </div>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center gap-1">
                <figure><img src={emergency} alt="Roofing" /></figure>
            <h6>Fast emergency response to severe weather damage</h6>
            </div>
          <p className="d-none d-md-flex">Insurance claims</p>
          </div>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center gap-1">
                <figure><img src={storm} alt="Roofing" /></figure>
            <h6>Insurance claims assistance</h6>
            </div>
          <p className="d-none d-md-flex">We handle the paperwork so you don't have to</p>
          </div>
          <p className="d-none d-md-flex"></p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex flex-column gap-2">
          <h6>Inspections</h6>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center gap-3">
                <figure><img src={roofing} alt="Roofing" /></figure>
            <h6>Free roof inspections</h6>
            </div>
          <p className="d-none d-md-flex">Know the condition of your roof before problems start</p>
          </div>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center  gap-3">
                <figure><img src={Vector} alt="Roofing" /></figure>
            <h6>Service areas</h6>
            </div>
          <p className="d-none d-md-flex">Central Florida coverage</p>
          </div>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center gap-1">
                <figure><img src={Vector4} alt="Roofing" /></figure>
            <h6>We serve fourteen counties across the region</h6>
            </div>
          <p className="d-none d-md-flex">About us</p>
          </div>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center gap-1">
                <figure><img src={roofing} alt="Roofing" /></figure>
            <h6>TruePoint Roofing</h6>
            </div>
          <p className="d-none d-md-flex">Thirty years of roofing experience in Florida</p>
          </div>
          <p className="d-none d-md-flex"></p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex flex-column gap-2">
          <h6>Contact</h6>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center gap-3">
                <figure><img src={call} alt="Roofing" /></figure>
            <h6>Get in touch</h6>
            </div>
          <p className="d-none d-md-flex">Call or schedule your free inspection today</p>
          </div>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center gap-3">
                <figure><img src={Vector7} alt="Roofing" /></figure>
            <h6>FAQ</h6>
            </div>
          <p className="d-none d-md-flex">Common questions answered</p>
          </div>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center gap-1">
                <figure><img src={Vector6} alt="Roofing" /></figure>
            <h6>Find answers to what homeowners ask us most</h6>
            </div>
          <p className="d-none d-md-flex">Call us</p>
          </div>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center gap-1">
                <figure><img src={Vector8} alt="Roofing" /></figure>
            <h6>1-800-798-1636</h6>
            </div>
          <p className="d-none d-md-flex">Schedule inspection</p>
          </div>
          <p className="d-none d-md-flex"></p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex flex-column gap-3">
          <h6>Book now</h6>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center gap-3">
                <figure><img src={Vector8} alt="Roofing" /></figure>
            <h6>Call</h6>
            </div>
          <p className="d-none d-md-flex">Schedule</p>
          </div>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center gap-3">
                <figure><img src={Vector10} alt="Roofing" /></figure>
            <h6>Contact</h6>
            </div>
          <p className="d-none d-md-flex">Book</p>
          </div>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center gap-1">
                <figure><img src={Vector8} alt="Roofing" /></figure>
            <h6>Get inspection</h6>
            </div>
          <p className="d-none d-md-flex">Get inspection</p>
          </div>
          <div className="d-flex flex-column gap-0">
            <div className="d-flex align-items-center gap-1">
                <figure><img src={emergency} alt="Roofing" /></figure>
            <h6>Call for emergency service</h6>
            </div>
          <p className="d-none d-md-flex">Reach us now</p>
          </div>
          </div>
        </div>
      <div className="inspection d-flex justify-content-between align-items-md-center ">
        <div className="d-flex align-items-lg-center gap-2">
          <h6>Need a roof inspection?</h6>
          <a href="/True-Roofing/">Schedule your free inspection</a>
        </div>
        <div className="d-flex align-items-lg-center gap-3">
          <a href="/True-Roofing/" className="d-flex gap-3"><figure><img src={call} alt="" /></figure></a>
                    <a href="/True-Roofing/" className="d-flex gap-3"><figure><img src={Vector} alt="" /></figure></a>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default InfoSection;