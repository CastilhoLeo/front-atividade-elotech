import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioContextProvider = ({children}) =>{

    
    const [dados, setDados] = useState([])
    const[pesquisa, setPesquisa] = useState("")

    return(
        <UsuarioContext.Provider value={{ dados, setDados, pesquisa, setPesquisa}}>
            {children}
        </UsuarioContext.Provider>
    )
}

