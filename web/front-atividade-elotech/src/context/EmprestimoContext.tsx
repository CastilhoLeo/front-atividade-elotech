import { createContext, useState } from "react";

export const EmprestimoContext = createContext();

export const EmprestimoContextProvider = ({children})=>{

const [dados, setDados] = useState([])
const [atualizaLista, setAtualizaLista] = useState(false)
const [pesquisa, setPesquisa] = useState({tipo:"usuario", texto:""})

    return(

    <EmprestimoContext.Provider value={{dados, setDados, atualizaLista, setAtualizaLista, pesquisa, setPesquisa}}>
    {children}
    </EmprestimoContext.Provider>

    )
}