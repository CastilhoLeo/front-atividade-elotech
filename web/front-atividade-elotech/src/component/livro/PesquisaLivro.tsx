import { useContext, useState } from 'react'
import { LivroContext } from '../../context/LivroContext'
import style from './PesquisaLivro.module.css'

const PesquisaLivro = () => {

  const [titulo, setTitulo] = useState("")
  const {pesquisa, setPesquisa, dados, setDados} = useContext(LivroContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setPesquisa(titulo)
    }

  return (
    <>
    <form className={style.input_pesquisa} onSubmit={handleSubmit}>
      <label>
        <input type="text" name="titulo" placeholder="Digite o título do livro" onChange={(e)=>setTitulo(e.target.value)}/>
      </label>
      <button type='submit'>Pesquisar</button>
    </form>
    </>
  )
}

export default PesquisaLivro
