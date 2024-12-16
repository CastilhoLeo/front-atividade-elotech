import { createContext, useState } from "react";
import {Usuario} from '../types/Usuario'

export const UsuarioContext = createContext();

export const UsuarioContextProvider = ({children}) =>{

    
    const [dados, setDados] = useState<Usuario>([])
    const[pesquisa, setPesquisa] = useState("")
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const [atualizaLista, setAtualizaLista] = useState(false)
    const[editar, setEditar] = useState(false)

    return(
        <UsuarioContext.Provider value={{ dados, setDados, pesquisa, setPesquisa, usuario, setUsuario, atualizaLista, setAtualizaLista, editar, setEditar}}>
            {children}
        </UsuarioContext.Provider>
    )
}

