import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
