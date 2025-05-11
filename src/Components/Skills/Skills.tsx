import "./Skills.css";

function Skills() {
  const skill = [
    {
      title: "Javascript",
      img: "./js.png",
      category: "front-end",
    },
    {
      title: "React",
      img: "./react.png",
      category: "front-end",
    },
    {
      title: "Typescript",
      img: "./ts.png",
      category: "front-end",
    },
    {
      title: "Node.js",
      img: "./node.png",
      category: "back-end",
    },
    {
      title: "Express",
      img: "./express.png",
      category: "back-end",
    },
    {
      title: "SQL",
      img: "./sql.png",
      category: "back-end",
    },
    {
      title: "Github",
      img: "./github2.png",
      category: "tools",
    },
    {
      title: "Gitlab",
      img: "./gitlab.png",
      category: "tools",
    },
    {
      title: "Figma",
      img: "./figma.png",
      category: "tools",
    },
  ];

  return (
    <>
      <section className="skills__section" id="skills">
        <h2 className="skills__title">Compétences</h2>

        <article className="skills__article">
          <h3 className="skills__subtitle">Front-end</h3>
          <ul className="skills__list">
            {skill
              .filter((s) => s.category === "front-end")
              .map((s) => (
                <li key={s.title} className="skills__item">
                  <img src={s.img} alt={s.title} className="skills__img" />
                  {s.title}
                </li>
              ))}
          </ul>
        </article>

        <article className="skills__article">
          <h3 className="skills__subtitle">Back-end</h3>
          <ul className="skills__list">
            {skill
              .filter((s) => s.category === "back-end")
              .map((s) => (
                <li key={s.title} className="skills__item">
                  <img src={s.img} alt={s.title} className="skills__img" />
                  {s.title}
                </li>
              ))}
          </ul>
        </article>

        <article className="skills__article">
          <h3 className="skills__subtitle">Outils</h3>
          <ul className="skills__list">
            {skill
              .filter((s) => s.category === "tools")
              .map((s) => (
                <li key={s.title} className="skills__item">
                  <img src={s.img} alt={s.title} className="skills__img" />
                  {s.title}
                </li>
              ))}
          </ul>
        </article>
      </section>
    </>
  );
}

export default Skills;
