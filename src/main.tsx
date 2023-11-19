import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MobileDownloadLinks from "./components/MobileDownloadLinks";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <MobileDownloadLinks />
  </React.StrictMode>,
)
