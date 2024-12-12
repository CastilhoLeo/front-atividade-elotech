import CadastroUsuario from '../component/CadastroUsuario'
import styles from './Usuario.module.css'
import ListaUsuarios from '../component/ListaUsuarios'
import PesquisaUsuario from '../component/PesquisaUsuario'
import { UsuarioContextProvider } from '../context/UsuarioContext'
import { useState } from 'react'


const Usuario = () => {
  
  const[novoUsuario, setNovoUsuario] = useState(false)

  return (
    <UsuarioContextProvider>
    <div className={styles.usuario}>
      <div className={styles.menu_usuario}>
      <PesquisaUsuario/>
      <button onClick={()=>setNovoUsuario(true)}>Novo Usuario</button>
      {novoUsuario && <CadastroUsuario setNovoUsuario={setNovoUsuario}/>}
      </div>
      <ListaUsuarios/>
    </div>
    </UsuarioContextProvider>
  )
}

export default Usuario
