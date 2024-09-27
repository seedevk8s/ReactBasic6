import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header />


      </BrowserRouter>
      <h2>App.jsx</h2>
    </>
  )
}

export default App
