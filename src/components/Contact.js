import React, { useRef } from "react";
import "./Contact.css";

import Swal from "sweetalert2";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_mcpz0wh",
        "template_mo0m3lo",
        form.current,
        "xXzOmG9VfMv9FXXgy"
      )
      .then(
        (result) => {
          Swal.fire("Success!", "Your message has been sent.", "success");
        },
        (error) => {
          Swal.fire(
            "Error!",
            "Something went wrong, please try again.",
            "error"
          );
        }
      );
  };

  return (
    <div className="container-fluid contactContainer">
      <h1 className="contactTitle">Contact Me</h1>

      <div className="contactForm" id="contactForm">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group col-6 mx-auto">
            <label htmlFor="name" className="text-dark">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Enter your name"
            />

            <label htmlFor="email" className="text-dark">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter your email"
            />

            <label htmlFor="message" className="text-dark">
              Message
            </label>
            <textarea
              className="form-control"
              name="message"
              id="message"
              rows="5"
              placeholder="Enter your message"
            />

            <div className="formButtons">
              <button type="submit" className="btn btn-outline-success">
                <i class="fa-solid fa-share"></i> Send
              </button>

              <button type="reset" className="btn btn-outline-danger">
                <i class="fa-solid fa-trash"></i> Clear
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="contactInfo">
        <h2 className="contactInfoTitle">Contact Info</h2>
        <p className="contactInfoText">
          <i className="fas fa-phone-alt"></i> +5492477347638 (Argentina)
        </p>
        <p className="contactInfoText">
          <i className="fas fa-envelope"></i>
          <a href="mailto:memateo@gmail.com"> memateo@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
