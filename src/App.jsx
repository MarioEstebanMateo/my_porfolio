import updatingImg from "./assets/img/updating.jpg";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-2xl">Mario Esteban Mateo´s Resume</h1>
      </div>
      <div className="">
        <img src={updatingImg} alt="updating image" />
      </div>
      <div className="flex flex-col text-center">
        <h2 className="text-xl mb-6">
          Meanwhile you can download my resume below
        </h2>
        <button className="mb-4">
          <a
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            href="https://drive.google.com/file/d/1FJiggbu3oYMD4eMeafORA6stazZny_Oq/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </button>
        <h2 className="text-xl mb-6">Or you can visit my LinkedIn profile</h2>
        <button>
          <a
            className="bg-[#0A66C2] hover:bg-black text-white font-bold py-2 px-4 rounded-full"
            href="https://www.linkedin.com/in/marioestebanmateo/"
            target="_blank"
            rel="noreferrer"
          >
            Visit LinkedIn Profile
          </a>
        </button>
      </div>
    </div>
  );
}

export default App;
