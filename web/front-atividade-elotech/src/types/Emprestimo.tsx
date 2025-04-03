import { Livro } from "./Livro"
import { Usuario } from "./Usuario"


export type Emprestimo = {
    id: number,
    clienteDTO: Usuario,
    livroDTO: Livro,
    dataEmprestimo: Date,
    dataDevolucao: Date | null,
    status: String
}