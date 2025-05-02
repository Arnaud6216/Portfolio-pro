import "./Home.css";

function Home() {
  return (
    <>
      <h1 className="home__title">Bonjour, je suis Arnaud Guevaer</h1>
      <h2 className="home__subtitle">Développeur web</h2>
      <section className="home__section" id="home">
        <img src="" alt="Arnaud Guevaer" className="home__img" />
        <p className="home__description">
          Passionnée depuis toujours par les nouvelles technologies et les jeux
          vidéo, j’ai décidé de me reconvertir dans le développement web pour
          faire de cette passion mon métier. J’ai ainsi intégré la Wild Code
          School et obtenu mon diplôme de developpeur web et web mobile. Avant
          cette reconversion, mon parcours a débuté en tant que Gendarme Adjoint
          Volontaire, une expérience marquante qui m’a inculqué rigueur, esprit
          de cohésion et sens des responsabilités. Puis j’ai travaillé dans la
          logistique, où j’ai appris à m’adapter rapidement, à organiser
          efficacement mon travail et à comprendre les enjeux du e-commerce.
        </p>
      </section>
    </>
  );
}

export default Home;
