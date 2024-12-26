import { createContext, useState } from "react";
import { Livro } from "../types/Livro";

export const LivroContext = createContext()


export const LivroContextProvider = ({children})=>{

    const [pesquisa, setPesquisa] = useState("")
    const [dados, setDados] = useState([])
    const [editar, setEditar] = useState(false)
    const [atualizaLista, setAtualizaLista] = useState(false)
    const [livro, setLivro] = useState<Livro | null>({
        id:0,
        titulo: "",
        autor: "",
        isbn:"",
        dataPublicacao:"",
        categoria:""
})
    


return(
    <LivroContext.Provider value={{pesquisa, setPesquisa, dados, setDados, livro, setLivro, editar, setEditar, atualizaLista, setAtualizaLista}}>
        {children}
    </LivroContext.Provider>
)

}
