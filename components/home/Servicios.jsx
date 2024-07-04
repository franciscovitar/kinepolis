"use client";

import React from "react";
import "../styles/_servicios.scss";

import { motion } from "framer-motion";

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const servVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 10 },
  whileHover: { scale: 1.03, transition: { duration: 0.3 } },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const lineVariants = {
  viewport: { once: true },
  initial: { width: 5 },
  whileInView: { width: 100, transition: { duration: 0.5 } },
};

function Servicios() {
  return (
    <div id="servicios" className="servicios-container">
      <div className="titulo">
        <motion.h2 {...textVariants}>
          Servicios de <strong>Kinepolis</strong>
        </motion.h2>
        <motion.div className="line m-auto" {...lineVariants}></motion.div>
        <motion.p {...textVariants}>
          En Kinepolis, mejoramos tu salud física y bienestar con técnicas
          especializadas que alivian el dolor, mejoran la movilidad y fomentan
          una vida activa y saludable.
        </motion.p>
      </div>
      <div className="servicios">
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-bandaid"></i>
          <h3>REHABILITACIÓN TRAUMATOLÓGICA</h3>
          <p>
            Tratamientos personalizados para rehabilitar lesiones
            traumatológicas. Mejora tu calidad de vida con nuestros
            especialistas que utilizan técnicas avanzadas para una recuperación
            efectiva y rápida.
          </p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-clipboard-heart"></i>
          <h3>MASAJES DESCONTRACTURANTES</h3>
          <p>
            Masajes especializados para aliviar tensiones y contracturas
            musculares. Relájate en un ambiente tranquilo y deja que nuestros
            expertos eliminen tus dolores y estrés.
          </p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-activity"></i>
          <h3>FISIOTERAPIA</h3>
          <p>
            Tratamientos de fisioterapia para mejorar la movilidad y reducir el
            dolor. Rehabilitación integral para recuperar la funcionalidad de tu
            cuerpo con ejercicios personalizados. Utilizamos equipos nuevos y
            modernos que brindan los mejores resultados.
          </p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-lightbulb"></i>
          <h3>DEPILACIÓN LÁSER</h3>
          <p>
            Resultados desde la primera sesión, rápido y seguro. Aclara zonas
            pigmentadas, combate afecciones cutáneas, disminuye vello corporal
            progresivamente. Indoloro y apto para todo tipo de pieles.
          </p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-snow"></i>
          <h3>CRIOLIPOLISIS</h3>
          <p>
            Congela y destruye la grasa localizada sin dañar la piel. Método no
            invasivo para esculpir tu cuerpo y eliminar grasa que no desaparece
            con dieta ni ejercicio.
          </p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-magic"></i>
          <h3>RADIOFRECUENCIA FACIAL Y CORPORAL</h3>
          <p>
            Rejuvenece la piel, mejora su firmeza y elimina líneas de expresión.
            Indoloro, no invasivo, resultados desde la primera sesión. Genera
            colágeno y elastina, suaviza y tensa la piel.
          </p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-droplet-half"></i>
          <h3>ULTRACAVITACIÓN</h3>
          <p>
            Técnica avanzada para la reducción de grasa y remodelación corporal.
            Eficaz, indoloro y no invasivo, ayuda a esculpir tu cuerpo de manera
            segura y efectiva.
          </p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-bullseye"></i>
          <h3>PILATES REFORMER</h3>
          <p>
            Ejercicios de pilates con equipo reformer para mejorar flexibilidad
            y fortalecer el cuerpo. Clases dinámicas en un ambiente ameno con
            profesionales a cargo. ¡No te vas a arrepentir!
          </p>
        </motion.div>
      </div>

      <div className="boton">
        <motion.a
          {...textVariants}
          href="https://wa.me/5493415406669"
          target="_blank"
        >
          Quiero sentirme bien!
        </motion.a>
      </div>
    </div>
  );
}

export default Servicios;
