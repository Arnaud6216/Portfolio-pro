import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contact__section">
        <h2 className="contact__title">Contact</h2>

        <form action="submit" className="contact__form">
          <label htmlFor="name">Nom</label>
          <input
            className="contact__input"
            id="name"
            name="name"
            type="text"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            className="contact__input"
            id="email"
            name="email"
            type="email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            className="contact__input"
            name="message"
            id="message"
            required
          />

          <button type="submit">Envoyer</button>
        </form>
      </section>
    </>
  );
}

export default Contact;
