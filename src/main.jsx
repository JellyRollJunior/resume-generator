import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ResumeGenerator } from './components/ResumeGenerator'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResumeGenerator />
  </StrictMode>,
)
