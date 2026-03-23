import { Routes, Route, Link } from 'react-router-dom';
import EcranBienvenue from './Accueil';
import PresentationPlateforme from './Apropos';
import GestionnaireSession from './Connexion';
import Contact from './contact.js';
import LecteurAudio from './LecteurAudio';
import './App.css';

function App() {
  return (
    <div className="app-container">

      {/* HEADER */}
      <header className="app-header">
        <h1 className="titre">Porsche 911 Experience</h1>

        <nav className="navbar">
          <Link to="/">Dashboard</Link>
          <Link to="/apropos">À propos</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* SECTION SESSION */}
      <section className="session-section">
        <h2>Système de démarrage</h2>
        <GestionnaireSession />
      </section>

      {/* ROUTES */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<EcranBienvenue />} />
          <Route path="/apropos" element={<PresentationPlateforme />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;