import { Emprestimo } from "./Emprestimo"

export type RequestEmprestimoDTO = {
    clienteId: number,
    livroId:number,
    dataEmprestimo:Date
}