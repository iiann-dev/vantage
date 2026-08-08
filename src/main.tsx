import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Dev error capture so blank/empty states produce readable stacks.
declare global {
  interface Window { __errs?: string[] }
}
window.__errs = []
window.addEventListener('error', (e) => {
  window.__errs!.push(e.error ? (e.error.stack || e.message) : e.message)
})
window.addEventListener('unhandledrejection', (e) => {
  window.__errs!.push('REJ: ' + String(e.reason))
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)