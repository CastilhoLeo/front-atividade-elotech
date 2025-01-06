const urlBase = `http://localhost:8080/recomendacao`

export const GeraRecomendacoes = async (usuarioId)=>{

    const response = await fetch(`${urlBase}/${usuarioId}`)

    const json = await response.json()

    return json

}