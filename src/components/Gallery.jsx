import React from 'react'
import gallery1 from "../assets/images/gallery1.png";
import gallery2 from "../assets/images/gallery2.png";
import gallery3 from "../assets/images/gallery3.png";
import gallery4 from "../assets/images/gallery4.png";

export default function Gallery() {
  return (
    <div>
        <section className="Gallery">
            <div className="container">
                <div className="d-flex align-items-center justify-content-center gap-3 flex-column">
                    <h2>Our work</h2>
                    <h4>Before and after roofing projects across Central Florida</h4>
                </div>
        <div className="gallery">
      <div className="item item1">
        <img src={gallery1} alt="" />
      </div>
      <div className="item item2">
        <img src={gallery3} alt="" />
      </div>
      <div className="item item3">
        <img src={gallery4} alt="" />
      </div>
      <div className="item item4">
        <img src={gallery2} alt="" />
      </div>
    </div>
        </div>
        </section>
    </div>
  )
}
