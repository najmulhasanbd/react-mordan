import CompanyLogo from "./components/CompanyLogo";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Monitor from "./components/Monitor";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Pricing from "./components/Pricing";
import Purpose from "./components/Purpose";
import Schudule from "./components/Schudule";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <Purpose />
        <Feature />
        <Schudule />
        <Monitor />
        <Pricing />
        <Services />
        <Testimonial />
        <NewsLetter />
        <Footer />
      </div>
    </main>
  );
};

export default App;
