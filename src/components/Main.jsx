import heroImage from "../assets/img/heroImage.png";

export const Main = () => {
  return (
    <div>
      <div>
        <img src={heroImage} alt="" />
      </div>
      <div className="text-center px-5 py-5 sm:px-20 bg-primary text-white">
        <h1 className="font-robotoslab text-xl sm:text-2xl">
          Hi, I´m Mario. Nice to meet you!
        </h1>
        <p className="mt-1 mb-3 font-opensans text-sm sm:text-lg">
          As a professional with over 13 years of experience at my current company, I have developed strong skills in administration, billing, and data analysis. My primary focus has been optimizing internal processes and ensuring efficient management in the administrative area.
        </p>
        <p className="mt-3 mb-3 font-opensans text-sm sm:text-lg">
          In parallel, I have expanded my skills in technology and IT development, completing training programs in Full Stack development, UX/UI design, and systems analysis. I am excited to combine my administrative experience with my technological expertise to deliver innovative solutions and enhance the user experience.
        </p>
      </div>
    </div>
  );
};
