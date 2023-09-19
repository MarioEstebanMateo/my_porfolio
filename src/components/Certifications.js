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
import certificateEnglish from "../img/certificateEnglish.jpg";
import procesamientoDeDatosConPython from "../img/procesamientoDeDatosConPython.jpg";

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
          <div className="certification">
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

          <div className="certification">
            <a
              href="https://www.efset.org/cert/qQdvD9"
              target="_blank"
              rel="noreferrer"
            >
              <img src={certificateEnglish} alt="" />
            </a>
            <h6>English Language C2 Level</h6>
            <p>Academia Cultural Inglesa Olivos (1996)</p>
          </div>

          <div className="certification">
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

          <div className="certification">
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

          <div className="certification">
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

          <div className="certification">
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

          <div className="certification">
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

          <div className="certification">
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

          <div className="certification">
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

          <div className="certification">
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

          <div className="certification">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1695159203/Argentina_Programa_4.0_-_Procesamiento_de_datos_con_Python_g1pj4j.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={procesamientoDeDatosConPython} alt="" />
            </a>
            <h6>Procesamiento de Datos con Python</h6>
            <p>Argentina Programa 4.0 (2023)</p>
          </div>

          <div className="certification">
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
