import analista from "../assets/img/analista.jpg";
import utnDiplomaturaEnProgramacionWeb from "../assets/img/utnDiplomaturaEnProgramacionWeb.jpg";
import nucbaProgramacionFullStack from "../assets/img/nucbaProgramacionFullStack.jpg";
import utnDisenoGraficoDigital from "../assets/img/utnDisenoGraficoDigital.jpg";
import nucbaUXUI from "../assets/img/nucbaUXUI.jpg";

export const Certifications = () => {
  return (
    <div className="m-10">
      <div>
        <h2 className="text-3xl font-bold text-center text-primary sm:text-4xl font-opensans">
          Certifications
        </h2>
      </div>
      {/* Certifications container*/}
      <div className="mt-5 flex flex-wrap justify-center gap-10">
        {/* Certification*/}
        <div className="relative max-w-60 min-w-60 min-h-80 max-h-50 border-2 border-primary p-3 rounded-lg shadow-2xl text-center">
          <img
            src={analista}
            alt="Systems Analist certificate"
            className="w-40 h-30 mx-auto"
          />
          <h3 className="text-center text-primary font-bold mt-2 min-h-12">
            Systems Analist
          </h3>
          <p className="text-center mt-2 min-h-16">
            2018-2021 - ISFDyT Nº5
            <br />
            Pergamino, Argentina
          </p>
          <div className="mt-2">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1675053927/Mario%20Privado/Titulo_Analista_de_Sistemas_s2td7i.jpg"
              target="_blank"
              rel="noreferrer"
              className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Link to certificate
            </a>
          </div>
        </div>
        {/* Certification*/}
        <div className="relative max-w-60 min-w-60 min-h-80 max-h-50 border-2 border-primary p-3 rounded-lg shadow-2xl text-center">
          <img
            src={utnDiplomaturaEnProgramacionWeb}
            alt="Full Stack Diploma with React JS"
            className="w-40 h-30 mx-auto"
          />
          <h3 className="text-center text-primary font-bold mt-2 min-h-12">
            Full Stack Diploma with React JS
          </h3>
          <p className="text-center mt-2 min-h-16">
            (2021) E-Learning UTN <br /> Buenos Aires, Argentina
          </p>
          <div className="mt-2">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1640478250/Mario%20Privado/Certificado_UTN_szkkzq.jpg"
              target="_blank"
              rel="noreferrer"
              className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Link to certificate
            </a>
          </div>
        </div>
        {/* Certification*/}
        <div className="relative max-w-60 min-w-60 min-h-80 max-h-50 border-2 border-primary p-3 rounded-lg shadow-2xl text-center">
          <img
            src={nucbaProgramacionFullStack}
            alt="Full Stack Developer certificate"
            className="w-40 h-30 mx-auto"
          />
          <h3 className="text-center text-primary font-bold mt-2 min-h-12">
            Full Stack Developer
          </h3>
          <p className="text-center mt-2 min-h-16">
            (2022-2023) - NUCBA <br /> Buenos Aires, Argentina
          </p>
          <div className="mt-2">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1689025360/Mario%20Privado/Nucba_Certificado_Programacion_Full_Stack_q8n6c6.jpg"
              target="_blank"
              rel="noreferrer"
              className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Link to certificate
            </a>
          </div>
        </div>
        {/* Certification*/}
        <div className="relative max-w-60 min-w-60 min-h-80 max-h-50 border-2 border-primary p-3 rounded-lg shadow-2xl text-center">
          <img
            src={utnDisenoGraficoDigital}
            alt="Digital Graphic Designer certificate"
            className="w-40 h-30 mx-auto"
          />
          <h3 className="text-center text-primary font-bold mt-2 min-h-12">
            Digital Graphic Designer
          </h3>
          <p className="text-center mt-2 min-h-16">
            (2023) E-Learning UTN <br /> Buenos Aires, Argentina
          </p>
          <div className="mt-2">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1677092611/Mario%20Privado/Certificado_UTN_Dise%C3%B1o_Grafico_Digital_njle58.jpg"
              target="_blank"
              rel="noreferrer"
              className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Link to certificate
            </a>
          </div>
        </div>
        {/* Certification*/}
        <div className="relative max-w-60 min-w-60 min-h-80 max-h-50 border-2 border-primary p-3 rounded-lg shadow-2xl text-center">
          <img
            src={nucbaUXUI}
            alt="UX/UI Designer Degree certificate"
            className="w-40 h-30 mx-auto"
          />
          <h3 className="text-center text-primary font-bold mt-2 min-h-12">
            UX/UI Designer Degree
          </h3>
          <p className="text-center mt-2 min-h-16">
            (2023-2024) - NUCBA <br /> Buenos Aires, Argentina
          </p>
          <div className="mt-2">
            <a
              href="https://res.cloudinary.com/dwxoq8n2m/image/upload/v1705439616/Mario%20Privado/Nucba_Certificado_Ux_Ui_Degree.jpg"
              target="_blank"
              rel="noreferrer"
              className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Link to certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
