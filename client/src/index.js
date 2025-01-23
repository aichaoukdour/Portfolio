import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importez vos styles si nécessaire
import App from './App'; // Assurez-vous que le fichier App.js existe dans src
import reportWebVitals from './reportWebVitals'; // Si nécessaire pour mesurer la performance de l'app

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Si vous souhaitez mesurer les performances de l'app :
reportWebVitals();
