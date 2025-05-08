import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './styles/global.css';

const renderApp = () => {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    throw new Error(
      'Elemento root não encontrado. Verifique se existe um elemento com id "root" no seu HTML.'
    );
  }

  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

renderApp();
