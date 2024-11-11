import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Global from './styles/global.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global />
    <App />
  </StrictMode>,
)