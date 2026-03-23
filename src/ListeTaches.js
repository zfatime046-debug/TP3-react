import React from 'react';
import './App.css';

const ListeTaches = () => {
  const missions = [
    { id: 'mission-911', libelle: "Optimiser les performances moteur", priorite: "Haute" },
    { id: 'mission-912', libelle: "Améliorer l’aérodynamisme", priorite: "Moyenne" },
    { id: 'mission-913', libelle: "Tests sur circuit", priorite: "Basse" }
  ];

  return (
    <section className="mission-card">
      <header className="mission-header">
        <h3>Centre de Contrôle Porsche 911</h3>
      </header>

      <ul className="mission-list">
        {missions.map((item) => (
          <li key={item.id} className="mission-item">
            <span>{item.libelle}</span>

            <span className={
              item.priorite === "Haute"
                ? "badge high"
                : item.priorite === "Moyenne"
                ? "badge medium"
                : "badge low"
            }>
              {item.priorite}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListeTaches;