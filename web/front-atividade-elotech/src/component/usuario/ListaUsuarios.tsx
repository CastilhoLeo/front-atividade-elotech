import React, { useContext, useEffect, useState } from 'react'
import styles from './ListaUsuarios.module.css'
import { UsuarioContext } from '../../context/UsuarioContext'
import { excluirUsuario, pesquisarUsuario } from '../../service/UsuarioService'
import { Usuario } from '../../types/Usuario'

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

   
    setAtualizaLista(!atualizaLista)

  }

}

const handleEditar= (usuario: Usuario)=>{
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
          {dados.map((usuario:Usuario)=>(
            <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{new Date(usuario.dataCadastro).toLocaleDateString('pt-BR')}</td>
            <td>{usuario.nome}</td>
            <td>{usuario.email}</td>
            <td>{usuario.telefone}</td>
            <td>
              <button id={usuario.id} onClick={()=>handleEditar(usuario)}>Editar</button>
              <button id={usuario.id} onClick={()=>handleExcluir(usuario.id)}>Excluir</button>
            </td>
        </tr>
          ))}

        </tbody>
    </table>
  )
}

export default ListaUsuarios
