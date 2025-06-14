import "./Projects.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

function Projects() {
  const slidesData = [
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
      <h2 className="section__title">Projets</h2>
      <main>
        <div className="container">
          <Swiper
            modules={[Pagination]}
            grabCursor
            initialSlide={0}
            centeredSlides
            slidesPerView={1}
            speed={800}
            slideToClickedSlide
            pagination={{ clickable: true }}
            breakpoints={{
              320: { spaceBetween: 40 },
              650: { spaceBetween: 30 },
              1000: { spaceBetween: 20 },
            }}
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.title}>
                <img
                  className="projects__card__img"
                  src={slide.img}
                  alt={slide.title}
                />
                <div className="content">
                  <div className="text-box">
                    <h3 className="projects__card__title">{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  );
}

export default Projects;
