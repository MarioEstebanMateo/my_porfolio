import React from "react";
import "./Certifications.css";

import analista from "../img/analista.jpg";
import utnDiplo from "../img/utnDiplomaturaEnProgramacionWeb.jpg";
import utnDiseno from "../img/utnDisenoGraficoDigital.jpg";
import primerosPasos from "../img/primerosPasosFrontend.jpg";
import seProgramar from "../img/seProgramar.jpg";
import nucbaDisenoWeb from "../img/nucbaDisenoWeb.jpg";
import nucbaJavascript from "../img/nucbaJavaScript.jpg";
import nucbaReact from "../img/nucbaReact.jpg";
import nucbaBackEnd from "../img/nucbaBackEnd.jpg";
import nucbaProgramacionFullStack from "../img/nucbaProgramacionFullStack.jpg";

const Certifications = () => {
  return (
    <>
      <div className="container-fluid certificationsSection">
        <div>
          <h1 className="titleCertificationsh1">Certifications</h1>
          <p className="titleCertificationsP">
            (Click on certificate to view full size)
          </p>
        </div>
        <div className="certificationsContainer">
          <div className="certification1">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1675053927/Mario%20Privado/Titulo_Analista_de_Sistemas_s2td7i.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={analista} alt="" />
            </a>
            <h6>Analista de Sistemas</h6>
            <p>Inst. Superior Nº5 Pergamino (2021)</p>
          </div>

          <div className="certification2">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1640478250/Mario%20Privado/Certificado_UTN_szkkzq.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={utnDiplo} alt="" />
            </a>
            <h6>Diplomatura en Programacion Web Full Stack</h6>
            <p>UTN E-Learning (2021)</p>
          </div>

          <div className="certification3">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1675955964/Mario%20Privado/argentina_programa_2022_1_vqkoyu.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={seProgramar} alt="" />
            </a>
            <h6>#SeProgramar</h6>
            <p>Argentina Programa 4.0 (2022)</p>
          </div>

          <div className="certification4">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1675955035/Mario%20Privado/certificate-primerosPasosFrontend_tcvcn2.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={primerosPasos} alt="" />
            </a>
            <h6>Primeros Pasos del Desarrollo Frontend</h6>
            <p>Argentina Programa 4.0 (2022)</p>
          </div>

          <div className="certification5">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1677092611/Mario%20Privado/Certificado_UTN_Dise%C3%B1o_Grafico_Digital_njle58.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={utnDiseno} alt="" />
            </a>
            <h6>Diseño Grafico Digital</h6>
            <p>UTN E-Learning (2023)</p>
          </div>

          <div className="certification6">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1675049773/Mario%20Privado/Nucba_Certificado_Dise%C3%B1o_Web_yrp9fa.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={nucbaDisenoWeb} alt="" />
            </a>
            <h6>Diseño Web</h6>
            <p>NUCBA (2023)</p>
          </div>

          <div className="certification7">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1677245111/Mario%20Privado/_storage_emulated_0_Android_data_com.adobe.reader_files_Pictures_Adobe_Acrobat_Exports_TemplateCertificado_1__0_1_fupjio.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={nucbaJavascript} alt="" />
            </a>
            <h6>JavaScript</h6>
            <p>NUCBA (2023)</p>
          </div>

          <div className="certification8">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1683770896/Mario%20Privado/Nucba_Certificado_React_d8kyov.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={nucbaReact} alt="" />
            </a>
            <h6>React</h6>
            <p>NUCBA (2023)</p>
          </div>

          <div className="certification9">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1689025360/Nucba_Certificado_Back_End_mri5xs.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={nucbaBackEnd} alt="" />
            </a>
            <h6>Back End</h6>
            <p>NUCBA (2023)</p>
          </div>

          <div className="certification10">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1689025360/Nucba_Certificado_Programacion_Full_Stack_q8n6c6.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={nucbaProgramacionFullStack} alt="" />
            </a>
            <h6>Programacion Full Stack</h6>
            <p>NUCBA (2023)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
