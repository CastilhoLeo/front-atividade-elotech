import { useContext } from "react"
import { LivroContext } from "../../context/LivroContext"
import { Livro } from "../../types/Livro"
import style from "./CadastroLivro.module.css"
import { cadastroLivro, editarLivro } from "../../service/LivroService"
import { Field, Formik } from "formik"
import * as Yup from 'yup'

interface Props{
  setNovoLivro:React.Dispatch<React.SetStateAction<boolean>>
}

const CadastroLivro = ({setNovoLivro}:Props) => {


  const context = useContext(LivroContext)

  if (!context){
    throw new Error("Erro no contexto")
  }

    const {livro, setLivro, editar, setEditar, atualizaLista, setAtualizaLista} = context

    const livroPadrao: Livro = {
            id:0,
            titulo: "",
            autor: "",
            isbn:"",
            dataPublicacao: new Date().toLocaleDateString('pt-BR'),
            categoria:""
    }

    const handleClick = ()=>{
      setNovoLivro(false)
      setLivro(livroPadrao);
      setEditar(false);
      setAtualizaLista(!atualizaLista)
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

  const initialValues = editar? livro : livroPadrao

  const validationSchema:Yup.AnySchema = Yup.object({

  })

  return (
    <div className={style.cadastro_livro}>

    <Formik 

    initialValues={initialValues}

    onSubmit={handleSubmit}

    validationSchema={validationSchema}
    >
      {({handleSubmit, values})=>(
        
    <form className={style.livro_form} onSubmit={handleSubmit}>
      <h1>Cadastro livro</h1>
      {editar && 
      <label>
      <span>Id</span>
      <Field type="number" value={values.id} disabled/>
      </label>}

      <label>
      <span>Título</span>
      <Field type="text" value={values.titulo}/>
      </label>

      <label>
      <span>Autor</span>
      <Field type="text" value={values.autor}/>
      </label>

      <label>
      <span>ISBN</span>
      <Field type="text" value={values.isbn}/>
      </label>

      <label>
      <span>Data de Publicação</span>
      <Field type="date" value={values.dataPublicacao}/>
      </label>

      <label>
      <span>Categoria</span>
      <Field type="text" value={values.categoria}/>
      </label>
    
        <div>
        <button className="btn_salvar">Salvar</button>
        <button type="button" onClick={handleClick} className="btn_fechar">Fechar</button>
        </div>

    </form>)}
    </Formik>
    </div>
  )
}

export default CadastroLivro
