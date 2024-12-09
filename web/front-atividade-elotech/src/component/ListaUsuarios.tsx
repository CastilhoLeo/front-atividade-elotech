import React from 'react'
import styles from './ListaUsuarios.module.css'

const ListaUsuarios = () => {
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
        <tr>
            <td>teste</td>
            <td>teste</td>
            <td>teste</td>
            <td>teste</td>
            <td>teste</td>
            <td>Botoes</td>
        </tr>
        </tbody>
    </table>
  )
}

export default ListaUsuarios
