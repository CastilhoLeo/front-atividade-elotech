import { Usuario } from "../types/Usuario"

const urlBase:String = "http://localhost:8080/usuario"

export const pesquisarUsuario = async (pesquisa: String)=>{


    const response = await fetch(`${urlBase}?nome=${pesquisa}`)

    const json = await response.json()

    return json
    
    
}


export const excluirUsuario = async (id: number)=>{
   

    const response = await fetch(`${urlBase}/${id}`,{method:"DELETE"} )

    return response
} 

export const  editarUsuario = async (usuario: Usuario)=>{

 
    const response = await fetch(`${urlBase}/${usuario.id}`, 
    {method:"PUT",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(usuario)})

    return response

}

export const cadastrarUsuario = async (usuario: Usuario)=>{


     const response = await fetch(`${urlBase}`, 
        {method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(usuario)})

    return response

}