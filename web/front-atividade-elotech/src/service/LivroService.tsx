import axios from "axios";
import { Livro } from "../types/Livro"

const urlBase:String = `http://localhost:8080/livro`

export const pesquisaLivro = async (pesquisa)=>{

    const response = await fetch (`${urlBase}?titulo=${pesquisa}`)

    const json = await response.json();

    return json;
}

export const cadastroLivro = async (livro:Livro)=>{

    const response = await axios.post(`${urlBase}`,livro)

    return response;
}

export const editarLivro = async (livro:Livro)=>{

    const response = await fetch(`${urlBase}/${livro.id}`,
         {method:"PUT",
         headers:{"Content-Type":"application/json"},
         body: JSON.stringify(livro)})

    return response;
}

export const excluirLivro = async (id:number)=>{

    const response = await fetch(`${urlBase}/${id}`,
         {method:"DELETE"})

    return response;
}