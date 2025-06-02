import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const resetForm = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit "Send"
    setIsSending(true);

    emailjs
      .sendForm(
        "service_ssgigsf",
        "template_arfivr6",
        form.current,
        "xXzOmG9VfMv9FXXgy"
      )
      .then(
        () => {
          setIsSending(false);
          Swal.fire("Success!", "Your message has been sent.", "success");
          resetForm();
        },
        (error) => {
          setIsSending(false);
          console.log("FAILED...", error.text);
          Swal.fire("Error!", "Failed to send message. Please try again.", "error");
        }
      );
  };

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
        <div className="flex flex-col items-center justify-center w-3/4 md:w-1/2 mt-10 mb-5">
          <button
            type="submit"
            disabled={isSending}
            className="font-opensans text-primary bg-transparent border-2 border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-lg px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full"
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </div>
        <div className="flex text-center mt-">
          <div>
            <p className="text-lg font-semibold text-center text-primary font-opensans">
              You can also contact me through my email:{" "}
              <a
                href="mailto:memateo@gmail.com"
                className="text-lg font-semibold text-center text-primary font-opensans underline hover:text-black"
                target="_blank"
                rel="noreferrer"
              >
                memateo@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold text-center text-primary font-opensans mb-3">
            I´ll be in touch with you as soon as possible!
          </p>
        </div>
      </form>
    </div>
  );
};
