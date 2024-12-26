import { useContext, useEffect } from "react"
import { LivroContext } from "../../context/LivroContext"
import { editarLivro, excluirLivro, pesquisaLivro } from "../../service/LivroService"
import { Livro } from "../../types/Livro"
import styles from './ListaLivros.module.css'

const ListaLivros = ({setNovoLivro}) => {

    const {pesquisa, dados, setDados, atualizaLista, setAtualizaLista, livro, setLivro, setEditar} = useContext(LivroContext)

    useEffect(()=>{

        const fetchLivro = async ()=>{

        const res = await pesquisaLivro(pesquisa)

        setDados(res)

    }

    fetchLivro()

    }, [pesquisa, atualizaLista])

    const handleEditar = async (livro:Livro)=>{
        setLivro(livro)
        setNovoLivro(true)
        setEditar(true)
    }

    const handleExcluir = async (id:number)=>{
        await excluirLivro(id)
        atualizaLista ? setAtualizaLista(false) : setAtualizaLista(true)
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
