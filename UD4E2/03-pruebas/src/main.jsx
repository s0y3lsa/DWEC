import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Papa from './components/Papa.jsx';
import Hijo from './components/Hijo.jsx';
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Papa>
      <p>Paco lleva los niños al cole </p>
    <p>Como no lo hagas te enteras</p>
    <p>Y pon la lavadora</p>
    </Papa>

  </StrictMode>,
)
