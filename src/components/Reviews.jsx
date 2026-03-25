import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";

export default function CustomerReviews() {
  const reviews = [
    {
      text: `"TruePoint came out fast after the hurricane, assessed the damage honestly, and got our roof fixed before the next storm hit. Professional and fair pricing."`,
      name: "Michael Torres",
      location: "Homeowner, Orange County",
    },
    {
      text: `"They handled our insurance claim from start to finish. No stress, no surprises. Just good people doing solid work."`,
      name: "Sarah Mitchell",
      location: "Homeowner, Seminole County",
    },
    {
      text: `"Thirty years in business for a reason. They know roofs, they know Florida weather, and they stand behind their work."`,
      name: "James Hernandez",
      location: "Homeowner, Brevard County",
    },
    {
      text: `"Amazing service and quick response. Highly recommended!"`,
      name: "John Smith",
      location: "Homeowner, Orlando",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-2">What customers say</h2>
        <p className="text-muted mb-5">
          Real stories from Central Florida homeowners.
        </p>

       <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={3}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  }}
>
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="card p-4  review-card">
                
                <div className="mb-3 d-flex gap-1">
  {[...Array(5)].map((_, i) => (
    <FaStar key={i} color="black" />
  ))}
</div>

                <p className="text-muted">{review.text}</p>

                <div className="d-flex align-items-center gap-3 mt-3">
                  <div className="avatar"></div>
                  <div className="text-start">
                    <h6 className="mb-0">{review.name}</h6>
                    <small className="text-muted">{review.location}</small>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}