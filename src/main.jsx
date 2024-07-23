import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './tailwind.css'

import { DevsProvider } from '../context/devs.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DevsProvider>
    <App />
  </DevsProvider>
)
