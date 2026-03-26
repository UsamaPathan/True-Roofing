import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import Button from "./Button";
import InfoSection from "./InfoSection";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="/True-Roofing/">
            <figure>
              <img src={logo} alt="" />
            </figure>
          </a>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse d-none d-lg-flex">
            <ul className="navbar-nav me-auto gap-3">
              <li className="nav-item">
                <a className="nav-link" href="/True-Roofing/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/True-Roofing/">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/True-Roofing/">
                  Locations
                </a>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  More
                </span>
              </li>
            </ul>

            <div className="d-flex gap-2">
              <Button text="Call now" type="hover1" />
              <Button text="Book Inspection" type="hover2" />
            </div>
          </div>

          {/* Mobile Offcanvas Menu */}
          <div
            className="offcanvas offcanvas-start d-flex d-lg-none"
            tabIndex="-1"
            id="mobileMenu"
            data-bs-backdrop="true"
            data-bs-scroll="false"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav gap-3">
                <li className="nav-item">
                  <a className="nav-link" href="/True-Roofing/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/True-Roofing/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/True-Roofing/">
                    Locations
                  </a>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    More
                  </span>
                </li>
              </ul>
              
              {showMenu && (
                <div className="mt-3">
                  <InfoSection />
                </div>
              )}

              <div className="mt-4 d-flex flex-column gap-2">
                <Button text="Call now" type="hover1" />
                <Button text="Book Inspection" type="hover2" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {showMenu && (
        <div className="mega-menu">
          <InfoSection />
        </div>
      )}
    </>
  );
}

export default Navbar;
