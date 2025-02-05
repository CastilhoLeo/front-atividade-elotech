import { useContext, useEffect } from "react"
import { LivroContext } from "../../context/LivroContext"
import { editarLivro, excluirLivro, pesquisaLivro } from "../../service/LivroService"
import { Livro } from "../../types/Livro"
import styles from './ListaLivros.module.css'

interface Props {
    setNovoLivro:React.Dispatch<React.SetStateAction<boolean>>
}
const ListaLivros = ({setNovoLivro}:Props) => {

    const context = useContext(LivroContext)

    if(!context){
        throw new Error("Erro no contexto")
    }

    const {pesquisa, dados, setDados, atualizaLista, setAtualizaLista, setLivro, setEditar} = context

    useEffect(()=>{

        const fetchLivro = async ()=>{

        const res = await pesquisaLivro(pesquisa)

        setDados(res.data)

    }

    fetchLivro()

    }, [pesquisa, atualizaLista])

    const handleEditar = async (livro:Livro)=>{
        setLivro(livro)
        setNovoLivro(true)
        setEditar(true)
    }

    const handleExcluir = async (id:number)=>{

        if (confirm("deseja realmete excluir?")){
        await excluirLivro(id)
        setAtualizaLista(!atualizaLista)
        }
    }

  return (
        <table className={styles.lista_livro}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>ISBN</th>
                    <th>Data publicação</th>
                    <th>Categoria</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {dados.map((livro:Livro)=>(
                    <tr key={livro.id}>
                        <td>{livro.id}</td>
                        <td>{livro.titulo}</td>
                        <td>{livro.autor}</td>
                        <td>{livro.isbn}</td>
                        <td>{new Date(livro.dataPublicacao).toLocaleDateString('pt-BR')}</td>
                        <td>{livro.categoria}</td>
                        <td>
                            <button onClick={()=>handleEditar(livro)}>Editar</button>
                            <button onClick={()=>handleExcluir(livro.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
  )
}

export default ListaLivros
