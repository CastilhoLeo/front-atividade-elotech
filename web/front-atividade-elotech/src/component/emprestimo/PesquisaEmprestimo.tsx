import { useContext, useState } from 'react'
import style from './PesquisaEmprestimo.module.css'
import { EmprestimoContext } from '../../context/EmprestimoContext'

const PesquisaEmprestimo = () => {

  const {pesquisa, setPesquisa, campoPesquisa, setCampoPesquisa} = useContext(EmprestimoContext)

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    
  }
  
  return (
    <> 
        <form className={style.input_pesquisa} onSubmit={handleSubmit}>
            <select name="campoPesquisa" onChange={(e)=>setCampoPesquisa(e.target.value)}>
                 <option value="Usuario">Usuario</option>
                <option value="Livro">Livro</option>
            </select>

        <label>
            <input type="text" placeholder="Digite a pesquisa..." onChange={(e)=>setPesquisa(e.target.value)}/>
        </label>

        <button>Pesquisar</button>
        
      </form>
    </>
  )
}

export default PesquisaEmprestimo
