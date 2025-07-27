import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional: needed for modals, dropdowns, etc.

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
