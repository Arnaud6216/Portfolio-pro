import "./Navbar.css";
import { DynamicIcon } from "lucide-react/dynamic";
import { useEffect, useState } from "react";

function Navbar() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [activeSection, setActiveSection] = useState<string>("profile");

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  useEffect(() => {
    const sections = ["profile", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // ajuster la valeur selon besoin
      let currentSection = "profile";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;
        if (scrollPosition >= el.offsetTop) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // appel initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={isDesktop ? "nav--desktop" : "nav--mobile"}>
      <section
        className={
          isDesktop ? "nav__section1--desktop" : "nav__section1--mobile"
        }
      >
        {isDesktop ? (
          <a
            href="#profile"
            className="nav__link--desktop"
            style={{
              borderRadius: "10px 10px 0 0",
              backgroundColor:
                activeSection === "profile" ? "var(--blue-9)" : "transparent",
              transition: "background-color 0.3s ease",
            }}
          >
            Introduction
          </a>
        ) : (
          <a
            href="#profile"
            className="nav__link--mobile"
            style={{
              backgroundColor:
                activeSection === "profile" ? "var(--blue-9)" : "transparent",
              transition: "background-color 0.3s ease",
            }}
          >
            <DynamicIcon name="user-round" color="white" size={24} />
          </a>
        )}

        {isDesktop ? (
          <a
            href="#skills"
            className="nav__link--desktop"
            style={{
              backgroundColor:
                activeSection === "skills" ? "var(--blue-9)" : "transparent",
              transition: "background-color 0.3s ease",
            }}
          >
            Compétences
          </a>
        ) : (
          <a
            href="#skills"
            className="nav__link--mobile"
            style={{
              backgroundColor:
                activeSection === "skills" ? "var(--blue-9)" : "transparent",
              transition: "background-color 0.3s ease",
            }}
          >
            <DynamicIcon name="wrench" color="white" size={24} />
          </a>
        )}

        {isDesktop ? (
          <a
            href="#projects"
            className="nav__link--desktop"
            style={{
              backgroundColor:
                activeSection === "projects" ? "var(--blue-9)" : "transparent",
              transition: "background-color 0.3s ease",
            }}
          >
            Projets
          </a>
        ) : (
          <a
            href="#projects"
            className="nav__link--mobile"
            style={{
              backgroundColor:
                activeSection === "projects" ? "var(--blue-9)" : "transparent",
              transition: "background-color 0.3s ease",
            }}
          >
            <DynamicIcon name="folder-git-2" color="white" size={24} />
          </a>
        )}

        {isDesktop ? (
          <a
            href="#contact"
            className="nav__link--desktop"
            style={{
              borderRadius: "0 0 10px 10px",
              backgroundColor:
                activeSection === "contact" ? "var(--blue-9)" : "transparent",
              transition: "background-color 0.3s ease",
            }}
          >
            Contact
          </a>
        ) : (
          <a
            href="#contact"
            className="nav__link--mobile"
            style={{
              backgroundColor:
                activeSection === "contact" ? "var(--blue-9)" : "transparent",
              transition: "background-color 0.3s ease",
            }}
          >
            <DynamicIcon name="contact" color="white" size={24} />
          </a>
        )}
      </section>

      <section
        className={
          isDesktop ? "nav__section2--desktop" : "nav__section2--mobile"
        }
      >
        {isDesktop ? (
          <>
            <a
              href="https://www.linkedin.com/in/arnaud-guevaer-11434a2a9/"
              className="nav__link2--desktop"
            >
              Mon Linkedin
            </a>
            <a
              href="https://github.com/Arnaud6216"
              className="nav__link2--desktop"
            >
              Mon Github
            </a>
            <a href="mailto:guevaer8@gmail.com" className="nav__link2--desktop">
              Mon Mail
            </a>
          </>
        ) : (
          <>
            <a
              href="https://www.linkedin.com/in/arnaud-guevaer-11434a2a9/"
              className="nav__link--mobile"
            >
              <DynamicIcon name="linkedin" color="black" size={18} />
            </a>
            <a
              href="https://github.com/Arnaud6216"
              className="nav__link--mobile"
            >
              <DynamicIcon name="github" color="black" size={18} />
            </a>
            <a href="mailto:guevaer8@gmail.com" className="nav__link--mobile">
              <DynamicIcon name="mail" color="black" size={18} />
            </a>
          </>
        )}
      </section>
    </nav>
  );
}

export default Navbar;
