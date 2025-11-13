import Activities from "../components/Activities/Activities";
import Footer from "../components/Footer/Footer";
import HeroStudent from "../components/HeroStudent/HeroStudent";
import Learn from "../components/Learn/Learn";
import NavBar from "../components/NavBar/NavBar";
import Support from "../components/Support/Support";

const StudentPage = () => {
  return (
    <div>
      <NavBar />
      <HeroStudent />
      <Activities />
      <Learn />
      <Support />
      <Footer />
    </div>
  );
};

export default StudentPage;
