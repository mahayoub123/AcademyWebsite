import Benifts from "../components/Benifts/Benifts";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import Navigate from "../components/Navigate/Navigate";
import Test from "../components/Test/Test";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Benifts />
      <Test />
      <FAQ />
      <Navigate />
      <Footer />
    </div>
  );
};

export default HomePage;
