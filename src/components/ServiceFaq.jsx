import { useState } from "react";
import Button from './Button'


const faqData = [
  {
    question: "How long does replacement take?",
    answer:
"Most roof replacements are completed within one to three days, depending on the size and complexity of your roof. Weather conditions and material selection can affect the timeline. We'll provide a detailed schedule before work begins."  },
  {
    question: "Do you handle insurance claims?",
    answer:
      "Yes, we assist with insurance claims from start to finish. Our team works directly with your insurance company and handles the documentation needed for storm damage claims. We make the process straightforward and stress-free.",
  },
  {
    question: "Is the roof inspection really free?",
    answer:
      "Absolutely. We provide free roof inspections for all homeowners and commercial property owners. Our inspectors assess your roof's condition and discuss any repairs or replacements needed, with no obligation.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We serve Central Florida including Orange, Osceola, Seminole, Lake, Brevard, Volusia, Flagler, Saint John's, Duval, Sumter, Hernando, Pasco, Hillsborough, and Polk counties. Call us to confirm service availability for your location.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, we're a Florida certified roofing contractor with license CCC1332991 and over 30 years of experience. We carry full insurance and bonding for all projects.",
  },
];

export default function ServiceFaq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container FAQ py-5">
        <div className="d-flex flex-column gap-3 align-items-center align-items-md-start">
      <h2 className="fw-bold mb-3">Questions</h2>
      <h4 className="mb-4">
Find answers to common questions about our roofing services and process.      </h4>
</div>
      <div className="d-flex flex-column gap-3">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-3 p-4 bg-light"
            style={{ cursor: "pointer" }}
          >
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => toggle(index)}
            >
              <h4 className="mb-0">{item.question}</h4>
              <span style={{ fontSize: "20px" }}>
                {activeIndex === index ? "✕" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <h6 className="mt-3 text-muted">{item.answer}</h6>
            )}
          </div>
        ))}
      </div>

      <div className=" d-flex flex-column gap-4 align-items-center align-items-md-start mt-5">
        <h2 className="fw-bold">Ready to get started?</h2>
        <h6 className="text-muted mb-3">
         Schedule your free inspection today.
        </h6>
        <Button text="Call now" type="hover1" style={{background: ''}} claName="border border-2"/>

      </div>
    </div>
  );
}