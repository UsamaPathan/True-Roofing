import { useState } from "react";
import Button from './Button'


const faqData = [
  {
    question: "How long does replacement take?",
    answer:
      "Most roof replacements finish in one to three days depending on size and weather. We work fast without cutting corners. Your home stays protected throughout.",
  },
  {
    question: "Does insurance cover storm damage?",
    answer:
      "Most homeowner policies cover storm damage. We inspect your roof, document everything, and work with your adjuster to get fair coverage. Let us handle the details.",
  },
  {
    question: "What's included in free inspection?",
    answer:
      "We assess your roof's condition, check for damage or wear, take photos, and give you honest recommendations. No pressure. No obligation. Just the truth about your roof.",
  },
  {
    question: "Can you help with insurance claims?",
    answer:
      "Yes. We inspect, document damage, communicate with your adjuster, and handle repairs once approved. We've guided hundreds of homeowners through the process.",
  },
  {
    question: "Are you licensed in Florida?",
    answer:
      "We're a Florida Certified Roofing Contractor with license CCC1332991. Thirty years of experience. Fully insured. Every job meets state standards.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container FAQ py-5">
        <div className="d-flex flex-column gap-3 align-items-center align-items-md-start">
      <h2 className="fw-bold mb-3">Questions</h2>
      <h4 className="mb-4">
        Find answers about roof replacement, storm damage, and insurance claims
      </h4>
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
        <h2 className="fw-bold">Need more help?</h2>
        <h6 className="text-muted mb-3">
          Call us or schedule a free inspection
        </h6>
        <Button text="Contact Us" type="hover1" style={{background: ''}} claName="border border-2"/>

      </div>
    </div>
  );
}