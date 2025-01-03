import { useContext, useState } from "react"
import { EmprestimoContext } from "../../context/EmprestimoContext"
import styles from './CadastroEmprestimo.module.css'
import { RequestEmprestimoDTO } from "../../types/RequestEmprestimoDTO"


const CadastroEmprestimo = ({cadastro, setCadastro}) => {

  const [requestEmprestimoDTO, setRequestEmprestimoDTO] = useState({
    usuarioID:0,
    livroID:0,
    dataEmprestimo:""})


  const handleClick = ()=>{
    setCadastro(!cadastro)
  }

  const handleChange = (campo, valor)=>{
    setRequestEmprestimoDTO((prevRequestEmprestimoDTO)=>({
      ...prevRequestEmprestimoDTO,
      [campo]:valor
    }))

    
  }

  const handleSubmit = ()=>{
    
  }

  return (
    <div className={styles.cadastro_emprestimo} onSubmit={handleSubmit}>
      <form className={styles.emprestimo_form}>

        <h1>Cadastro Empréstimo</h1>

        <label>
          <span>Usuário ID</span>
          <input type="number" onChange={(e)=>handleChange("usuarioID", e.target.value)} />
        </label>
        
        <label>
        <span>Livro ID</span>
        <input type="number" onChange={(e)=>handleChange("livroID", e.target.value)} />
        </label>
        <label> 
        <span>Data Emprestimo</span>
        <input type="date" onChange={(e)=>handleChange("dataEmprestimo", e.target.value)}/>
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
