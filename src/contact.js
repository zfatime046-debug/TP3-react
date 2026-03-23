import React from 'react';
import './App.css';

const Contact = () => {
  return (
    <section className="presentation-card">
      <header className="presentation-header">
        <h1>Contact</h1>
      </header>

      <p style={{ marginBottom: '15px' }}>
        Vous êtes nouveau ? Créez votre compte ou contactez-nous.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message..." rows="4"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;