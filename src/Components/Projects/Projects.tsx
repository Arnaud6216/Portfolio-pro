import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleOpenVideo = (videoSrc: string) => {
    setActiveVideo(videoSrc);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  const projects = [
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
      <h2 className="section__title" id="projects">
        Projets
      </h2>
      <p className="section__intro">
        Découvrez mes réalisations : <br /> Des projets qui m’ont permis de
        progresser, tester, et consolider mes compétences
      </p>
      <section className="project__container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          loop
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <div className="project__media">
                <img
                  src={project.img}
                  className="project__img"
                  alt="aperçu du projet"
                />
                <button
                  type="button"
                  className="project__video-btn"
                  onClick={() => handleOpenVideo(project.video)}
                >
                  ▶ Aperçu
                </button>
              </div>
              <div className="project__content">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__text">{project.description}</p>
                <a
                  className="project__github"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir sur Github
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {activeVideo && (
        <div
          className="project__video-overlay"
          onClick={handleCloseVideo}
          onKeyUp={handleCloseVideo}
        >
          <video
            src={activeVideo}
            preload="auto"
            className="project__video-full"
            autoPlay
            loop
          >
            <track
              kind="captions"
              src=""
              srcLang="fr"
              label="French captions"
              default
            />
          </video>
        </div>
      )}
    </>
  );
}

export default Projects;
