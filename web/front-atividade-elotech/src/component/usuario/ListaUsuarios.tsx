import React, { useContext, useEffect } from 'react'
import styles from './ListaUsuarios.module.css'
import { UsuarioContext } from '../../context/UsuarioContext'
import { excluirUsuario, pesquisarUsuario } from '../../service/UsuarioService'
import { Usuario } from '../../types/Usuario'

interface Props{
  setNovoUsuario:React.Dispatch<React.SetStateAction<boolean>>
}

const ListaUsuarios = ({setNovoUsuario}:Props) => {

  const context = useContext(UsuarioContext);

  if (!context){
    throw new Error("Erro no context")
  }

  const {dados, setDados, pesquisa , atualizaLista, setAtualizaLista, setUsuario, setEditar} = context

  
  
  useEffect(()=>{

  const fetchUsuario = async ()=>{

    const response = await pesquisarUsuario(pesquisa)

    setDados(response.data);
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
            <td>{new Date(`${usuario.dataCadastro}T12:00:00Z`).toLocaleDateString('pt-BR')}</td>
            <td>{usuario.nome}</td>
            <td>{usuario.email}</td>
            <td>{usuario.telefone}</td>
            <td>
              <button onClick={()=>handleEditar(usuario)}>Editar</button>
              <button onClick={()=>handleExcluir(usuario.id)}>Excluir</button>
            </td>
        </tr>
          ))}

        </tbody>
    </table>
  )
}

export default ListaUsuarios
