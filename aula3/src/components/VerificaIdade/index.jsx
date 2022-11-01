import "./styles.css";
import { useState } from "react";

const VerificaIdade = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [mensagem, setMensagem] = useState("")

  const handleVerificaIdade = () => {
      console.log("Nome: ", nome)
      console.log("Idade: ", idade)
  }

  const calculaIdade = () => {
    if (idade>=18) {
        setMensagem (`Olá ${nome}, você é maior de idade`)
        console.log ("Maior de idade")
    } else {
        setMensagem (`Olá ${nome}, você é menor de idade`)
        console.log ("Menor de idade")
    }
  }

  return (
    <>
      <h1>Informe seu nome e a sua idade</h1>

      <h2>Digite seu nome</h2>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <h2>Digite sua idade</h2>
      <input
        type="text"
        placeholder="Digite sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />

      <div style={{ marginTop: 20 }}>
        <input type="button" value="VERIFICA IDADE" onClick={calculaIdade} />
      </div>
      <h2>{mensagem}</h2>
    </>
  );
};

export default VerificaIdade;