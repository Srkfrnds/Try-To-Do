import AboutUs from "../sections/AboutUs";
import Home from "../sections/Home";
import LatestNews from "../sections/LatestNews";
import OurWork from "../sections/Our-Work";
import Services from "../sections/Services";

const HomePage = () => {
  return (
    <div>
      <Home />
      <AboutUs />
      <Services />
      <OurWork />
      <LatestNews />
    </div>
  );
};

export default HomePage;
