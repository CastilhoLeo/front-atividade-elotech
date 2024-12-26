import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import styles from "./PesquisaUsuario.module.css"

const PesquisaUsuario = () => {

    const [nome, setNome] = useState("")
    const {pesquisa, setPesquisa} = useContext(UsuarioContext)

    

    const handleSubmit =(e)=>{
      e.preventDefault()
        setPesquisa(nome)
    }
    
  return (
    <>
    <form className={styles.input_pesquisa} onSubmit={handleSubmit}>
      <label>
        <input type="text" name="nome" placeholder="Digite o nome do usuário" onChange={(e)=>setNome(e.target.value)}/>
      </label>
      <button type="submit">Pesquisar</button>
      </form>
    </>
  )
}

export default PesquisaUsuario
