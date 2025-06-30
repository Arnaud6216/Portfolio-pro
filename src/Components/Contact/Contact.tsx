import "./Contact.css";
import { useLanguage } from "../../context/LanguageContext";

function Contact() {
  const { t } = useLanguage();
  return (
    <>
      <section className="contact__section" id="contact">
        <h2 className="section__title">{t.contact.title}</h2>

        <p className="section__intro">
          {t.contact.description1} <br />
          {t.contact.description2}
        </p>

        <form
          action="https://formspree.io/f/movwakpv"
          method="POST"
          className="contact__form"
        >
          <label className="contact__label" htmlFor="name">
            {t.contact.name}
          </label>
          <input
            className="contact__input"
            id="name"
            name="name"
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
            name="email"
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
      </section>
    </>
  );
}

export default Contact;
