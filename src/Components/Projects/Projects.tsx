import "./Projects.css";
import { useState } from "react";

function Projects() {
  interface Project {
    title: string;
    description: string;
    img: string;
    video?: string;
    github?: string;
    technology?: string[];
  }

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const project = [
    {
      title: "Z Warriors Clicker",
      description:
        "Un jeu incremental sur l'univers de Dragon Ball, où les joueurs cliquent pour accumuler de la puissance, débloquer des transformations et techniques puissantes, et vaincre des ennemis emblématiques.",
      img: "./zwarrior.png",
      video: "./zwarrior-video.mp4",
      github: "https://github.com/Arnaud6216/Z-Warriors-Clicker",
      technology: ["./react.png", "./ts.png", "./node.png", "./express.png"],
    },
    {
      title: "Code Quest Academy",
      description:
        "Un jeu éducatif interactif mêlant investigation et apprentissage, où les joueurs incarnent un étudiant en développement web, résolvant des énigmes pour maîtriser HTML, CSS, JavaScript, et autres technologies.",
      img: "./codequest.png",
      video: "./codequest-video.mp4",
      github:
        "https://github.com/WildCodeSchool-2024-09/JS-lille-P3-code-quest-academy",
      technology: ["./react.png", "./ts.png", "./node.png", "./express.png"],
    },

    {
      title: "Legodex",
      description:
        "Une application permettant de cataloguer des collections de LEGO. Ce projet de fin de formation individuel avait pour objectif de créer une application web complète, de la conception à la réalisation, en 48h.",
      img: "legodex.png",
      video: "legodex-video.mp4",
      github: "https://github.com/Arnaud6216/LegoDex",
      technology: ["./react.png", "./ts.png", "./node.png", "./express.png"],
    },
  ];

  return (
    <>
      <section className="projects__section" id="projects">
        <h2 className="section__title">Projets</h2>

        {project.map((item) => (
          <article className="projects__card" key={item.title}>
            <h3 className="projects__card__title">{item.title}</h3>
            <img
              className="projects__card__img"
              src={item.img}
              alt={item.title}
              onClick={() => setSelectedProject(item)}
              onKeyUp={() => setSelectedProject(item)}
            />
          </article>
        ))}

        {selectedProject && (
          <div
            className="projects__popup__overlay"
            onClick={() => setSelectedProject(null)}
            onKeyUp={() => setSelectedProject(null)}
          >
            <div
              className="projects__popup__content"
              onClick={(e) => e.stopPropagation()}
              onKeyUp={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="projects__popup__close"
                onClick={() => setSelectedProject(null)}
              >
                ✖
              </button>
              <h2 className="projects__popup__title">
                {selectedProject.title}
              </h2>
              {selectedProject.video && (
                <video
                  className="projects__popup__video"
                  src={selectedProject.video}
                  autoPlay
                  loop
                >
                  <track
                    kind="captions"
                    srcLang="fr"
                    label="French captions"
                    src=""
                    default
                  />
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="projects__popup__tech-container">
                {selectedProject.technology?.map((tech) => (
                  <img
                    key={tech}
                    className="projects__popup__tech"
                    src={tech}
                    alt="Technologie utilisée"
                  />
                ))}
              </div>
              <p className="projects__popup__description">
                {selectedProject.description}
              </p>
              <a
                className="projects__popup__link"
                href={selectedProject.github}
              >
                Voir sur Github
              </a>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Projects;
