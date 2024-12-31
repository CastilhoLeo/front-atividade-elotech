import {  EmprestimoContextProvider } from '../context/EmprestimoContext'
import PesquisaEmprestimo from '../component/emprestimo/PesquisaEmprestimo'
import styles from './Emprestimo.module.css'
import ListaEmprestimo from '../component/emprestimo/ListaEmprestimo'

const Emprestimo = () => {
  return (

    <EmprestimoContextProvider>
    <div className={styles.emprestimo}>
    <div className={styles.menu_emprestimo}>
      <PesquisaEmprestimo/>
      <button>Novo Empréstimo</button>
    </div>
    <ListaEmprestimo/>
    </div>
    </EmprestimoContextProvider>
  )
}

export default Emprestimo
