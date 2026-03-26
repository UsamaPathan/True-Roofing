import React from "react";
import logo from "../assets/images/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <div>
      <section className="Footer">
        <div className="container">
            <div className="border pt-5  pb-5 d-flex">
          <div className="row g-5 w-100">
              <div className="col-md-6 col-12">
                <div className="d-flex flex-column gap-3 ps-3">
                  <figure>
                    <img src={logo} alt="" />
                  </figure>
                  <div className="d-flex flex-column gap-2">
                    <p className="text-white">Address</p>
                    <p className="text-white">6500 W Colonial Dr Suite E, Orlando, FL 32818</p>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <p className="text-white">Contact</p>
                    <p className="text-white">1-800-798-1636</p>
                    <p className="text-white">info@truepointroofing.com</p>
                  </div>
                  <div className="d-flex gap-3">
                    <div className="social-icons d-flex gap-3 text-light">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
                <FaYoutube />
              </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <ul className="d-flex flex-column gap-4">
                    <a href="/True-Roofing/"><li>Roof replacement</li></a>
                    <a href="/True-Roofing/"><li>Storm damage</li></a>
                    <a href="/True-Roofing/"><li>Insurance claims</li></a>
                    <a href="/True-Roofing/"><li>Free inspection</li></a>
                    <a href="/True-Roofing/"><li>Service areas</li></a>

                    </ul>
              </div>
              <div className="col-md-3 col-6">
                 <ul className="d-flex flex-column gap-4">
                    <a href="/True-Roofing/"><li>About us</li></a>
                    <a href="/True-Roofing/"><li>Contact us</li></a>
                    <a href="/True-Roofing/"><li>Testimonials</li></a>
                    <a href="/True-Roofing/"><li>Gallery</li></a>
                    <a href="/True-Roofing/"><li>FAQ</li></a>

                    </ul>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-bottom py-3">
        <div className="container d-flex justify-content-between flex-wrap gap-4">
          <p className="mb-0 text-white">© 2025 TruePoint Roofing. All rights reserved.</p>
         <div className="d-flex gap-2 ">
            <a href="/True-Roofing/" className="text-white">Privacy policy</a>
         <a href="/True-Roofing/" className="text-white">Terms of service</a>
         <a href="/True-Roofing/" className="text-white">Cookies settings</a>
         </div>

        </div>
      </footer>
      </section>
      
    </div>
  );
}
