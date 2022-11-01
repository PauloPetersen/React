import { useState } from 'react'
import './App.css'
import Bio from './components/Bio'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header/>
    <Bio frase= "Eu estou batera"/> 
    <Footer/>
    </>
  )
}

export default App
