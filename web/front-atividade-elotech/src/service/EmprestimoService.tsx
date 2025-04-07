import axios from "axios"
import { RequestEmprestimoDTO } from "../types/RequestEmprestimoDTO"

const urlBase = `http://localhost:8080/emprestimo`

export const pesquisarEmprestimo = async (tipo:string, texto:string)=>{

    const response = await axios.get(`${urlBase}?${tipo}=${texto}`)

    return response
}

export const cadastrarEmprestimo = async (requestEmprestimoDTO:RequestEmprestimoDTO)=>{

    const response = await axios.post(urlBase,requestEmprestimoDTO)
    
    return response

}

export const devolverEmprestimo = async(requestDevolucao:{emprestimoId: number, dataDevolucao: Date})=>{

    const response = await axios.put(`${urlBase}/${requestDevolucao.emprestimoId}`,
        JSON.stringify(requestDevolucao.dataDevolucao),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    return response
}
