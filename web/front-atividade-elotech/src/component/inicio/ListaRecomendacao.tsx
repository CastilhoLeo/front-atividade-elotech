import { Livro } from "../../types/Livro"

interface Props {
    recomendacoes:Array<Livro>,
}

const ListaRecomendacao = ({recomendacoes}:Props) => {

   
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>ISBN</th>
                    <th>Data Publicação</th>
                    <th>Categoria</th>
                </tr>
            </thead>
            <tbody>
                {recomendacoes.map((livro)=>(
                    <tr>
                        <td>{livro.id}</td>
                        <td>{livro.titulo}</td>
                        <td>{livro.autor}</td>
                        <td>{livro.isbn}</td>
                        <td>{livro.dataPublicacao}</td>
                        <td>{livro.categoria}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListaRecomendacao
