
import './App.css'

import { useState } from 'react'

//Variáveis no JS - podem guardar funções
//var - não usar, pode gerar problemas de escopo
//let - variável comum
//const - constante

//Funções
//Função Anônima = não tem nome
// let funcao1 = function() {
//console.log("FUNCAO2")
//}

//Arrow Function
//let funcao2 = () => {
//console.log("FUNCAO2")
//}

//let funcao3 = () => console.log("FUNCAO 3")

function App() {
  const [incrementaNumero, setIncrementaNumero] = useState(0)

  function clique() {
    let incrementa = incrementaNumero + 1
    setIncrementaNumero(incrementa)

    //ERRO NO VALOR - PROBLEMAS NA FILA DE EXECUÇÃO
    // setContador(contador + 1)
    // setContador(contador + 1)
    // setContador(contador + 1)
    
    // Assim funciona =)
    // setContador( prevState => prevState + 1)
    // setContador( prevState => prevState + 1)
    // setContador( prevState => prevState + 1)

  }
  return (
    <>
      <h1>CONTADOR: {incrementaNumero}</h1>
      <button onClick={clique}>CLIQUE AQUI</button>
    </>
  )
}

export default App
