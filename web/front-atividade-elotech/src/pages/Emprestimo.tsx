import {  EmprestimoContextProvider } from '../context/EmprestimoContext'
import PesquisaEmprestimo from '../component/emprestimo/PesquisaEmprestimo'
import styles from './Emprestimo.module.css'
import ListaEmprestimo from '../component/emprestimo/ListaEmprestimo'
import CadastroEmprestimo from '../component/emprestimo/CadastroEmprestimo'
import { useState } from 'react'

const Emprestimo = () => {

  const [cadastro, setCadastro] = useState(false)

  return (

    <EmprestimoContextProvider>
    <div className={styles.emprestimo}>
    <div className={styles.menu_emprestimo}>
      <PesquisaEmprestimo/>
      <button onClick={()=>setCadastro(!cadastro)}>Novo Empréstimo</button>
      {cadastro && <CadastroEmprestimo setCadastro={setCadastro} cadastro={cadastro}/>}
    </div>
    <ListaEmprestimo setCadastro={setCadastro} cadastro={cadastro}/>
    </div>
    </EmprestimoContextProvider>
  )
}

export default Emprestimo
