import "./Navbar.css";
import { DynamicIcon } from "lucide-react/dynamic";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import FrFlagIcon from "./FrFlagIcon";
import GbFlagIcon from "./GbFlagIcon";

function Navbar() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [activeSection, setActiveSection] = useState<string>("profile");
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const { lang, setLang } = useLanguage();
  const { t } = useLanguage();

  const toggleLang = () => {
    setLang(lang === "fr" ? "en" : "fr");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const body = document.body;

    if (savedTheme === "light-theme") {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      setIsDarkTheme(false);
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      setIsDarkTheme(true);
    }
  }, []);

  const toggleTheme = () => {
    const body = document.body;

    if (isDarkTheme) {
      body.classList.replace("dark-theme", "light-theme");
      setIsDarkTheme(false);
      localStorage.setItem("theme", "light-theme");
    } else {
      body.classList.replace("light-theme", "dark-theme");
      setIsDarkTheme(true);
      localStorage.setItem("theme", "dark-theme");
    }
  };

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  useEffect(() => {
    const sections = ["profile", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={isDesktop ? "nav--desktop" : "nav--mobile"}>
      <section className="nav__tool-section">
        {isDarkTheme ? (
          <DynamicIcon
            name="sun"
            color="white"
            size={window.innerWidth <= 400 ? 20 : 24}
            className="nav__tool-icon"
            onClick={toggleTheme}
          />
        ) : (
          <DynamicIcon
            name="moon"
            color="black"
            size={window.innerWidth <= 400 ? 20 : 24}
            className="nav__tool-icon"
            onClick={toggleTheme}
          />
        )}
        <div
          className="nav__tool-icon-flag"
          onClick={toggleLang}
          onKeyUp={toggleLang}
        >
          {lang === "fr" ? <GbFlagIcon /> : <FrFlagIcon />}
        </div>
      </section>
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
            {t.navbar.intro}
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
            <DynamicIcon
              name="user-round"
              color={isDarkTheme ? "white" : "black"}
              size={window.innerWidth <= 400 ? 20 : 24}
            />
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
            {t.navbar.skills}
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
            <DynamicIcon
              name="wrench"
              color={isDarkTheme ? "white" : "black"}
              size={window.innerWidth <= 400 ? 20 : 24}
            />
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
            {t.navbar.projects}
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
            <DynamicIcon
              name="folder-git-2"
              color={isDarkTheme ? "white" : "black"}
              size={window.innerWidth <= 400 ? 20 : 24}
            />
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
            {t.navbar.contact}
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
            <DynamicIcon
              name="contact"
              color={isDarkTheme ? "white" : "black"}
              size={window.innerWidth <= 400 ? 20 : 24}
            />
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
              {t.navbar.linkedin}
            </a>
            <a
              href="https://github.com/Arnaud6216"
              className="nav__link2--desktop"
            >
              {t.navbar.github}
            </a>
            <a href="mailto:guevaer8@gmail.com" className="nav__link2--desktop">
              {t.navbar.mail}
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
