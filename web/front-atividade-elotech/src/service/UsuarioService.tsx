import axios from "axios"
import { Usuario } from "../types/Usuario"

const urlBase:String = "http://localhost:8080/usuario"

export const pesquisarUsuario = async (pesquisa: string)=>{


    const response = await axios.get(`${urlBase}?nome=${pesquisa}`)

    return response
    
}


export const excluirUsuario = async (id: number)=>{
   

    const response = await axios.delete(`${urlBase}/${id}`,{method:"DELETE"} )

    return response
} 

export const  editarUsuario = async (usuario: Usuario)=>{

 
    const response = await axios.put(`${urlBase}/${usuario.id}`, usuario)

    return response

}

export const cadastrarUsuario = async (usuario: Usuario)=>{


     const response = await axios.post(`${urlBase}`, usuario)

    return response

}