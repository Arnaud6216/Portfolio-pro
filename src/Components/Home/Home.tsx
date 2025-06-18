import "./Home.css";

function Home() {
  return (
    <>
      <section className="home__section1" id="profile">
        <h1 className="home__title">
          Bonjour, je suis <br />
          <span className="home__name">Arnaud Guevaer</span>
        </h1>
        <h2 className="home__subtitle">Développeur web</h2>
        <img src="./arnaud.jpg" alt="Arnaud Guevaer" className="home__img" />
        <p className="home__status">
          Status : En recherche d'une alternance pour le titre de Concepteur
          développeur d'applications
        </p>
      </section>

      <section className="home__section2">
        <p className="home__description">
          Passionnée depuis toujours par les nouvelles technologies et les jeux
          vidéo, j’ai décidé de me reconvertir dans le développement web pour
          faire de cette passion mon métier. <br />
          <br /> J’ai ainsi intégré la Wild Code School en septembre 2024 et
          obtenu mon diplôme de developpeur web et web mobile. <br />
          <br />
          Avant cette reconversion, mon parcours a débuté en tant que Gendarme
          Adjoint Volontaire, une expérience marquante qui m’a inculqué rigueur,
          esprit de cohésion et sens des responsabilités. <br />
          <br /> Puis j’ai travaillé dans la logistique, où j’ai appris à
          m’adapter rapidement, à organiser efficacement mon travail et à
          comprendre les enjeux du e-commerce.
        </p>
      </section>
    </>
  );
}

export default Home;
