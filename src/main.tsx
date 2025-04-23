import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BooklyApp } from './BooklyApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BooklyApp />
  </StrictMode>
)
