import Awards from "../components/Awards/Awards";
import Footer from "../components/Footer/Footer";
import HeroAbout from "../components/HeroAbout/HeroAbout";
import NavBar from "../components/NavBar/NavBar";
import Team from "../components/Team/Team";
import Vision from "../components/Vision/Vision";

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <HeroAbout />
      <Vision />
      <Awards />
      <Team />
      <Footer />
    </div>
  );
};

export default AboutPage;
