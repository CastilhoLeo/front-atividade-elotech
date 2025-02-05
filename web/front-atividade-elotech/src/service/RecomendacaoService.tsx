import axios from "axios"

const urlBase = `http://localhost:8080/recomendacao`

export const GeraRecomendacoes = async (usuarioId:number)=>{

    const response = await axios.get(`${urlBase}/${usuarioId}`)

    return response

}