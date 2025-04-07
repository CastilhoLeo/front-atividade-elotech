import React, { useContext, useEffect } from 'react'
import styles from './ListaClientes.module.css'
import { ClienteContext } from '../../context/ClienteContext'
import { excluirCliente, pesquisarCliente } from '../../service/ClienteService'
import { Cliente } from '../../types/Cliente'

interface Props{
  setNovoCliente:React.Dispatch<React.SetStateAction<boolean>>
}

const ListaClientes = ({setNovoCliente}:Props) => {

  const context = useContext(ClienteContext);

  if (!context){
    throw new Error("Erro no context")
  }

  const {dados, setDados, pesquisa , atualizaLista, setAtualizaLista, setCliente, setEditar} = context

  
  
  useEffect(()=>{

  const fetchCliente = async ()=>{

    const response = await pesquisarCliente(pesquisa)

    setDados(response.data);
  }

  fetchCliente()
  

},[pesquisa, atualizaLista])

const handleExcluir =  async (id: number)=>{

  if (confirm("deseja realmete excluir?")){
    
    await excluirCliente(id)

   
    setAtualizaLista(!atualizaLista)

  }

}

const handleEditar= (cliente: Cliente)=>{
  setEditar(true)
  setNovoCliente(true)
  setCliente(cliente)
}


  return (
    <table className={styles.lista_cliente}>
        <thead>
        <tr>
            <th> Id </th>
            <th> Data de cadastro</th>
            <th> Nome</th>
            <th> E-mail</th>
            <th> Telefone</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
          {dados.map((cliente:Cliente)=>(
            <tr key={cliente.id}>
            <td>{cliente.id}</td>
            <td>{new Date(`${cliente.dataCadastro}T12:00:00Z`).toLocaleDateString('pt-BR')}</td>
            <td>{cliente.nome}</td>
            <td>{cliente.email}</td>
            <td>{cliente.telefone}</td>
            <td>
              <button onClick={()=>handleEditar(cliente)}>Editar</button>
              <button onClick={()=>handleExcluir(cliente.id)}>Excluir</button>
            </td>
        </tr>
          ))}

        </tbody>
    </table>
  )
}

export default ListaClientes
