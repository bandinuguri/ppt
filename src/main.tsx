import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // 이 줄이 반드시 있어야 Tailwind가 작동합니다!

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
