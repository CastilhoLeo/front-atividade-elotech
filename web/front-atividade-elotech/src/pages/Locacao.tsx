import React from 'react'
import {  LocacaoContextProvider } from '../context/LocacaoContext'
import PesquisaLocacao from '../component/locacao/PesquisaLocacao'

const Locacao = () => {
  return (

    <LocacaoContextProvider>
    <div>
      <PesquisaLocacao/>
      <button>Nova locação</button>
    </div>
    </LocacaoContextProvider>
  )
}

export default Locacao
