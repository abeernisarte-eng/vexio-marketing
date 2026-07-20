import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// No StrictMode: theme scripts (GSAP/Lenis) must init exactly once.
createRoot(document.getElementById('root')).render(<App />)
