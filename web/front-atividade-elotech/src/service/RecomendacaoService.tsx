import axios from "axios"

const urlBase = `http://localhost:8080/recomendacao`

export const GeraRecomendacoes = async (clienteId:number)=>{

    const response = await axios.get(`${urlBase}/${clienteId}`)

    return response

}