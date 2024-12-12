import React, { useContext, useEffect, useState } from 'react'
import styles from './ListaUsuarios.module.css'
import { UsuarioContext, UsuarioContextProvider } from '../context/UsuarioContext'

const ListaUsuarios = () => {


  const {dados, setDados, pesquisa, setPesquisa} = useContext(UsuarioContext)

  
  useEffect(()=>{

  const fetchUsuario = async ()=>{

    const response = await fetch(`http://localhost:8080/usuario?nome=${pesquisa}`)

    const json = await response.json()

    setDados(json)
  }

  fetchUsuario();
  

},[pesquisa])

console.log (dados)

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
              <button id={u.id}>Editar</button>
              <button id={u.id}>Excluir</button>
            </td>
        </tr>
          ))}

        </tbody>
    </table>
  )
}

export default ListaUsuarios
