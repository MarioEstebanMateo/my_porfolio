import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

import wandIcon from "../assets/icons/wand.svg";

export const Contact = () => {
  const form = useRef();
  const [isExploding, setIsExploding] = useState(false);

  const props = {
    force: 2.0,
    duration: 10000,
    particleCount: 500,
    width: 1920,
  };

  const resetForm = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_sjlrcbd",
        "template_arfivr6",
        form.current,
        "xXzOmG9VfMv9FXXgy"
      )
      .then(
        () => {
          Swal.fire("Success!", "Your message has been sent.", "success");
          resetForm();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleConfetti = () => {
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
    }, 10000);
  };

  return (
    <div className="m-5">
      <div className="flex items-center justify-center">
        <button
          className="bg-primary text-white p-2 rounded-md my-5 flex items-center justify-center font-opensans font-semibold text-lg hover:bg-black"
          onClick={handleConfetti}
        >
          <img src={wandIcon} alt="Wand Icon" className="mx-2 h-6" />
          Click Me!!
          <img src={wandIcon} alt="Wand Icon" className="mx-2 h-6" />
        </button>
        {isExploding && <ConfettiExplosion {...props} />}
      </div>
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
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center justify-center w-full mt-3"
      >
        <div className="flex flex-col items-center justify-center w-3/4 md:w-1/2">
          <label
            htmlFor="name"
            className="text-primary text-lg font-semibold font-opensans"
          >
            Name
          </label>
          <input
            type="text"
            className="w-full p-2 mt-2 border-2 border-primary rounded-md"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="flex flex-col items-center justify-center w-3/4 md:w-1/2 mt-5">
          <label
            htmlFor="email"
            className="text-primary text-lg font-semibold font-opensans"
          >
            Email
          </label>
          <input
            type="email"
            className="w-full p-2 mt-2 border-2 border-primary rounded-md"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex flex-col items-center justify-center w-3/4 md:w-1/2 mt-5">
          <label
            htmlFor="message"
            className="text-primary text-lg font-semibold font-opensans"
          >
            Message
          </label>
          <textarea
            className="w-full p-2 mt-2 border-2 border-primary rounded-md"
            name="message"
            id="message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <div className="flex flex-col items-center justify-center w-3/4 md:w-1/2 mt-5">
          <button
            type="submit"
            className="font-opensans text-primary bg-transparent border-2 border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-lg px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full"
          >
            Send
          </button>
        </div>
        <div className="flex justify-center items-center gap-3 mt-5">
          <div>
            <p className="text-lg font-semibold text-center text-primary font-opensans">
              You can also contact me through my email:{" "}
            </p>
          </div>
          <div>
            <a
              href="mailto:memateo@gmail.com"
              className="text-lg font-semibold text-center text-primary font-opensans underline hover:text-black"
              target="_blank"
              rel="noreferrer"
            >
              memateo@gmail.com
            </a>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold text-center text-primary font-opensans">
            I´ll be in touch with you as soon as possible!
          </p>
        </div>
      </form>
    </div>
  );
};
