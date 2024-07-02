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
          <i className="bi bi-lightbulb"></i>
          <h3>DEPILACIÓN LÁSER</h3>
          <p>🎖️ Depilación indolora y eficaz para todo tipo de piel.</p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-snow"></i>
          <h3>CRIOLIPOLISIS</h3>
          <p>❄️ Elimina grasa localizada con frío sin dañar la piel.</p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-magic"></i>
          <h3>RADIOFRECUENCIA FACIAL Y CORPORAL</h3>
          <p>🌟 Rejuvenece y reafirma la piel con radiofrecuencia.</p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-waves"></i>
          <h3>ULTRACAVITACIÓN</h3>
          <p>⚡️ Reduce grasa y remodela el cuerpo con ultracavitación.</p>
        </motion.div>
        <motion.div {...servVariants} className="servicio">
          <i className="bi bi-align-center"></i>
          <h3>PILATES REFORMER</h3>
          <p>🧘‍♀️ Mejora flexibilidad y fortalece con pilates reformer.</p>
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
