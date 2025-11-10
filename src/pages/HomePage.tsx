import Benifts from "../components/Benifts/Benifts";
import FAQ from "../components/FAQ/FAQ";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import Test from "../components/Test/Test";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Benifts />
      <Test />
      <FAQ />
    </div>
  );
};

export default HomePage;
