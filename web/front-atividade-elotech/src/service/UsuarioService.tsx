import { Usuario } from "../types/Usuario"

export const pesquisarUsuario = async (pesquisa: String)=>{

    const response = await fetch(`http://localhost:8080/usuario?nome=${pesquisa}`)

    const json = await response.json()

    return json
}


export const excluirUsuario = async (id: number)=>{

    await fetch(`http://localhost:8080/usuario/${id}`,{method:"DELETE"} )

} 

export const  editarUsuario = async (usuario: Usuario)=>{

 await fetch(`http://localhost:8080/usuario/${usuario.id}`, 
    {method:"PUT",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(usuario)})

}

export const cadastrarUsuario = async (usuario: Usuario)=>{

    const usuarioFetch = await fetch(`http://localhost:8080/usuario`, 
        {method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(usuario)})
}