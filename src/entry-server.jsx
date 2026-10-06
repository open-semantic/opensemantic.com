import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { faq } from './content/faq'

export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

export { faq }
