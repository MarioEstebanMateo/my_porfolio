import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const Contact = () => {
  const form = useRef();

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
        className="flex flex-col items-center justify-center w-full mt-10"
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
            className="w-full p-2 mt-2 border border-primary rounded-md"
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
            className="w-full p-2 mt-2 border border-primary rounded-md"
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
            className="w-full p-2 mt-2 border border-primary rounded-md"
            name="message"
            id="message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <div className="flex flex-col items-center justify-center w-3/4 md:w-1/2 mt-5">
          <button
            type="submit"
            className="w-full p-2 text-lg font-semibold text-white bg-primary rounded-md font-opensans"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
