export const Contact = () => {
  return (
    <div className="m-5">
      <div>
        <h2 className="text-3xl font-bold text-center text-primary sm:text-4xl font-opensans">
          Contact
        </h2>
      </div>
      <div>
        <p className="text-lg font-semibold text-center text-primary font-opensans">
          (You can contact me through the following form)
        </p>
      </div>
      {/* Contact form */}
      <form className="flex flex-col items-center gap-5 mt-5">
        <input
          type="text"
          placeholder="Name"
          className="border-2 border-primary p-2 rounded-lg w-60 sm:w-80"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-primary p-2 rounded-lg w-60 sm:w-80"
          required
        />
        <textarea
          placeholder="Message"
          className="border-2 border-primary p-2 rounded-lg w-60 sm:w-80"
          required
        />
        <button
          type="submit"
          className="font-opensans text-primary bg-transparent border-2 border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-60 sm:w-80"
        >
          Send
        </button>
      </form>
    </div>
  );
};

{
  /* <button
                type="submit"
                className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Send
              </button> */
}
