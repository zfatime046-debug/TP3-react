import { useState } from 'react';
import './App.css';

const SessionPorsche = () => {
  const [estAuthentifie, setEstAuthentifie] = useState(false);

  const basculerStatut = () => {
    setEstAuthentifie(prev => !prev);
  };

  return (
    <section className="session-card">
      <header>
        <h3 className={estAuthentifie ? "status-on" : "status-off"}>
          {estAuthentifie 
            ? "Mode Sport Activé 🚗" 
            : "Mode Parking 🅿️"}
        </h3>
      </header>

      <article className="session-text">
        <p>
          {estAuthentifie
            ? "Bienvenue pilote. Accès total aux performances de votre Porsche 911."
            : "Veuillez démarrer le moteur pour accéder au tableau de bord."}
        </p>
      </article>

      <footer>
        <button 
          onClick={basculerStatut}
          className={estAuthentifie ? "btn-off" : "btn-on"}
        >
          {estAuthentifie ? "Connecté" : "Se connecter"}
        </button>
      </footer>
    </section>
  );
};

export default SessionPorsche;