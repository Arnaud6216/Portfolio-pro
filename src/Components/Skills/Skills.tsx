import "./Skills.css";
import { useLanguage } from "../../context/LanguageContext";

function Skills() {
  const { t } = useLanguage();

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
      title: "Vue.js",
      img: "./vue.png",
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
      title: "PHP",
      img: "./php.png",
      category: "back-end",
    },
    {
      title: "Symfony",
      img: "./symfony.png",
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
    {
      title: "Docker",
      img: "./docker.png",
      category: "tools",
    },
  ];

  return (
    <>
      <h2 className="section__title" id="skills">
        {t.skills.title}
      </h2>
      <p className="section__intro">{t.skills.description}</p>
      <section className="skills__section">
        <article className="skills__article">
          <h3 className="skills__subtitle">{t.skills.subtitleFront}</h3>
          <ul className="skills__list">
            {skill
              .filter((s) => s.category === "front-end")
              .map((s) => (
                <li
                  key={s.title}
                  className={
                    s.title === "Vue.js"
                      ? "skills__item--notion"
                      : "skills__item"
                  }
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className={
                      s.title === "Vue.js"
                        ? "skills__img--notion"
                        : "skills__img"
                    }
                  />
                  {s.title}
                </li>
              ))}
          </ul>
        </article>

        <article className="skills__article">
          <h3 className="skills__subtitle">{t.skills.subtitleBack}</h3>
          <ul className="skills__list">
            {skill
              .filter((s) => s.category === "back-end")
              .map((s) => (
                <li
                  key={s.title}
                  className={
                    s.title === "PHP" || s.title === "Symfony"
                      ? "skills__item--notion"
                      : "skills__item"
                  }
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className={
                      s.title === "PHP" || s.title === "Symfony"
                        ? "skills__img--notion"
                        : "skills__img"
                    }
                  />
                  {s.title}
                </li>
              ))}
          </ul>
        </article>

        <article className="skills__article">
          <h3 className="skills__subtitle">{t.skills.subtitleTools}</h3>
          <ul className="skills__list">
            {skill
              .filter((s) => s.category === "tools")
              .map((s) => (
                <li
                  key={s.title}
                  className={
                    s.title === "Docker"
                      ? "skills__item--notion"
                      : "skills__item"
                  }
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className={
                      s.title === "Docker"
                        ? "skills__img--notion"
                        : "skills__img"
                    }
                  />
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
