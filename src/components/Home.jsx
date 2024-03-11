import react from "react";
import HeroSection from "./Home/HeroSection";
import Nav from "./Nav";
import Sponser from "../components/Home/Sponser";
import CompCard from "./Home/CompCard";
import Footer from "./Footer";
import CsCompetition from "./Home/CsCompetition";
import ElectricalCompetition from "./Home/ElectricalCompetition";
import Register from "./Register";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CsCompetition/>
      <div className="bg-gradient-to-b from-[#FFFFFF] to-[#9BD7E6]">
        <ElectricalCompetition/>
        <Footer />
      </div>
    </>
  );
};

export default Home;