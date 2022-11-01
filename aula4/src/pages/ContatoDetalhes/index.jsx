import { useParams } from "react-router-dom"

const ContatoDetalhes = () =>{

    const { id } = useParams();

    const renderizaNome = () =>{
        switch(id){
            case '1':
                return <h2>Paulo Batera</h2>
            case '2':
                return <h2>Kluivert Pedregulho</h2>
            case '3':
                return <h2>Zezin Taqui Parola</h2>
            default:
                return <h2>Sujeito não identificado</h2>
        }
    }
    
    return <h1>Seja bem-vindo {renderizaNome()}</h1>
}

export default ContatoDetalhes