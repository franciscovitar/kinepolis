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
          Rehabilitacion, Estética y Pilates Reformer
        </motion.h1>
        <motion.h4 {...textVariants}>
          Cuidate, con nuestros tratamientos
        </motion.h4>

        <div className="botones">
          <motion.a title="whatsapp" href="#nosotros" {...linkVariants}>
            Quienes somos?
          </motion.a>
          <motion.a href="https://wa.me/5493415406669" {...linkVariants}>
            Veni a mimarte
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default HomeWelcome;
