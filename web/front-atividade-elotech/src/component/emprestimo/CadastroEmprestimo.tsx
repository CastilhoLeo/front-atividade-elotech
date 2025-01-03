import { useContext } from "react"
import { EmprestimoContext } from "../../context/EmprestimoContext"
import styles from './CadastroEmprestimo.module.css'

const CadastroEmprestimo = ({cadastro, setCadastro}) => {


  const handleClick = ()=>{
    setCadastro(!cadastro)
  }

  const handleSubmit = ()=>{
    
  }

  return (
    <div className={styles.cadastro_emprestimo} onSubmit={handleSubmit}>
      <form className={styles.emprestimo_form}>

        <h1>Cadastro Empréstimo</h1>

        <label>
          <span>Usuário ID</span>
          <input type="number" />
        </label>
        
        <label>
        <span>Livro ID</span>
        <input type="number" />
        </label>
        <label> 
        <span>Data Emprestimo</span>
        <input type="date" />
        </label>
        <div>
          <button>Salvar</button>
          <button type="button" onClick={handleClick}>Fechar</button>
        </div>
      </form>
    </div>
  )
}

export default CadastroEmprestimo
