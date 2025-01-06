import { Emprestimo } from "./Emprestimo"

export type RequestEmprestimoDTO = {
    usuarioId: number,
    livroId:number,
    dataEmprestimo:Date
}