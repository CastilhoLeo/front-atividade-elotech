import { useContext, useState } from "react"
import { EmprestimoContext } from "../../context/EmprestimoContext"
import styles from './CadastroEmprestimo.module.css'
import { RequestEmprestimoDTO } from "../../types/RequestEmprestimoDTO"
import { cadastrarEmprestimo } from "../../service/EmprestimoService"


const CadastroEmprestimo = ({cadastro, setCadastro}) => {

  const {atualizaLista, setAtualizaLista} = useContext(EmprestimoContext)

  const requestPadrao = {
    usuarioId:0,
    livroId:0,
    dataEmprestimo:new Date}


  const [requestEmprestimoDTO, setRequestEmprestimoDTO] = useState<RequestEmprestimoDTO>(requestPadrao)


  const handleClick = ()=>{
    setCadastro(!cadastro)
  }

  const handleChange = (campo, valor)=>{
    setRequestEmprestimoDTO((prevRequestEmprestimoDTO)=>({
      ...prevRequestEmprestimoDTO,
      [campo]:valor
    }))

    
  }


  const handleSubmit = (e)=>{
    e.preventDefault()

    cadastrarEmprestimo(requestEmprestimoDTO)

    setAtualizaLista(!atualizaLista)
    
    setRequestEmprestimoDTO(requestPadrao)
    
  }

  return (
    <div className={styles.cadastro_emprestimo} onSubmit={handleSubmit}>
      <form className={styles.emprestimo_form}>

        <h1>Cadastro Empréstimo</h1>

        <label>
          <span>Usuário ID</span>
          <input type="number" onChange={(e)=>handleChange("usuarioId", e.target.value)} />
        </label>
        
        <label>
        <span>Livro ID</span>
        <input type="number" onChange={(e)=>handleChange("livroId", e.target.value)} />
        </label>

        <label> 
        <span>Data Emprestimo</span>
        <input type="date" onChange={(e)=>handleChange("dataEmprestimo", e.target.value)}/>
        </label>

        <div>
          <button className="btn_salvar">Salvar</button>
          <button className="btn_fechar" type="button" onClick={handleClick}>Fechar</button>
        </div>
      </form>
    </div>
  )
}

export default CadastroEmprestimo
