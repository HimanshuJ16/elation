import { useState } from "react";
import Testimonials from "../sections/Testimonials";
import Footer from "../sections/Footer";
// import Contact from "../sections/Contact";
import Solutions from "../sections/Solutions";
import Hero from "../sections/Hero";
import ShowcaseSection from "../sections/ShowcaseSection";
import LogoShowcase from "../sections/LogoShowcase";
import LoadingScreen from "../components/LoadingScreen";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {/* {!isLoading && ( */}
        <>
          <Hero />
          <ShowcaseSection />
          <LogoShowcase />
          <Solutions />
          <Testimonials />
          <Footer />
        </>
      {/* )} */}
    </>
  );
}

export default Home;