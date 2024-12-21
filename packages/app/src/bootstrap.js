import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

document.body.innerHTML = '<div id="root"></div>';
const rootElement = document.getElementById('root')
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}