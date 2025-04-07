import { Cliente } from "../../types/Cliente"
import styles from './BuscaCliente.module.css'

interface Props{

    listaClientes:Array<Cliente>,
    setClienteSelecionado:React.Dispatch<React.SetStateAction<Cliente>>
}

const BuscaCliente = ({listaClientes, setClienteSelecionado}:Props)=>{

    return (

       <div className={styles.busca_cliente}>
       
        <ul>
            {listaClientes.slice(0,3).map((cliente)=>(
            <li key={cliente.id} onClick={()=>setClienteSelecionado(cliente)}> {cliente.nome}</li>
            ))}
        </ul>
       
       </div>

    )
}

export default BuscaCliente