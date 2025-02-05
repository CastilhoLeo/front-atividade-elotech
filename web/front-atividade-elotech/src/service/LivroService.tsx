import axios from "axios";
import { Livro } from "../types/Livro"

const urlBase:String = `http://localhost:8080/livro`

export const pesquisaLivro = async (pesquisa:string)=>{

    const response = await axios.get(`${urlBase}?titulo=${pesquisa}`)

    return response;
}

export const cadastroLivro = async (livro:Livro)=>{

    const response = await axios.post(`${urlBase}`,livro)

    return response;
}

export const editarLivro = async (livro:Livro)=>{

    const response = await axios.put(`${urlBase}/${livro.id}`, livro)

    return response;
}

export const excluirLivro = async (id:number)=>{

    const response = await axios.delete(`${urlBase}/${id}`)

    return response;
}