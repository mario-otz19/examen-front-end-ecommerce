import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import ThemeState from './context/theme/ThemeState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeState>
      <App />
    </ThemeState>
  </React.StrictMode>
);