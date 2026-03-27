// pages/Services.js
import React from "react";
import ServiceHero from "./components/ServiceHero";
import ServiceFaq from "./components/ServiceFaq";
import ServiceCard from "./components/ServiceCard";
import ServicesArea from "./components/ServiceArea";

export default function ServicesPage() {
  return (
    <div>
      <ServiceHero/>
      <ServiceFaq/>
      <ServiceCard/>
      <ServicesArea/>
    </div>
  );
}