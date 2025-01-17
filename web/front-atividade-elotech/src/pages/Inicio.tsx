import { useState } from "react"
import ListaRecomendacao from "../component/inicio/ListaRecomendacao"
import PesquisaRecomendacao from "../component/inicio/PesquisaRecomendacao"
import styles from './Inicio.module.css'
import { Livro } from "../types/Livro"

const Inicio = () => {
  const [recomendacoes, setRecomendacoes] = useState<Array<Livro>>([])

  return (
    <div className={styles.recomendacao}>
      <h1>Gerar recomendações para o usuário</h1>
      <PesquisaRecomendacao recomendacoes={recomendacoes} setRecomendacoes={setRecomendacoes}/>
      <ListaRecomendacao recomendacoes={recomendacoes} setRecomendacoes={setRecomendacoes}/>
    </div>
  )
}

export default Inicio
