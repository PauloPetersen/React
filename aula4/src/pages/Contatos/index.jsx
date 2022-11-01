import { Link } from "react-router-dom"

const Contato = () =>{
    return (
        <>
        <h1>CONTATOS</h1>
        <h2><p><Link to = '/'> HOME </Link></p></h2>
        <h2><p><Link to = '/galeria'> GALERIA </Link></p></h2>
        <ol>
            <li><Link to='/contatos/1'>Paulo Batera</Link></li>
            <li><Link to='/contatos/2'>Kluivert Pedregulho</Link></li>
            <li><Link to='/contatos/3'>Zezin Taqui Parola</Link></li>
        </ol>
        </>
    )
}
export default Contato