import Claims from "./components/Claims";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Licenced from "./components/Licenced";
import Navbar from "./components/Navbar";
import CustomerReviews from "./components/Reviews";
import Services from "./components/Services";
import Urgent from "./components/Urgent";
import './styles/custom.css';
function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Licenced/>
      <Services/>
      <Urgent/>
      <Claims/>
      <CustomerReviews/>
      <Footer/>
    </>
  );
}

export default Home;