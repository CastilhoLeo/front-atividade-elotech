import { useState } from "react"
import PesquisaLivro from "../component/livro/PesquisaLivro"
import { LivroContextProvider } from "../context/LivroContext"
import style from './Livro.module.css'
import ListaLivros from "../component/livro/ListaLivros"
import CadastroLivro from "../component/livro/CadastroLivro"


const Livro = () => {

  const [novoLivro, setNovoLivro] = useState(false)

  return (
    <LivroContextProvider>
    <div className={style.livro}>
      <div className={style.menu_livro}>
      <PesquisaLivro/>
      <button onClick={()=>setNovoLivro(true)}>Novo Livro</button>
      {novoLivro && <CadastroLivro setNovoLivro={setNovoLivro}/>}
      </div>
      <ListaLivros setNovoLivro={setNovoLivro}/>
    </div>
    </LivroContextProvider>
  )
}

export default Livro
