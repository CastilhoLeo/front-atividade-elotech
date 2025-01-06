import { useState } from "react"
import ListaRecomendacao from "../component/inicio/ListaRecomendacao"
import PesquisaRecomendacao from "../component/inicio/PesquisaRecomendacao"
import styles from './Inicio.module.css'

const Inicio = () => {
  const [recomendacoes, setRecomendacoes] = useState([])

  return (
    <div className={styles.recomendacao}>
      <h1>Gerar recomendações para o usuário</h1>
      <PesquisaRecomendacao recomendacoes={recomendacoes} setRecomendacoes={setRecomendacoes}/>
      <ListaRecomendacao recomendacoes={recomendacoes} setRecomendacoes={setRecomendacoes}/>
    </div>
  )
}

export default Inicio
