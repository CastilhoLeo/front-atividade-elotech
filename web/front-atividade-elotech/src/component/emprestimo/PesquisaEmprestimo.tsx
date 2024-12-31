import { useContext, useState } from 'react'
import style from './PesquisaEmprestimo.module.css'
import { EmprestimoContext } from '../../context/EmprestimoContext'

const PesquisaEmprestimo = () => {

  
  const {dados, setDados, atualizaLista, setAtualizaLista, pesquisa, setPesquisa} = useContext(EmprestimoContext)

  const handleSubmit = (e)=>{
    e.preventDefault()


  }

  const handleChange = (campo, valor)=>{

    setPesquisa((prevPesquisa)=>({
      ...prevPesquisa,
      [campo]:valor
    })) 

  }
  
  return (
    <> 
        <form className={style.input_pesquisa} onSubmit={handleSubmit}>
            <select name="campoPesquisa" onChange={(e)=>handleChange("tipo", e.target.value)}>
                 <option value="usuario">Usuario</option>
                <option value="titulo">Titulo</option>
            </select>

        <label>
            <input type="text" placeholder="Digite a pesquisa..." onChange={(e)=>handleChange("texto", e.target.value)}/>
        </label>

        <button>Pesquisar</button>
        
      </form>
    </>
  )
}

export default PesquisaEmprestimo
