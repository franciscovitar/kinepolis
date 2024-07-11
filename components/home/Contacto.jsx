"use client";

import React, { useState } from "react";
import "../styles/_contacto.scss";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const paragraphVariants = {
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
  whileInView: { width: 100, transition: { duration: 0.5 } },
};

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [consulta, setConsulta] = useState("");

  const sendEmail = () => {
    // Crear un formulario temporal en el DOM

    const form = document.createElement("form");

    // Agregar campos al formulario
    form.innerHTML = `
      <input type="hidden" name="nombre" value="${nombre}">
      <input type="hidden" name="telefono" value="${telefono}">
      <input type="hidden" name="mail" value="${mail}">
      <input type="hidden" name="consulta" value="${consulta}">
    `;

    document.body.appendChild(form);

    emailjs
      .sendForm(
        "service_khoqdvt",
        "template_cu6span",
        form,
        "_Xi61NPw_YghhsDhm"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    document.body.removeChild(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consulta || !telefono || !mail || !nombre) {
      toast.error("Por favor completa todos los campos requeridos.");
      return;
    }

    sendEmail();
    toast.success("Formulario enviado con exito");
    setNombre("");
    setMail("");
    setTelefono("");
    setConsulta("");
  };

  return (
    <div id="contacto" className="contacto-container">
      <div className="contacto-container2">
        {" "}
        <motion.h3 {...paragraphVariants}>Contacto</motion.h3>
        <motion.div className="line mb-5" {...lineVariants}></motion.div>
        <div className="contacto">
          <div className="info">
            <motion.div {...paragraphVariants}>
              <i className="bi bi-geo-alt"></i>
              <h5>UBICACIÓN</h5>
              <p>
                Salta 3269, Rosario <br /> San lorenzo 2520, Rosario
              </p>
            </motion.div>
            <motion.div {...paragraphVariants}>
              <i className="bi bi-whatsapp"></i>
              <h5>WHATSAPP</h5>
              <p>+54 9 3415 40-6669</p>
            </motion.div>
            <motion.div {...paragraphVariants}>
              <i className="bi bi-instagram"></i>
              <h5>Instagram</h5>
              <p>@kinepoliskinesiologia</p>
            </motion.div>
            <motion.div {...paragraphVariants}>
              <i className="bi bi-clock"></i>
              <h5>HORARIO</h5>
              <p>
                <strong>Lunes a viernes:</strong> 8am a 12am y 16pm a 20pm
              </p>
              <p>
                <strong>Sabado y Domingo:</strong> Cerrado
              </p>
            </motion.div>
          </div>
          {/* <motion.form {...paragraphVariants}>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              name="nombre"
              type="text"
              placeholder="Nombre"
            />
            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              name="mail"
              type="text"
              placeholder="Email"
            />
            <input
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              name="telefono"
              type="text"
              placeholder="Teléfono"
            />
            <textarea
              value={consulta}
              onChange={(e) => setConsulta(e.target.value)}
              name="consulta"
              type="text"
              placeholder="Consulta"
            />
            <button type="submit" onClick={handleSubmit}>
              Enviar
            </button>
          </motion.form> */}
        </div>
      </div>
    </div>
  );
}

export default Contacto;
