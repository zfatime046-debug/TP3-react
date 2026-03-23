import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as GestionnaireDeRoutes } from 'react-router-dom';
import InterfacePrincipale from './App';

const elementRacine = document.getElementById('root');

if (elementRacine) {
  const root = createRoot(elementRacine);

  root.render(
    <StrictMode>
      <GestionnaireDeRoutes>
        <InterfacePrincipale />
      </GestionnaireDeRoutes>
    </StrictMode>
  );
}