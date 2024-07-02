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

function Servicios() {
  return (
    <div id="servicios" className="servicios-container">
      <div className="titulo">
        <motion.h2 {...textVariants}>
          Nuestros servicios de <strong>Kinepolis</strong>
        </motion.h2>
        <motion.p {...textVariants}>
          En nuestra clínica, nos dedicamos a mejorar tu salud física y
          bienestar general. Utilizamos técnicas especializadas para aliviar el
          dolor, mejorar la movilidad y promover una vida activa y saludable.
        </motion.p>
      </div>
      <div className="servicios">
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-bandaid"></i>
          <h3>REHABILITACIÓN TRAUMATOLÓGICA</h3>
          <p>
            🌿 Tratamientos personalizados para rehabilitar lesiones
            traumatológicas y mejorar tu calidad de vida.
          </p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-spa"></i>
          <h3>MASAJES DESCONTRACTURANTES</h3>
          <p>
            💆‍♂️ Masajes especializados para aliviar tensiones y contracturas
            musculares.
          </p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-activity"></i>
          <h3>FISIOTERAPIA</h3>
          <p>
            🏋️‍♀️ Tratamientos de fisioterapia para mejorar la movilidad y reducir
            el dolor.
          </p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-brush"></i>
          <h3>ESTÉTICA</h3>
          <p>
            💆‍♀️ Tratamientos estéticos personalizados para el cuidado de tu piel
            y cuerpo.
          </p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-lightbulb"></i>
          <h3>DEPILACIÓN LÁSER</h3>
          <p>
            🎖️ Eliminación del vello de forma eficaz y duradera con tecnología
            láser.
          </p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-snow"></i>
          <h3>CRIOLIPOLISIS</h3>
          <p>
            ❄️ Reducción de grasa localizada mediante el uso de frío controlado.
          </p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-magic"></i>
          <h3>RADIOFRECUENCIA FACIAL Y CORPORAL</h3>
          <p>
            🌟 Tratamientos de radiofrecuencia para rejuvenecer la piel y
            mejorar su firmeza.
          </p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-waves"></i>
          <h3>ULTRACAVITACIÓN</h3>
          <p>
            ⚡️ Técnica avanzada para la reducción de grasa y remodelación
            corporal.
          </p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-align-center"></i>
          <h3>PILATES REFORMER</h3>
          <p>
            🧘‍♀️ Ejercicios de pilates con equipo reformer para mejorar la
            flexibilidad y fortalecer el cuerpo.
          </p>
        </motion.div>
      </div>

      <div className="boton">
        <motion.a
          {...textVariants}
          href="https://wa.me/5493415406669"
          target="_blank"
        >
          ¡Sentite mejor hoy mismo!
        </motion.a>
      </div>
    </div>
  );
}

export default Servicios;
