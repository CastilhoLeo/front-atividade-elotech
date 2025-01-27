import { createContext, useState } from "react";
import { UsuarioContextInicial } from "../types/UsuarioContextInicial";



const usuarioContextInicial: UsuarioContextInicial = {

    dados:[],
    setDados:()=>{},
    pesquisa: "",
    setPesquisa:()=>{},
    usuario: {
        id:0,
        nome: "",
        email:"",
        dataCadastro: new Date().toDateString(),
        telefone:""
    },
    setUsuario:()=>{},
    atualizaLista:false,
    setAtualizaLista:()=>{},
    editar:false,
    setEditar:()=>{},
    erro:"",
    setErro:()=>{}

}
export const UsuarioContext = createContext<UsuarioContextInicial | null>(null);

export const UsuarioContextProvider = ({children}:{children:React.ReactNode}) =>{

    
    const [dados, setDados] = useState(usuarioContextInicial.dados)
    const[pesquisa, setPesquisa] = useState(usuarioContextInicial.pesquisa)
    const [usuario, setUsuario] = useState(usuarioContextInicial.usuario)
    const [atualizaLista, setAtualizaLista] = useState(usuarioContextInicial.atualizaLista)
    const[editar, setEditar] = useState(usuarioContextInicial.editar)
    const [erro, setErro] = useState(usuarioContextInicial.erro)

    return(
        <UsuarioContext.Provider value={{ dados, setDados, pesquisa, setPesquisa,
         usuario, setUsuario, atualizaLista, setAtualizaLista, editar, setEditar, erro, setErro}}>
            {children}
        </UsuarioContext.Provider>
    )
}

