import { useContext, useEffect } from "react"
import { EmprestimoContext } from "../../context/EmprestimoContext"
import { pesquisarEmprestimo } from "../../service/EmprestimoService"
import { Emprestimo } from "../../types/Emprestimo"


const ListaEmprestimo = ()=>{

    const {dados, setDados, atualizaLista, setAtualizaLista, pesquisa, setPesquisa} = useContext(EmprestimoContext)

    useEffect(()=>{

        const fetchEmprestimo = async ()=>{

            const res = await pesquisarEmprestimo(pesquisa.tipo, pesquisa.texto)

            setDados(res.content)
        }

        fetchEmprestimo()
        

    },[atualizaLista])

    const handleEditar = ()=>{

    }

    const handleExcluir = ()=>{
        
    }

    const handleDevolucao = ()=>{
        
    }

    return(

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Usuario</th>
                    <th>Titulo</th>
                    <th>Data Empréstimo</th>
                    <th>Data Devolução</th>
                    <th>Situação</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {dados.map((emprestimo:Emprestimo)=>(
                    <tr key={emprestimo.id}>
                        <td>{emprestimo.id}</td>
                        <td>{emprestimo.usuarioDTO.nome}</td>
                        <td>{emprestimo.livroDTO.titulo}</td>
                        <td>{new Date(emprestimo.dataEmprestimo).toLocaleDateString("pt-BR")}</td>
                        <td>{emprestimo.dataDevolucao && new Date(emprestimo.dataDevolucao).toLocaleDateString("pt-BR")}</td>
                        <td>{emprestimo.status}</td>
                        <td>
                        <button onClick={()=>handleDevolucao()}>Devolver</button>
                        <button onClick={()=>handleEditar()}>Editar</button>
                        <button onClick={()=>handleExcluir()}>Excluir</button>
                        </td>
                    </tr>
                ))}
                

            </tbody>
        </table>
    )
}

export default ListaEmprestimo