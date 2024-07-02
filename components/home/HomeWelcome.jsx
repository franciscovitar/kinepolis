"use client";

import React from "react";
import { motion } from "framer-motion";
import "../styles/_homewelcome.scss";

// Constantes para efectos de Framer Motion

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const linkVariants = {
  viewport: { once: true },
  initial: { opacity: 0, scale: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.4 },
  },
};

function HomeWelcome() {
  return (
    <div id="inicio" className="HomeWelcome-container">
      <div className="container">
        <motion.h1 {...textVariants}>
          Tu Bienestar es nuestra Prioridad
        </motion.h1>
        <motion.h4 {...textVariants}>
          Tu camino hacia una vida sin dolor y con mayor movilidad empieza acá.
        </motion.h4>

        <div className="botones">
          <motion.a title="whatsapp" href="#nosotros" {...linkVariants}>
            Quienes somos?
          </motion.a>
          <motion.a href="#contacto" {...linkVariants}>
            Solicitar turno
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default HomeWelcome;
