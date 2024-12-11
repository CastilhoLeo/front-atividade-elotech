import { useState } from "react"

const PesquisaUsuario = ({pesquisa, setPesquisa}) => {

    const [nome, setNome] = useState("")

    

    const handleClick =()=>{
        setPesquisa(nome)
    }
  return (
    <>
      <label>
        <input type="text" name="nome" placeholder="Digite o nome do usuários" onChange={()=>setNome(e.target.value)}/>
        <button onClick={handleClick}>Pesquisar</button>
      </label>
    </>
  )
}

export default PesquisaUsuario
