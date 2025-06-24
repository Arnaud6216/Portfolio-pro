import "./Navbar.css";
import { DynamicIcon } from "lucide-react/dynamic";
import { useEffect, useState } from "react";

function Navbar() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  return (
    <>
      <nav className={isDesktop ? "nav--desktop" : "nav--mobile"}>
        <section
          className={
            isDesktop ? "nav__section1--desktop" : "nav__section1--mobile"
          }
        >
          {isDesktop ? (
            <a href="#profile" className="nav__link--desktop">
              Introduction
            </a>
          ) : (
            <a href="#profile" className="nav__link--mobile">
              <DynamicIcon name="user-round" color="white" size={24} />
            </a>
          )}

          {isDesktop ? (
            <a href="#skills" className="nav__link--desktop">
              Compétences
            </a>
          ) : (
            <a href="#skills" className="nav__link--mobile">
              <DynamicIcon name="wrench" color="white" size={24} />
            </a>
          )}

          {isDesktop ? (
            <a href="#projects" className="nav__link--desktop">
              Projets
            </a>
          ) : (
            <a href="#projects" className="nav__link--mobile">
              <DynamicIcon name="folder-git-2" color="white" size={24} />
            </a>
          )}

          {isDesktop ? (
            <a href="#contact" className="nav__link--desktop">
              Contact
            </a>
          ) : (
            <a href="#contact" className="nav__link--mobile">
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
            <a
              href="https://www.linkedin.com/in/arnaud-guevaer-11434a2a9/"
              className="nav__link2--desktop"
            >
              Mon Linkedin
            </a>
          ) : (
            <a
              href="https://www.linkedin.com/in/arnaud-guevaer-11434a2a9/"
              className="nav__link--mobile"
            >
              <DynamicIcon name="linkedin" color="black" size={18} />
            </a>
          )}

          {isDesktop ? (
            <a
              href="https://github.com/Arnaud6216"
              className="nav__link2--desktop"
            >
              Mon Github
            </a>
          ) : (
            <a
              href="https://github.com/Arnaud6216"
              className="nav__link--mobile"
            >
              <DynamicIcon name="github" color="black" size={18} />
            </a>
          )}

          {isDesktop ? (
            <a href="mailto:guevaer8@gmail.com" className="nav__link2--desktop">
              Mon Mail
            </a>
          ) : (
            <a href="mailto:guevaer8@gmail.com" className="nav__link--mobile">
              <DynamicIcon name="mail" color="black" size={18} />
            </a>
          )}
        </section>
      </nav>
    </>
  );
}

export default Navbar;
