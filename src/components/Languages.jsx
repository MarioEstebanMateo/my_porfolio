import certificateEnglish from "../assets/img/certificateEnglish.jpg";

export const Languages = () => {
  return (
    <div className="m-10">
      <div>
        <h2 className="text-3xl font-bold text-center text-primary sm:text-4xl font-opensans">
          Languages
        </h2>
      </div>
      {/* Certifications container*/}
      <div className="mt-5 flex flex-wrap justify-center gap-10">
        {/* Certification*/}
        <div className="relative max-w-60 min-w-60 min-h-80 max-h-80 border-2 border-primary p-3 rounded-lg shadow-2xl text-center">
          <img
            src={certificateEnglish}
            alt="English Language Certificate"
            className="w-40 h-30 mx-auto"
          />
          <h3 className="text-center text-primary font-bold mt-2 min-h-12">
            English Language
            <br />
            (C2 Level issued by EF SET)
          </h3>
          <p className="text-center mt-2 min-h-16">
            8 years - ACIO <br /> Buenos Aires, Argentina
          </p>
          <div className="mt-2">
            <a
              href="https://cert.efset.org/qQdvD9"
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