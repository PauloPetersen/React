import { useState } from 'react'
import './App.css'

function App() {
  const [qtdCopo, setQtdCopo] = useState(0) //valor em ml do input
  const [copoAgua, setCopoAgua] = useState(0) // quantidade de copos bebidos
  const [ml, setMl] = useState(0)
  const [meta, setMeta] = useState(0)
  const [mensagem, setMensagem] = useState("")
  
  //Histórico último copo d'água consumido
  const date = new Date().toLocaleString()
  const [historico, setHistorico] = useState(null)

  const calculaAgua = () =>{
    setMl(ml + parseFloat(qtdCopo))
  }

  const addCopo = () => {
    if (qtdCopo > 0 && meta > 0){

    
    setCopoAgua(copoAgua + 1)
    calculaAgua()
    setHistorico(date)
    informaMeta()
    }
    else{
      alert("Insira um valor maior que zero")
    }
  }

  const resetCopo = () => {
    setCopoAgua(0)
    setMl(0)
    setQtdCopo(0)
    setMeta(0)
    setMensagem("")
    setHistorico(null)
  }

  const informaMeta = () =>{
    if ((ml + parseFloat(qtdCopo))>=meta){
      return setMensagem ("Parabéns, sua meta foi alcançada!")
    }
  }

  return (
    <section>
      <h1>INFORME A SUA META DIÁRIA (em ml)</h1>
      <input type="text" value={meta} onChange={(m) => setMeta(m.target.value)}/>
      <h1>CONTADOR DE COPOS DE ÁGUA: {copoAgua}</h1>
      <button onClick={addCopo}> BEBI 1 COPO</button>
      <button onClick={resetCopo}>RESET</button>
      <br /><br /><h2>INSIRA QUANTOS ML TEM O SEU COPO</h2>
      <input type="text" value={qtdCopo} onChange={(e) => setQtdCopo(e.target.value)} />
      <br /><br /><h2>VOCÊ BEBEU {ml} ML DE ÁGUA</h2><br />
      <h1>{mensagem}</h1>
      <h2>HISTÓRICO DE CONSUMO:</h2>
      <h3>{historico}</h3>
    </section>

  )
}

export default App
