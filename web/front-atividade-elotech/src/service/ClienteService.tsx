import axios from "axios"
import { Cliente } from "../types/Cliente"

const urlBase:String = "http://localhost:8080/cliente"

export const pesquisarCliente = async (pesquisa: string)=>{


    const response = await axios.get(`${urlBase}?nome=${pesquisa}`)

    return response
    
}


export const excluirCliente = async (id: number)=>{
   

    const response = await axios.delete(`${urlBase}/${id}`,{method:"DELETE"} )

    return response
} 

export const  editarCliente = async (cliente: Cliente)=>{

 
    const response = await axios.put(`${urlBase}/${cliente.id}`, cliente)

    return response

}

export const cadastrarCliente = async (cliente: Cliente)=>{


     const response = await axios.post(`${urlBase}`, cliente)

    return response

}

