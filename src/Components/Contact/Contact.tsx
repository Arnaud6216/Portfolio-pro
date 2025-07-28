import "./Contact.css";
import { useLanguage } from "../../context/LanguageContext";
import emailjs from "emailjs-com";
import { useRef, useState, useEffect } from "react";

function Contact() {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_55mtr7a",
          "template_1avi11d",
          form.current,
          "JdwYrR3BcINRUA56o"
        )
        .then(
          () => {
            setStatus("Message envoyé !");
            (e.target as HTMLFormElement).reset();
          },
          () => {
            setStatus("Erreur lors de l’envoi.");
          }
        );
    }
  };

  useEffect(() => {
    if (status) {
      setFadeOut(false);

      const fadeTimeout = setTimeout(() => {
        setFadeOut(true);
      }, 5000);

      const hideTimeout = setTimeout(() => {
        setStatus("");
      }, 6000);

      return () => {
        clearTimeout(fadeTimeout);
        clearTimeout(hideTimeout);
      };
    }
  }, [status]);

  return (
    <section className="contact__section" id="contact">
      <h2 className="section__title">{t.contact.title}</h2>

      <p className="section__intro">
        {t.contact.description1} <br />
        {t.contact.description2}
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <label className="contact__label" htmlFor="name">
          {t.contact.name}
        </label>
        <input
          className="contact__input"
          id="name"
          name="user_name"
          type="text"
          placeholder={t.contact.placeholderName}
          required
        />

        <label className="contact__label" htmlFor="email">
          {t.contact.email}
        </label>
        <input
          className="contact__input"
          id="email"
          name="user_email"
          type="email"
          placeholder={t.contact.placeholderEmail}
          required
        />

        <label className="contact__label" htmlFor="message">
          {t.contact.message}
        </label>
        <textarea
          name="message"
          id="message"
          placeholder={t.contact.placeholderMessage}
          required
        />

        <button className="contact__button" type="submit">
          {t.contact.send}
        </button>
      </form>

      {status && (
        <p
          className={`contact__status ${
            status.includes("envoyé") ? "success" : "error"
          } ${fadeOut ? "fade-out" : ""}`}
        >
          {status}
        </p>
      )}
    </section>
  );
}

export default Contact;
