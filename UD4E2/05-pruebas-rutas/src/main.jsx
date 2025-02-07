import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx';
import SeguridadProvider from './context/SeguridadProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />

    <SeguridadProvider/>

  </StrictMode>,
)
