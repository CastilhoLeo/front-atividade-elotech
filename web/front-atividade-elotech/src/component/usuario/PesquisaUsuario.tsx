import { ReactEventHandler, useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import styles from "./PesquisaUsuario.module.css"

const PesquisaUsuario = () => {

  const context = useContext(UsuarioContext)
  if(!context){
    throw new Error ("Erro no contexto")
  }

    const [nome, setNome] = useState<string>("")
    const {setPesquisa} = context

    

    const handleSubmit =(e:React.FormEvent)=>{
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
