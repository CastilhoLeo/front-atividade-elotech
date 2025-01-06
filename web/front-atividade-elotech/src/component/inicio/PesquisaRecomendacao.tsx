import React, { useState } from 'react'
import { GeraRecomendacoes } from '../../service/RecomendacaoService'
import styles from './PesquisaRecomendacao.module.css'
const PesquisaRecomendacao = ({recomendacoes, setRecomendacoes}) => {

    const [usuarioId, setUsuarioId] = useState("")

    const handleSubmit =  async (e)=>{
        e.preventDefault()

        const dados = await GeraRecomendacoes(usuarioId)

        setRecomendacoes(dados)
    }

  return (
    <>
        <form onSubmit={handleSubmit} className={styles.input_recomendacao}>
            <label>
                <span>Usuario ID: </span>
                <input type="number" onChange={(e)=>setUsuarioId(e.target.value)} />
            </label>
            <button>Gerar</button>
        </form>
    </>
  )
}

export default PesquisaRecomendacao
