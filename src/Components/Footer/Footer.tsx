import "./Footer.css";
import { useEffect, useState } from "react";

function Footer() {
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
      <footer className={isDesktop ? "footer--desktop" : "footer--mobile"}>
        <p className="footer__line1"> © Portfolio Arnaud Guevaer</p>
        <p className="footer__line2">Tout droits reservés</p>
      </footer>
    </>
  );
}

export default Footer;
