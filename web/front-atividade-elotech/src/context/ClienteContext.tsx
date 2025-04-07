import { createContext, useState } from "react";
import { ClienteContextInicial } from "../types/ClienteContextInicial";



export const clienteContextInicial: ClienteContextInicial = {

    dados:[],
    setDados:()=>{},
    pesquisa: "",
    setPesquisa:()=>{},
    cliente: {
        id:0,
        nome: "",
        email:"",
        dataCadastro: new Date().toDateString(),
        telefone:""
    },
    setCliente:()=>{},
    atualizaLista:false,
    setAtualizaLista:()=>{},
    editar:false,
    setEditar:()=>{},
    erro:"",
    setErro:()=>{}

}
export const ClienteContext = createContext<ClienteContextInicial | null>(null);

export const ClienteContextProvider = ({children}:{children:React.ReactNode}) =>{

    
    const [dados, setDados] = useState(clienteContextInicial.dados)
    const[pesquisa, setPesquisa] = useState(clienteContextInicial.pesquisa)
    const [cliente, setCliente] = useState(clienteContextInicial.cliente)
    const [atualizaLista, setAtualizaLista] = useState(clienteContextInicial.atualizaLista)
    const[editar, setEditar] = useState(clienteContextInicial.editar)
    const [erro, setErro] = useState(clienteContextInicial.erro)

    return(
        <ClienteContext.Provider value={{ dados, setDados, pesquisa, setPesquisa,
         cliente, setCliente, atualizaLista, setAtualizaLista, editar, setEditar, erro, setErro}}>
            {children}
        </ClienteContext.Provider>
    )
}

