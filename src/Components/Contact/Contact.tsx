import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contact__section" id="contact">
        <h2 className="section__title">Contact</h2>

        <p className="contact__intro">
          Une question, un retour, ou juste envie d’échanger autour de la tech ?{" "}
          <br />
          N’hésite pas à me contacter !
        </p>

        <form action="submit" className="contact__form">
          <label className="contact__label" htmlFor="name">
            Nom
          </label>
          <input
            className="contact__input"
            id="name"
            name="name"
            type="text"
            placeholder="Tapez votre nom..."
            required
          />

          <label className="contact__label" htmlFor="email">
            Email
          </label>
          <input
            className="contact__input"
            id="email"
            name="email"
            type="email"
            placeholder="Tapez votre email..."
            required
          />

          <label className="contact__label" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Tapez votre message..."
            required
          />

          <button className="contact__button" type="submit">
            Envoyer
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
