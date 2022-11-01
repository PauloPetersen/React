import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import { Galeria } from './pages/Galeria'
import Contato from './pages/Contatos'
import FaleConosco from './pages/FaleConosco'
import ContatoDetalhes from './pages/ContatoDetalhes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contatos' element={<Contato />} />
      <Route path='/galeria' element={<Galeria />} />
      <Route path='/faleconosco' element={<FaleConosco />} />
      <Route path='/contatos/:id' element={<ContatoDetalhes/>} />
      <Route path='*' element={<h1>Erro 404 - Página não encontrada</h1>} />
    </Routes>
  )
}

export default App
