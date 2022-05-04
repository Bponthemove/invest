import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { InvestContextProvider } from './context/investContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <InvestContextProvider>
      <App />
    </InvestContextProvider>
  </React.StrictMode>
);

