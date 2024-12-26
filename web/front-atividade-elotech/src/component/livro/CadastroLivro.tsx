import { useContext } from "react"
import { LivroContext } from "../../context/LivroContext"
import { Livro } from "../../types/Livro"
import style from "./CadastroLivro.module.css"
import { cadastroLivro, editarLivro } from "../../service/LivroService"


const CadastroLivro = ({setNovoLivro}) => {

    const {livro, setLivro, editar, setEditar, atualizaLista, setAtualizaLista} = useContext(LivroContext)

    const livroPadrao: Livro = {
            id:0,
            titulo: "",
            autor: "",
            isbn:"",
            dataPublicacao: "",
            categoria:""
    }

    const handleChange = (campo:any, valor:any)=>{

        setLivro((prevLivro:Livro)=>({
            ...prevLivro,
            [campo]:valor
        }))

    }

    const handleClick = ()=>{
      setNovoLivro(false)
      setLivro(livroPadrao);
      setEditar(false);
      atualizaLista ? setAtualizaLista(false) : setAtualizaLista(true)
    }

    const handleSubmit = async (e)=>{
      e.preventDefault()

      try{

      if(editar){

        const response = await editarLivro(livro)

        const json = await response.json();

        if(response.ok){
          alert("Livro editado com sucesso!")
        }else{
          alert(json.message)
        }

      }else{
      
      const response = await cadastroLivro(livro)

      const json = await response.json();

      if(response.ok){
        alert("Livro cadastrado com sucesso")
        setLivro(livroPadrao);
      }else{
        alert(json.message)
      }

      }
    }catch(error:any){

      alert(error.message)

    }

  }


  return (
    <div className={style.cadastro_livro}>
    <form className={style.livro_form} onSubmit={handleSubmit}>
      <h1>Cadastro livro</h1>
      {editar && <label>
      <span>Id</span>
      <input type="number" value={livro.id} disabled/>
      </label>}

      <label>
      <span>Título</span>
      <input type="text" value={livro.titulo} onChange={(e)=>handleChange("titulo", e.target.value)}/>
      </label>

      <label>
      <span>Autor</span>
      <input type="text" value={livro.autor} onChange={(e)=>handleChange("autor", e.target.value)}/>
      </label>

      <label>
      <span>ISBN</span>
      <input type="text" value={livro.isbn} onChange={(e)=>handleChange("isbn", e.target.value)}/>
      </label>

      <label>
      <span>Data de Publicação</span>
      <input type="date" value={livro.dataPublicacao} onChange={(e)=>handleChange("dataPublicacao", e.target.value)}/>
      </label>

      <label>
      <span>Categoria</span>
      <input type="text" value={livro.categoria} onChange={(e)=>handleChange("categoria", e.target.value)}/>
      </label>
    
        <div>
        <button>Salvar</button>
        <button type="button" onClick={handleClick}>Fechar</button>
        </div>

    </form>
    </div>
  )
}

export default CadastroLivro
