import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'

function App() {
  

  return (
    <>
      <h2>App.jsx</h2>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App
