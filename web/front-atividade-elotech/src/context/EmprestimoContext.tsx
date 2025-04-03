import { createContext, useState } from "react";
import { EmprestimoContextInicial } from "../types/EmprestimoContextInicial";

const emprestimoContextInicial: EmprestimoContextInicial = {
    dados:[],
    setDados:()=>{},
    atualizaLista:false,
    setAtualizaLista:()=>{},
    pesquisa:{tipo:"cliente", texto:""},
    setPesquisa:()=>{}
}

export const EmprestimoContext = createContext <EmprestimoContextInicial | null>(null);

export const EmprestimoContextProvider = ({children}:{children: React.ReactNode})=>{

const [dados, setDados] = useState(emprestimoContextInicial.dados)
const [atualizaLista, setAtualizaLista] = useState(emprestimoContextInicial.atualizaLista)
const [pesquisa, setPesquisa] = useState(emprestimoContextInicial.pesquisa)

    return(

    <EmprestimoContext.Provider value={{dados, setDados, atualizaLista, setAtualizaLista, pesquisa, setPesquisa}}>
    {children}
    </EmprestimoContext.Provider>

    )
}