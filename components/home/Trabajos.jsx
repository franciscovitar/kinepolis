"use client";

import "../styles/_trabajo.scss";
import React from "react";
import { motion } from "framer-motion";

import Slider from "react-slick";

const lineVariants = {
  viewport: { once: true },
  initial: { width: 0 },
  whileInView: { width: 70, transition: { duration: 2 } },
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const trabajos = [
  // {
  //   nombre: "Silvia Bertolotti",
  //   reseña:
  //     "Hace un año cuando comencé, por sugerencia de mi traumatologo, no podía ni moverme, todo era con ayuda de Jimena, hoy puedo decir que he mejorado mucho, estoy más flexible, mis dolores de rodilla han notoriamente y ni hablar de mis análisis ( todos los valores q estaban muy elevados, han bajado).  Estoy muy contenta de hacer esta actividad, tanto con Jime como con Agustín, son dos profesionales excelentes y el lugar es muy bonito.  Gracias 🙂",
  //   estrellas: 5,
  // },
  {
    nombre: "Carola Mariani “Lorenza”",
    reseña:
      "Con Jime y Agustín las mejores experiencias y la mayor transformación en mi cuerpo y mente.",
    estrellas: 5,
  },
  {
    nombre: "Ale Vargas",
    reseña:
      "Empecé Pilates éste año y Jimena la profe kinesiologa y dueña del lugar muy profesional al igual que Agustín que es mi otro profesor. Recomiendo el lugar.",
    estrellas: 4,
  },
  {
    nombre: "mariana mollano",
    reseña:
      "Muy buen lugar para hacer pilates, la profe Jimena una genia enseñando. Muy recomendable",
    estrellas: 5,
  },
  {
    nombre: "Gabriela Isele",
    reseña:
      "De excelencia, ya sea en las clases de pilates como también en todo lo relativo a estética y masajes. Jime y su equipo muy profesionales. Recomendado!!!",
    estrellas: 5,
  },
  {
    nombre: "Mariela Diñeiro",
    reseña:
      "Excelente lugar . Clases muy activas, adecuadas para cada edad. La profesora de 10. Muy recomendable. 😊",
    estrellas: 5,
  },
  {
    nombre: "Ale mattia",
    reseña:
      "Excelente nivel de clases. El trato es super cordial y el ambiente ideal para ejercitarse",
    estrellas: 5,
  },
  {
    nombre: "Alicia Beatriz Albanello",
    reseña:
      "Clases muy variadas. Instalaciones muy cómodas. Los docentes 10 puntos",
    estrellas: 5,
  },
  {
    nombre: "Graciela Cruci",
    reseña:
      "Hermoso lugar, la atención muy calida y personalizada. Equipamiento nuevo y en excelentes condiciones.",
    estrellas: 5,
  },
  {
    nombre: "Stella Elias",
    reseña: "Excelente lugar! Jimena muy profesional!!",
    estrellas: 5,
  },
  {
    nombre: "Perla Fontanarrosa",
    reseña: "Excelente trato. Eficiente nivel profesional. Muy recomendable.",
    estrellas: 5,
  },
  {
    nombre: "Luciano Ferraris",
    reseña: "Muy lindas las clases y las instalaciones!",
    estrellas: 5,
  },
  {
    nombre: "Antonela Bellis",
    reseña: "Excelentes profes! Muy lindo lugar.",
    estrellas: 4,
  },
  {
    nombre: "Jeronimo Martoccia",
    reseña: "Nunca había hecho y me asombro para bien. Excelente la gente.",
    estrellas: 4,
  },
  {
    nombre: "Griselda Borgonovo",
    reseña: "Exelente atención y dedicación. Gracias Jimena!!",
    estrellas: 5,
  },
  {
    nombre: "Maria Eugenia Romano",
    reseña: "Profesionales de calidad y el lugar muy cómodo y equipado",
    estrellas: 5,
  },
  {
    nombre: "Silvina Bordignon",
    reseña: "Excelente lugar ! Jime es una genia !!!",
    estrellas: 5,
  },
  {
    nombre: "Eliana Soledad Ramírez",
    reseña: "Excelente espacio, muy cómodo y agradable.",
    estrellas: 5,
  },
  {
    nombre: "Agustin Cantero",
    reseña: "Excelente lugar! Muy cómodo 👍🏾",
    estrellas: 5,
  },
  {
    nombre: "maria jose salvay",
    reseña: "Excelente atención. Muy personalizada.",
    estrellas: 5,
  },
  {
    nombre: "Bibiana alejandra Lopez",
    reseña: "Excelentes clases y profesores!!!!",
    estrellas: 5,
  },
  {
    nombre: "Silvia Moretti",
    reseña: "Muy buena atención y predisposición",
    estrellas: 4,
  },
  {
    nombre: "Paula Giaccaglia",
    reseña: "Excelente!!!!",
    estrellas: 5,
  },
];

function Trabajos() {
  return (
    <div id="opiniones" className="contenedor-principal-Trabajos">
      <div className="titulo">
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          className="m-0"
        >
          Opiniones
        </motion.h2>
        <motion.div
          {...lineVariants}
          className="line m-auto mt-2 mb-5"
        ></motion.div>
        <motion.h3
          className="description"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}
        >
          Experiencias de clientes
        </motion.h3>
      </div>
      <Slider className="elSlider" {...settings}>
        {trabajos.map((trabajo, index) => (
          <div key={index} className="trabajos">
            <div className="trabajo">
              {" "}
              {trabajo.reseña ? <p>- &quot;{trabajo.reseña}&quot;</p> : ""}
              <div className="npmyest">
                <div className="estrellas">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>

                <h4> &quot;{trabajo.nombre}&quot;</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <a href="https://wa.me/59898191219">
        <motion.button className="boton">Dejanos ayudarte!</motion.button>
      </a>
    </div>
  );
}

export default Trabajos;
