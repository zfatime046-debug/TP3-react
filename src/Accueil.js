import React from 'react';
import MissionPorsche from './ListeTaches'; 
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';
import './App.css';

const EcranBienvenue = () => {
  const dateAujourdhui = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="dashboard911-container">

      <header className="dashboard-header">
        <h1>Porsche 911 Dashboard</h1>
        <p className="date-text">
          {dateAujourdhui}
        </p>
      </header>

      <div className="divider"></div>

      <article className="intro-text">
        <p>
          Bienvenue pilote. Accédez aux systèmes de contrôle et aux performances de votre Porsche 911.
        </p>
      </article>

      <div className="dashboard-elements">
        <Logo />
        <LecteurAudio />
      </div>

      <section className="mission-section">
        <MissionPorsche />
      </section>

    </section>
  );
};

export default EcranBienvenue;