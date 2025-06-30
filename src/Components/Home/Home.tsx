import "./Home.css";
import { useLanguage } from "../../context/LanguageContext";

function Home() {
  const { t } = useLanguage();
  return (
    <>
      <section className="home__section1" id="profile">
        <h1 className="home__title">
          {t.home.title1} <br />
          <span className="home__name">{t.home.title2}</span>
        </h1>
        <h2 className="home__subtitle">{t.home.title3}</h2>
        <img src="./arnaud.jpg" alt="Arnaud Guevaer" className="home__img" />
        <p className="home__status">{t.home.status}</p>
      </section>

      <section className="home__section2">
        <p className="home__description">
          {t.home.description1} <br />
          <br /> {t.home.description2} <br />
          <br />
          {t.home.description3} <br />
          <br /> {t.home.description4}
        </p>
      </section>
    </>
  );
}

export default Home;
