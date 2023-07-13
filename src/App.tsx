import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <Header/>
      <h1 className="text-3xl underline">
      Hello world!
    </h1>
    <Footer/>
    </>
  )
}

export default App
