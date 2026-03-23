import React from 'react';
import './App.css';

const Presentation911 = () => {
  const infosProjet = {
    version: "911.1.0",
    auteur: "Porsche Experience Studio",
    mission: "Offrir une interface immersive inspirée de la Porsche 911 avec React."
  };

  return (
    <article className="presentation-card">
      <header className="presentation-header">
        <h1>À propos de la Porsche 911 Experience</h1>
      </header>

      <section className="description-detaillee">
        <p>
          Cette application a été conçue pour illustrer les possibilités de
          <strong> React.js</strong> à travers une interface moderne inspirée de
          l’univers <strong>Porsche 911</strong>. Elle met en avant des composants
          modulaires, une navigation claire et une expérience visuelle premium.
        </p>

        <ul className="presentation-list">
          <li><strong>Mission :</strong> {infosProjet.mission}</li>
          <li><strong>Version :</strong> {infosProjet.version}</li>
          <li><strong>Statut :</strong> Configuration haute performance active</li>
          <li><strong>Signature :</strong> Élégance, vitesse et précision</li>
        </ul>
      </section>

      <footer className="presentation-footer">
        <p>© 2026 - Porsche 911 Digital Garage - FST Marrakech</p>
      </footer>
    </article>
  );
};

export default Presentation911;