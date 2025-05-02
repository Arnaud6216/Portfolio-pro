import "./Navbar.css";
import { DynamicIcon } from "lucide-react/dynamic";
import { useState, useEffect } from "react";

function Navbar() {
  const [navBarStyle, setNavBarStyle] = useState("nav-top");
  const [isNavBarTop, setIsNavBarTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavBarTop(false);
        setNavBarStyle("nav-scroll");
      } else {
        setNavBarStyle("nav-top");
        setIsNavBarTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={navBarStyle}>
        <section className="nav__section1">
          <a href="#home" className="nav__link">
            {isNavBarTop ? (
              "Introduction"
            ) : (
              <DynamicIcon name="house" color="white" size={24} />
            )}
          </a>

          <a href="#skills" className="nav__link">
            {isNavBarTop ? (
              "Compétences"
            ) : (
              <DynamicIcon name="wrench" color="white" size={24} />
            )}
          </a>

          <a href="#projects" className="nav__link">
            {isNavBarTop ? (
              "Projets"
            ) : (
              <DynamicIcon name="folder-git-2" color="white" size={24} />
            )}
          </a>

          <a href="#contact" className="nav__link">
            {isNavBarTop ? (
              "Contact"
            ) : (
              <DynamicIcon name="contact" color="white" size={24} />
            )}
          </a>
        </section>

        <section className="nav__section2">
          <a
            href="https://www.linkedin.com/in/arnaud-guevaer-11434a2a9/"
            className="nav__link"
          >
            {isNavBarTop ? (
              "Linkedin"
            ) : (
              <DynamicIcon name="linkedin" color="black" size={18} />
            )}
          </a>
          <a href="https://github.com/Arnaud6216" className="nav__link">
            {isNavBarTop ? (
              "Github"
            ) : (
              <DynamicIcon name="github" color="black" size={18} />
            )}
          </a>
          <a href="mailto:guevaer8@gmail.com" className="nav__link">
            {isNavBarTop ? (
              "Mail"
            ) : (
              <DynamicIcon name="mail" color="black" size={18} />
            )}
          </a>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
