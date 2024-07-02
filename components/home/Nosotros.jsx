"use client";

import React from "react";
import Image from "next/image";
import Nos from "../../Images/nosotros.jpg";
import "../styles/_diseñoWeb.scss";
import { motion } from "framer-motion";

const tittleVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 },
  },
};

const lineVariants = {
  viewport: { once: true },
  initial: { width: 5 },
  whileInView: { width: 100, transition: { duration: 0.5, delay: 0.7 } },
};
const imageVariants = {
  initial: { scale: 0.8, opacity: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
  viewport: { once: true },
};

function Nosotros() {
  return (
    <div id="nosotros" className="nos-container">
      <div className="fila">
        <motion.div {...imageVariants} className="imagen">
          <Image alt="Nosotros" title="Nosotros" src={Nos}></Image>
        </motion.div>
        <div className="texto">
          <motion.h2 {...tittleVariants}>¿Quiénes somos?</motion.h2>
          <motion.div className="line" {...lineVariants}></motion.div>
          <motion.p {...tittleVariants}>
            Consultorio de <strong>Kinesiología y Rehabilitación</strong>,{" "}
            <strong>Estética</strong> y <strong>Pilates Reformer</strong>, con
            una antigüedad de <strong>9 años</strong>, en constante crecimiento,
            contando actualmente con sucursal en{" "}
            <strong>Barrio Luis Agote</strong> y otra en{" "}
            <strong>Barrio Pichincha</strong> de la{" "}
            <strong>Ciudad de Rosario</strong>,{" "}
            <strong>Santa Fe, Argentina</strong>.
          </motion.p>
          <motion.a
            {...tittleVariants}
            target="blank"
            href="https://wa.me/5493415406669"
          >
            Contáctanos
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
