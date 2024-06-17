import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './components/templates/App/index.tsx'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)