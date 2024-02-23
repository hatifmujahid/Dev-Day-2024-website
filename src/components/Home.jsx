import react from "react";
import HeroSection from "./HeroSection";
import Nav from "./Nav";
import Sponser from "./Sponser";
import CompCard from "./CompCard";

const Home = () => {
  return (
    <>
      <Nav />
      <HeroSection />
      {/* <div className="w-screen h-screen flex items-center justify-center">
        <CompCard
          title="Title goes here"
          description="Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor"
          color="pink"
          link="youtube.com"
        />
      </div> */}
    </>
  );
};

export default Home;
