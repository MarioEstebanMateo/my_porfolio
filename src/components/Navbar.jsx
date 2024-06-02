import logoGitHub from "../assets/icons/logoGithub.svg";
import logoLinkedIn from "../assets/icons/logoLinkedin.svg";
import logoGmail from "../assets/icons/logoGmail.svg";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center pt-5 pb-5 shadow-sm">
      <div className="ml-1 sm:ml-5 hover:scale-110 ease-in-out duration-300">
        <h1 className="font-robotoslab text-primary font-bold text-sm sm:text-lg">
          Mario´s Portfolio
        </h1>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1FJiggbu3oYMD4eMeafORA6stazZny_Oq/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Download Resume
        </a>
      </div>
      <div className="flex justify-center items-center gap-3 mr-1 sm:mr-5 sm:gap-10">
        <div className="hover:scale-125 ease-in-out duration-300">
          <a href="mailto:memateo@gmail.com" target="_blank" rel="noreferrer">
            <img src={logoGmail} alt="logo Gmail" />
          </a>
        </div>
        <div className="hover:scale-125 ease-in-out duration-300">
          <a
            href="https://www.linkedin.com/in/marioestebanmateo/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logoLinkedIn} alt="logo LinkedIn" />
          </a>
        </div>
        <div className="hover:scale-125 ease-in-out duration-300">
          <a
            href="https://github.com/MarioEstebanMateo"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logoGitHub} alt="logo GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
};
