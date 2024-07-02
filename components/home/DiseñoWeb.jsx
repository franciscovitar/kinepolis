"use client";

import React from "react";
import Image from "next/image";
import Nos from "../../Images/sitioweb.jpg";
import "../styles/_diseñoWeb.scss";
import { motion } from "framer-motion";

const lineVariants = {
  viewport: { once: true },
  initial: { width: 0 },
  whileInView: { width: 60, transition: { duration: 0.5, delay: 0.5 } },
};

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0 },
  },
};

const tittleVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 },
  },
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

function DiseñoWeb() {
  return (
    <div id="desarrollo" className="nos-container gris">
      <div className="fila">
        <motion.div {...imageVariants} className="imagen">
          <Image alt="Nosotros" title="Nosotros" src={Nos}></Image>
        </motion.div>
        <div className="texto">
          <motion.h2 {...tittleVariants}>Nuestro equipo</motion.h2>
          <motion.p {...textVariants}>
            Contamos con la colaboración del profesor <strong>Agustín</strong>,
            quien se desempeña en el ámbito de{" "}
            <strong>Pilates Reformer especializado</strong>, brindando su{" "}
            <strong>aporte cordial</strong> y{" "}
            <strong>dedicación de excelencia</strong>.
          </motion.p>
          <motion.a
            {...textVariants}
            target="blank"
            href="https://wa.me/5493415406669"
          >
            ¡Sacar un turno!
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default DiseñoWeb;
