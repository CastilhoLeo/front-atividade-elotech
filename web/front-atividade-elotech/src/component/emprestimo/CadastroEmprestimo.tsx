import { useContext } from "react"
import { EmprestimoContext } from "../../context/EmprestimoContext"
import styles from './CadastroEmprestimo.module.css'
import { RequestEmprestimoDTO } from "../../types/RequestEmprestimoDTO"
import { cadastrarEmprestimo } from "../../service/EmprestimoService"
import { ErrorMessage, Field, Formik, FormikHelpers } from "formik"
import * as Yup from 'yup'

interface Props{

  cadastro:boolean,
  setCadastro:React.Dispatch<React.SetStateAction<boolean>>
}

const CadastroEmprestimo = ({cadastro, setCadastro}:Props) => {

  const context = useContext(EmprestimoContext)

  if(!context){
    throw new Error("Erro no contexto")
  }

  const {atualizaLista, setAtualizaLista} = context

  const requestPadrao = {
    clienteId:0,
    livroId:0,
    dataEmprestimo:new Date}


  const handleClick = ()=>{
    setCadastro(!cadastro)
    setAtualizaLista(!atualizaLista)
  }
    


  const handleSubmit = async (values:RequestEmprestimoDTO, actions:FormikHelpers<RequestEmprestimoDTO>)=>{

    try{

    const response = await cadastrarEmprestimo(values)

    if(response.status === 200){

      alert("Empréstimo cadastrado com sucesso!")

    setAtualizaLista(!atualizaLista)

    actions.resetForm()
    }

    } catch(error:any){

      alert(error.response.data.message)

    }
    
  }

  const validationSchema:Yup.AnySchema = Yup.object({

    clienteId : Yup.number().required("O ID do cliente é obrigatório"),
    livroId : Yup.number().required("O ID do livro é obrigatório"),
    dataEmprestimo : Yup.date().required("A data é obrigatória")

  })

  return (
    <div className={styles.cadastro_emprestimo} >
      
      <Formik
      
      initialValues={requestPadrao}

      onSubmit={(values, actions)=>{handleSubmit(values, actions)}}

      validationSchema={validationSchema}
      >

        {({handleSubmit})=>(   
        
      <form className={styles.emprestimo_form} onSubmit={handleSubmit}>

        <h1>Cadastro Empréstimo</h1>

        <label>
          <span>Cliente ID</span>
          <Field type="number" name="clienteId" />
          <ErrorMessage component="div" name="clienteId"/>
        </label>
        
        <label>
        <span>Livro ID</span>
        <Field type="number" name="livroId"/>
        <ErrorMessage component="div" name="livroId"/>
        </label>

        <label> 
        <span>Data Emprestimo</span>
        <Field type="date" name="dataEmprestimo"/>
        <ErrorMessage component="div" name="dataEmprestimo"/>
        </label>

        <div>
          <button className="btn_salvar">Salvar</button>
          <button className="btn_fechar" type="button" onClick={handleClick}>Fechar</button>
        </div>
      </form>
        )}
      </Formik>
    </div>
    )

        }


export default CadastroEmprestimo
