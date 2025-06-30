import "./Footer.css";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();
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
        <p className="footer__line1">{t.footer1}</p>
        <p className="footer__line2">{t.footer2}</p>
      </footer>
    </>
  );
}

export default Footer;
