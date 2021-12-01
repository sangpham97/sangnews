import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { NewsContextProvider } from './context/NewsContext'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NewsContextProvider>
        <App />
      </NewsContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
