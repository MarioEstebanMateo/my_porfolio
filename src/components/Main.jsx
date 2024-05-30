import heroImage from "../assets/img/heroImage.png";

export const Main = () => {
  return (
    <div>
      <div>
        <img src={heroImage} alt="" />
      </div>
      <div className="text-center px-5 py-5 sm:px-20 bg-[#126699] text-white">
        <h1 className="font-robotoslab text-xl sm:text-2xl">
          Hi, I´m Mario. Nice to meet you!
        </h1>
        <p className="mt-1 mb-3 font-opensans text-sm sm:text-lg">
          I´m Professional with a solid 20-year career in administrative roles,
          now focused on a new career as a Systems Analyst, Full Stack Developer
          and UX/UI Designer.
        </p>
        <p className="mt-3 mb-3 font-opensans text-sm sm:text-lg">
          With a passion for technology and continuous learning, I am committed
          to applying my newly acquired skills and previous experience to
          contribute to the development of innovative solutions.
        </p>
        <p className="mt-3 mb-3 font-opensans text-sm sm:text-lg">
          I am seeking opportunities that allow me to grow professionally and
          continue acquiring new knowledge in the field of software development.
        </p>
      </div>
    </div>
  );
};
