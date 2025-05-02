import "./Skills.css";

function Skills() {
  return (
    <>
      <section className="skills__section" id="skills">
        <h2 className="skills__title">Compétences</h2>

        <article className="skills__article">
          <h3 className="skills__subtitle">Front-end</h3>
          <ul className="skills__list">
            <li className="skills__item">React</li>
            <li className="skills__item">JavaScript</li>
            <li className="skills__item">Typescript</li>
          </ul>
        </article>

        <article className="skills__article">
          <h3 className="skills__subtitle">Back-end</h3>
          <ul className="skills__list">
            <li className="skills__item">Node.js</li>
            <li className="skills__item">Express</li>
            <li className="skills__item">SQL</li>
          </ul>
        </article>

        <article className="skills__article">
          <h3 className="skills__subtitle">Outils</h3>
          <ul className="skills__list">
            <li className="skills__item">Git</li>
            <li className="skills__item">Gitlab</li>
            <li className="skills__item">Figma</li>
          </ul>
        </article>
      </section>
    </>
  );
}

export default Skills;
