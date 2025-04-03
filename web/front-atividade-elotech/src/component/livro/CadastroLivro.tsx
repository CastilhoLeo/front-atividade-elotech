import { useContext } from "react"
import { LivroContext } from "../../context/LivroContext"
import { Livro } from "../../types/Livro"
import style from "./CadastroLivro.module.css"
import { cadastroLivro, editarLivro } from "../../service/LivroService"
import { ErrorMessage, Field, Formik, FormikHelpers } from "formik"
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

    const handleSubmit = async (values: Livro, actions:FormikHelpers<Livro>)=>{

      try{

      if(editar){

        const response = await editarLivro(values)

        if(response.status === 200){

          alert("livro editado com sucesso")


        }else{

          alert(response.data.message)

        }

      }else{
      
      const response = await cadastroLivro(values)

      if(response.status === 200){

        alert("livro cadastrado com sucesso")

        actions.resetForm()

      }

      }
    }catch(error:any){

      alert(error.response.data.message)

    }

  }

  const initialValues = editar? livro : livroPadrao

  const validationSchema:Yup.AnySchema = Yup.object({

    titulo: Yup.string().required("O título é obrigatório").min(3, "min 3 caracteres"),
    autor: Yup.string().required("O autor é obrigatório").min(3, "min 3 caracteres"),
    isbn: Yup.string().required("O ISBN é obrigatório").length(13, "O isbn deve ter 13 caracteres"),
    dataPublicacao: Yup.date().required("Data de publicacao é obrigatória"),
    categoria: Yup.string().required("A categoria é obrigatória")

  })

  return (
    <div className={style.cadastro_livro}>

    <Formik 

    initialValues={initialValues}

    onSubmit={(values, actions )=>{handleSubmit(values, actions)}}

    validationSchema={validationSchema}

  
    >
      {({handleSubmit})=>(
        
    <form className={style.livro_form} onSubmit={handleSubmit}>
      <h1>Cadastro livro</h1>
      {editar && 
      <label>
      <span>Id</span>
      <Field type="number" name="id" disabled/>
      </label>}

      <label>
      <span>Título</span>
      <Field type="text" name="titulo" placeholder="Digite o titulo do livro"/>
      <ErrorMessage component="div" name="titulo"/>
      </label>

      <label>
      <span>Autor</span>
      <Field type="text" name="autor" placeholder="Digite o autor do livro"/>
      <ErrorMessage component="div" name="autor" />
      </label>

      <label>
      <span>ISBN</span>
      <Field type="text" name="isbn" placeholder="Digite o ISBN do livro"/>
      <ErrorMessage component="div" name="isbn" />
      </label>

      <label>
      <span>Data de Publicação</span>
      <Field type="date" name="dataPublicacao"/>
      <ErrorMessage component="div" name="dataPublicacao"/>
      </label>

    <label>
      <Field as= "select" name="categoria">
        <option value="">Selecione a categoria</option>
        <option value="AVENTURA">Aventura</option>
        <option value="ROMANCE">Romance</option>
        <option value="FICCAO">Ficção</option>
      </Field>
      <ErrorMessage component="div" name="categoria"/>
      </label>
    
        <div>
        <button type="submit" className="btn_salvar">Salvar</button>
        <button type="button" onClick={handleClick} className="btn_fechar">Fechar</button>
        </div>

    </form>)}
    </Formik>
    </div>
  )
}

export default CadastroLivro
