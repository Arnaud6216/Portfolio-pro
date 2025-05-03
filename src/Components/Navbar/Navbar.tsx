import "./Navbar.css";
import { DynamicIcon } from "lucide-react/dynamic";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <section className="nav__section1">
          <a href="#profile" className="nav__link">
            <DynamicIcon
              name="house"
              color="white"
              size={24}
              aria-label="Introduction"
            />
          </a>

          <a href="#home" className="nav__link">
            <DynamicIcon name="user-round" color="white" size={24} />
          </a>

          <a href="#skills" className="nav__link">
            <DynamicIcon name="wrench" color="white" size={24} />
          </a>

          <a href="#projects" className="nav__link">
            <DynamicIcon name="folder-git-2" color="white" size={24} />
          </a>

          <a href="#contact" className="nav__link">
            <DynamicIcon name="contact" color="white" size={24} />
          </a>
        </section>

        <section className="nav__section2">
          <a
            href="https://www.linkedin.com/in/arnaud-guevaer-11434a2a9/"
            className="nav__link"
          >
            <DynamicIcon name="linkedin" color="black" size={18} />
          </a>
          <a href="https://github.com/Arnaud6216" className="nav__link">
            <DynamicIcon name="github" color="black" size={18} />
          </a>
          <a href="mailto:guevaer8@gmail.com" className="nav__link">
            <DynamicIcon name="mail" color="black" size={18} />
          </a>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
