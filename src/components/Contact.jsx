import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].contact;

  const resetForm = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();
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
          Swal.fire({
            title: t.successTitle,
            text: t.successMessage,
            icon: "success",
            confirmButtonColor: "#6366f1",
          });
          resetForm();
        },
        (error) => {
          setIsSending(false);
          console.log("FAILED...", error.text);
          Swal.fire({
            title: t.errorTitle,
            text: t.errorMessage,
            icon: "error",
            confirmButtonColor: "#6366f1",
          });
        }
      );
  };

  return (
    <div className="py-16 px-5 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
            <Mail className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">{t.subtitle}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-robotoslab mb-4">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-opensans">
            {t.description}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form Container */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-25"></div>
          
          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="text-gray-700 text-sm font-semibold font-opensans flex items-center gap-2 mb-2"
                >
                  <User className="w-4 h-4 text-purple-600" />
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors font-opensans"
                  name="name"
                  id="name"
                  placeholder={t.namePlaceholder}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="text-gray-700 text-sm font-semibold font-opensans flex items-center gap-2 mb-2"
                >
                  <Mail className="w-4 h-4 text-purple-600" />
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors font-opensans"
                  name="email"
                  id="email"
                  placeholder={t.emailPlaceholder}
                  required
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="text-gray-700 text-sm font-semibold font-opensans flex items-center gap-2 mb-2"
                >
                  <MessageSquare className="w-4 h-4 text-purple-600" />
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors font-opensans min-h-[150px] resize-none"
                  name="message"
                  id="message"
                  placeholder={t.messagePlaceholder}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {t.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.sendMessage}
                  </>
                )}
              </button>
            </div>

            {/* Alternative Contact */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 font-opensans">
                Or email me directly at{" "}
                <a
                  href="mailto:memateo@gmail.com"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:underline"
                >
                  memateo@gmail.com
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-2 font-opensans">
                I'll get back to you within 24 hours!
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
