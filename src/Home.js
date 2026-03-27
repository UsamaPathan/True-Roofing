import Booking from "./components/Booking";
import Card from "./components/Card";
import Claims from "./components/Claims";
import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Licenced from "./components/Licenced";
import CustomerReviews from "./components/Reviews";
import Services from "./components/Services";
import ServicesAreas from "./components/ServicesAreas";
import Urgent from "./components/Urgent";
import './styles/custom.css';
function Home() {
  return (
    <>
      <Hero/>
      <Licenced/>
      <Services/>
      <Urgent/>
      <Claims/>
      <CustomerReviews/>
      <Gallery/>
      <ServicesAreas/>
      <FAQ/>
      <Booking/>
      <Card/>
    </>
  );
}

export default Home;