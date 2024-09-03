import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.addEventListener('load', function () {
  document.getElementById('min-button')?.addEventListener('click', () => {
    window.electron.ipcRenderer.send('minimize-window')
  });
  
  document.getElementById('med-button')?.addEventListener('click', () => {
    window.electron.ipcRenderer.send('maximize-window')
  });
  
  document.getElementById('close-button')?.addEventListener('click', () => {
    window.electron.ipcRenderer.send('close-window')
  });
})