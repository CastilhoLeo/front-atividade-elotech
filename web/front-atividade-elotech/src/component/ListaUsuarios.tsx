import React, { useContext, useEffect, useState } from 'react'
import styles from './ListaUsuarios.module.css'
import { UsuarioContext, UsuarioContextProvider } from '../context/UsuarioContext'
import { excluirUsuario, pesquisarUsuario } from '../service/UsuarioService'

const ListaUsuarios = ({setNovoUsuario}) => {


  const {dados, setDados, pesquisa, setPesquisa , atualizaLista, setAtualizaLista, usuario, setUsuario, editar, setEditar} = useContext(UsuarioContext)

  
  useEffect(()=>{

  const fetchUsuario = async ()=>{

    const json = await pesquisarUsuario(pesquisa)

    setDados(json);
  }

  fetchUsuario()
  

},[pesquisa, atualizaLista])

const handleExcluir =  async (id: number)=>{

  if (confirm("deseja realmete excluir?")){
    
    await excluirUsuario(id)


   if(atualizaLista){
    setAtualizaLista(false)
    } else{
    setAtualizaLista(true)
    }
  }

}

const handleEditar= (usuario)=>{
  setEditar(true)
  setNovoUsuario(true)
  setUsuario(usuario)
}


  return (
    <table className={styles.lista_usuario}>
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
          {dados.map((u)=>(
            <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.dataCadastro}</td>
            <td>{u.nome}</td>
            <td>{u.email}</td>
            <td>{u.telefone}</td>
            <td>
              <button id={u.id} onClick={()=>handleEditar(u)}>Editar</button>
              <button id={u.id} onClick={()=>handleExcluir(u.id)}>Excluir</button>
            </td>
        </tr>
          ))}

        </tbody>
    </table>
  )
}

export default ListaUsuarios
