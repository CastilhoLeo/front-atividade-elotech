import { useContext, useEffect, useState } from "react"
import { EmprestimoContext } from "../../context/EmprestimoContext"
import { devolverEmprestimo, pesquisarEmprestimo } from "../../service/EmprestimoService"
import { Emprestimo } from "../../types/Emprestimo"
import styles from './ListaEmprestimo.module.css'


const ListaEmprestimo = ({cadastro, setCadastro})=>{

    const {dados, setDados, atualizaLista, setAtualizaLista, pesquisa, setPesquisa} = useContext(EmprestimoContext)

    const[devolucao, setDevolucao] = useState(false)
    const[requestDevolucao, setRequestDevolucao] = useState({
        id: 0,
        dataDevolucao: new Date
    })

    useEffect(()=>{

        const fetchEmprestimo = async ()=>{

            const res = await pesquisarEmprestimo(pesquisa.tipo, pesquisa.texto)

            setDados(res.content)
        }

        fetchEmprestimo()
        

    },[atualizaLista])


    const handleDevolucao = (id:number)=>{

        setDevolucao(!devolucao)
        setRequestDevolucao((prevRequestDevolucao)=>({
            ...prevRequestDevolucao,
            id:id
        }))
        
    }

    const handleChange = (dataDevolucao:Date)=>{
        setRequestDevolucao((prevRequestDevolucao)=>({
            ...prevRequestDevolucao,
            dataDevolucao:dataDevolucao
        }))
    }

    const handleSubmit = async (e)=>{

        e.preventDefault()

        await devolverEmprestimo(requestDevolucao)

        setDevolucao(!devolucao)

        setAtualizaLista(!atualizaLista)
    }

    const handleCancelarDevolucao = ()=>{
        setDevolucao(!devolucao)
    }

    return(

        <>
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
                        {emprestimo.status == "EMPRESTADO" && <button onClick={()=>handleDevolucao(emprestimo.id)}>Devolver</button>}
                        </td>
                    </tr>
                ))}

            {devolucao &&         
                <div className={styles.devolucao}>
                    
                    <form onSubmit={handleSubmit} className={styles.devolucao_form}>
                        <h1>Devolução</h1>
                        <label>
                            <span>Emprestimo ID</span>
                            <input type="number" value={requestDevolucao.id} disabled/>
                        </label>
                        <label>
                            <span>Data Devolução</span>
                            <input type="date" onChange={(e)=>handleChange( e.target.value)}/>
                        </label>
                        <div>
                            <button className="btn_salvar">Confirmar</button>
                            <button className="btn_fechar" onClick={handleCancelarDevolucao}>Cancelar</button>
                        </div>
                    </form>
                </div>}
                
            </tbody>
        </table>

        </>
    )
}

export default ListaEmprestimo