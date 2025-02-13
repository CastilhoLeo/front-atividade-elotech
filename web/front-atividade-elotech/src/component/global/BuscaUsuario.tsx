import { Usuario } from "../../types/Usuario"
import styles from './BuscaUsuario.module.css'

interface Props{

    listaUsuarios:Array<Usuario>,
    setUsuarioSelecionado:React.Dispatch<React.SetStateAction<Usuario>>
}

const BuscaUsuario = ({listaUsuarios, setUsuarioSelecionado}:Props)=>{

    return (

       <div className={styles.busca_usuario}>
       
        <ul>
            {listaUsuarios.slice(0,3).map((usuario)=>(
            <li key={usuario.id} onClick={()=>setUsuarioSelecionado(usuario)}> {usuario.nome}</li>
            ))}
        </ul>
       
       </div>

    )
}

export default BuscaUsuario