import { useContext, useEffect, useState } from "react"
import { EmprestimoContext } from "../../context/EmprestimoContext"
import { devolverEmprestimo, pesquisarEmprestimo } from "../../service/EmprestimoService"
import { Emprestimo } from "../../types/Emprestimo"
import styles from './ListaEmprestimo.module.css'
import { Field, Formik } from "formik"



const ListaEmprestimo = ()=>{

    const context = useContext(EmprestimoContext)

    if(!context){
        throw new Error("Erro no contexto")
    }

    const {dados, setDados, atualizaLista, setAtualizaLista, pesquisa} = context

    const[devolucao, setDevolucao] = useState(false)
    const[requestDevolucao, setRequestDevolucao] = useState(0)

    useEffect(()=>{

        const fetchEmprestimo = async ()=>{

            const res = await pesquisarEmprestimo(pesquisa.tipo, pesquisa.texto)

            setDados(res.data.content)
        }

        fetchEmprestimo()
        

    },[pesquisa, atualizaLista])


    const handleDevolucao = (id:number)=>{

        setDevolucao(!devolucao)
        setRequestDevolucao(id)
        
    }



    const handleSubmit = async (devolucao:{emprestimoId:number, dataDevolucao: Date})=>{

        console.log(devolucao)

        await devolverEmprestimo(devolucao)

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
                    <th>Cliente</th>
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
                        <td>{emprestimo.clienteDTO.nome}</td>
                        <td>{emprestimo.livroDTO.titulo}</td>
                        <td>{new Date(`${emprestimo.dataEmprestimo}T12:00:00Z`).toLocaleDateString("pt-BR")}</td>
                        <td>{emprestimo.dataDevolucao && new Date(`${emprestimo.dataDevolucao}T12:00:00Z`).toLocaleDateString("pt-BR")}</td>
                        <td>{emprestimo.status}</td>
                        <td>
                        {emprestimo.status == "EMPRESTADO" && <button onClick={()=>handleDevolucao(emprestimo.id)}>Devolver</button>}
                        </td>
                    </tr>
                ))}

            {devolucao &&         
                <div className={styles.devolucao}>

                <Formik 
                
                initialValues={{
                    emprestimoId: requestDevolucao,
                    dataDevolucao: new Date()
                }}
                
                onSubmit={(values)=>{
                    const devolucao ={
                        emprestimoId: requestDevolucao,
                        dataDevolucao: values.dataDevolucao
                    }

                    handleSubmit(devolucao)
                }}


                >{({handleSubmit})=>(
                    
                    <form onSubmit={handleSubmit} className={styles.devolucao_form}>
                        <h1>Devolução</h1>
                        <label>
                            <span>Emprestimo ID</span>
                            <Field type="number" name="emprestimoId" value={requestDevolucao} disabled/>
                        </label>
                        <label>
                            <span>Data Devolução</span>
                            <Field type="date" name="dataDevolucao"/>
                        </label>
                        <div>
                            <button className="btn_salvar">Confirmar</button>
                            <button className="btn_fechar" onClick={handleCancelarDevolucao}>Cancelar</button>
                        </div>
                    </form>)}
                </Formik>
                </div>}
                
            </tbody>
        </table>

        </>
    )
}

export default ListaEmprestimo