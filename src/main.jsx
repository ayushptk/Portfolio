import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Maincomp from './App'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Maincomp />
  </StrictMode>,
)
