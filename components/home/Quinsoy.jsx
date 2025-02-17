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

function Quiensoy() {
  return (
    <div id="soy" className="nos-container gris">
      <div className="fila">
        <div className="texto">
          <motion.h2 {...tittleVariants}>¿Quién soy?</motion.h2>
          <motion.div className="line" {...lineVariants}></motion.div>
          <motion.p {...tittleVariants}>
            Mi nombre es <strong>Jimena Salvay</strong>,{" "}
            <strong>Licenciada en Kinesiología y Fisiatría</strong>, graduada en{" "}
            <strong>UGR</strong>. Previamente realicé el{" "}
            <strong>Profesorado de Educación Física</strong> en{" "}
            <strong>ISEF Nro 11</strong>, el{" "}
            <strong>Instructorado de Pilates Reformer</strong>y el{" "}
            <strong>Instructorado de Hatha Yoga</strong>. Actualmente brindo mis
            servicios como <strong>kinesióloga</strong> y profesora en{" "}
            <strong>Kinepolis Kinesiología</strong>.
          </motion.p>
          <motion.a {...tittleVariants} href="#servicios">
            Ver servicios
          </motion.a>
        </div>
        <motion.div {...imageVariants} className="imagen yo">
          <Image alt="Nosotros" title="Nosotros" src={Nos}></Image>
        </motion.div>
      </div>
    </div>
  );
}

export default Quiensoy;
