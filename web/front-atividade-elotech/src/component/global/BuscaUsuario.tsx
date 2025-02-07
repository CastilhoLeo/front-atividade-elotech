import { Usuario } from "../../types/Usuario"

interface Props{

    listaUsuarios:Array<Usuario>
}

const BuscaUsuario = ({listaUsuarios}:Props)=>{

    return (

       <>
       {listaUsuarios.slice(0,3).map((usuario)=>(
        <ul>
            <li>{usuario.nome}</li>
        </ul>

       ))}
       </>

    )
}

export default BuscaUsuario