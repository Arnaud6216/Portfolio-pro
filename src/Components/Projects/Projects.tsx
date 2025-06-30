import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

function Projects() {
  const { t } = useLanguage();
  const projects = t.projectsCard;
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleOpenVideo = (videoSrc: string) => {
    setActiveVideo(videoSrc);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <h2 className="section__title" id="projects">
        {t.projects.title}
      </h2>
      <p className="section__intro">
        {t.projects.description1} <br /> {t.projects.description2}
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
                  {t.projects.video}
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
                  {t.projects.github}
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
