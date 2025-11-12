import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import HeroContact from "../components/HeroContact/HeroContact";
import NavBar from "../components/NavBar/NavBar";

const ContacPage = () => {
  return (
    <div>
      <NavBar />
      <HeroContact />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContacPage;
