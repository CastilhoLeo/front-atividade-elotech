import React, { useState } from 'react'
import CadastroUsuario from '../component/CadastroUsuario'
import styles from './Usuario.module.css'
import ListaUsuarios from '../component/ListaUsuarios'


const Usuario = () => {
  
  const[novoUsuario, setNovoUsuario] = useState(false)

  return (
    <div className={styles.usuario}>
      <button onClick={()=>setNovoUsuario(true)}>Novo Usuario</button>
      {novoUsuario && <CadastroUsuario setNovoUsuario={setNovoUsuario}/>}
      <ListaUsuarios/>
    </div>
  )
}

export default Usuario
