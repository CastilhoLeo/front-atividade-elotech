import { createContext, ReactNode, useState } from "react";
import { Livro } from "../types/Livro";
import { LivroContextInicial } from "../types/LivroContextInicial";

const livroContextInicial:LivroContextInicial = {
    dados:[],
    setDados:()=>{},
    pesquisa: "",
    setPesquisa:()=>{},
    livro: {
        id:null,
        titulo: "",
        autor:"",
        dataPublicacao: new Date().toLocaleDateString('pt-BR'),
        isbn:"",
        categoria:""
    },
    setLivro:()=>{},
    atualizaLista:false,
    setAtualizaLista:()=>{},
    editar:false,
    setEditar:()=>{},
    erro:"",
    setErro:()=>{}
}

export const LivroContext = createContext<LivroContextInicial | null>(null)


export const LivroContextProvider = ({children}:{children: React.ReactNode})=>{

    const [pesquisa, setPesquisa] = useState(livroContextInicial.pesquisa)
    const [dados, setDados] = useState(livroContextInicial.dados)
    const [editar, setEditar] = useState(livroContextInicial.editar)
    const [atualizaLista, setAtualizaLista] = useState(livroContextInicial.atualizaLista)
    const [livro, setLivro] = useState<Livro>(livroContextInicial.livro)
    const [erro, setErro] = useState(livroContextInicial.erro)
    


return(
    <LivroContext.Provider value={{pesquisa, setPesquisa, dados, setDados, livro, setLivro, editar, setEditar, atualizaLista, setAtualizaLista, erro, setErro}}>
        {children}
    </LivroContext.Provider>
)

}
