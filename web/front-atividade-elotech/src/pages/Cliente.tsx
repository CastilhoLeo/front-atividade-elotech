import CadastroCliente from '../component/cliente/CadastroCliente'
import styles from './Cliente.module.css'
import ListaClientes from '../component/cliente/ListaClientes'
import PesquisaCliente from '../component/cliente/PesquisaCliente'
import {  ClienteContextProvider } from '../context/ClienteContext'
import { useState } from 'react'


const Cliente = () => {
  
  const[novoCliente, setNovoCliente] = useState<boolean>(false)


  return (
    <ClienteContextProvider>
    <div className={styles.cliente}>
      <div className={styles.menu_cliente}>
      <PesquisaCliente/>
      <button onClick={()=>setNovoCliente(true)}>Novo Cliente</button>
      {novoCliente && <CadastroCliente setNovoCliente={setNovoCliente}/>}
      </div>
      <ListaClientes setNovoCliente={setNovoCliente}/>
    </div>
    </ClienteContextProvider>
  )
}

export default Cliente
