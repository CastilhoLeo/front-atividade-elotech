import { RequestEmprestimoDTO } from "../types/RequestEmprestimoDTO"

const urlBase = `http://localhost:8080/emprestimo`

export const pesquisarEmprestimo = async (tipo, texto)=>{

    const response = await fetch(`${urlBase}?${tipo}=${texto}`)

    return  await response.json()
}

export const cadastrarEmprestimo = async (requestEmprestimoDTO:RequestEmprestimoDTO)=>{

    const response = await fetch(urlBase,({
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(requestEmprestimoDTO)
    }))

    return response

}

export const devolverEmprestimo = async(requestDevolucao)=>{

    const response = await fetch(`${urlBase}/${requestDevolucao.id}`,({
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(requestDevolucao.dataDevolucao)
    }))

    return response
}
