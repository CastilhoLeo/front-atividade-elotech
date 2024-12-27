import React from 'react'
import {  LocacaoContextProvider } from '../context/LocacaoContext'

const Locacao = () => {
  return (

    <LocacaoContextProvider>
    <div>
      Locacao
    </div>
    </LocacaoContextProvider>
  )
}

export default Locacao
