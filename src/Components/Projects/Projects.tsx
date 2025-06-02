import "./Projects.css";
import { useState } from "react";

function Projects() {
  interface Project {
    title: string;
    description: string;
    img: string;
    video?: string;
  }

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const project = [
    {
      title: "Wild Away",
      description:
        "Une application de réservation d'hotêls et de restaurants partout dans le monde avec une carte interactive.",
      img: "wildaway.png",
    },
    {
      title: "Code Quest Academy",
      description:
        "Un jeu éducatif interactif mêlant investigation et apprentissage, où les joueurs incarnent un étudiant en développement web, résolvant des énigmes pour maîtriser HTML, CSS, JavaScript, et autres technologies, tout en explorant un narratif inspiré de la pop culture.",
      img: "./codequest.png",
    },
    {
      title: "Z Warriors Clicker",
      description:
        "Un jeu incremental sur l'univers de Dragon Ball, où les joueurs cliquent pour accumuler de la puissance, débloquer des transformations et techniques puissantes, et vaincre des ennemis emblématiques.",
      img: "./zwarrior.png",
      video: "./zwarrior-video.mp4",
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
              <p className="projects__popup__description">
                {selectedProject.description}
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Projects;
