import { Livro } from "./Livro"
import { Cliente } from "./Cliente"


export type Emprestimo = {
    id: number,
    clienteDTO: Cliente,
    livroDTO: Livro,
    dataEmprestimo: Date,
    dataDevolucao: Date | null,
    status: String
}