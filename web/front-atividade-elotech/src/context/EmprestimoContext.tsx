import { createContext, useState } from "react";

export const EmprestimoContext = createContext();

export const EmprestimoContextProvider = ({children})=>{

    const [pesquisa, setPesquisa] = useState("")
    const [campoPesquisa, setCampoPesquisa] = useState("")

    return(

    <EmprestimoContext.Provider value={{pesquisa, setPesquisa, campoPesquisa, setCampoPesquisa}}>
    {children}
    </EmprestimoContext.Provider>

    )
}