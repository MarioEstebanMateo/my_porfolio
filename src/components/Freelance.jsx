import appLafe from "../assets/img/appLaFe.png";
import appLaFeConStock from "../assets/img/appLaFeConStock.png";

export const Freelance = () => {
  return (
        <>
          <div className="m-5">
            <div>
              <h2 className="text-3xl font-bold text-center text-primary sm:text-4xl font-opensans">
                Freelance Work
              </h2>
            </div>
            <div>
              <p className="text-lg font-semibold text-center text-primary font-opensans">
                (I developed these applications for the franchises of the company La Fe S.A.
                <br />
                to help them make their orders more efficient and organized)
              </p>
            </div>
            <div>
          </div>
          {/* Projects container*/}
          <div className="mt-5 flex flex-wrap justify-center gap-10">
            {/* Project */}
            <div className="relative max-w-60 min-w-60 min-h-80 max-h-80 border-2 border-primary p-3 rounded-lg shadow-2xl text-center">
              <img
                src={appLafe}
                alt="App La Fe image"
                className="w-40 h-30 mx-auto"
              />
              <h3 className="text-center text-primary font-bold mt-2 min-h-12">
                App Pedidos La Fe
              </h3>
              <p className="text-center mt-2 min-h-20">
                Technologies used:
                <br />
                React, Tailwind, Vite, Supabase
              </p>
              <div className="mt-2">
                <a
                  href="https://pedidos-la-fe.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Link to project
                </a>
              </div>
            </div>
                        {/* Project */}
            <div className="relative max-w-60 min-w-60 min-h-80 max-h-80 border-2 border-primary p-3 rounded-lg shadow-2xl text-center">
              <img
                src={appLaFeConStock}
                alt="App La Fe image"
                className="w-40 h-30 mx-auto"
              />
              <h3 className="text-center text-primary font-bold mt-2 min-h-12">
                App Pedidos La Fe Con Stock
              </h3>
              <p className="text-center mt-2 min-h-20">
                Technologies used:
                <br />
                React, Tailwind, Vite, Supabase
              </p>
              <div className="mt-2">
                <a
                  href="https://pedidos-la-fe-con-stock.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Link to project
                </a>
              </div>
            </div>
        </div>
        </div>
        </>
  );
}