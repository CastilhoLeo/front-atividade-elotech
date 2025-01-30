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
    usuarioId:0,
    livroId:0,
    dataEmprestimo:new Date}


  const handleClick = ()=>{
    setCadastro(!cadastro)
  }
    


  const handleSubmit = async (values:RequestEmprestimoDTO, actions:FormikHelpers<RequestEmprestimoDTO>)=>{

    cadastrarEmprestimo(values)

    setAtualizaLista(!atualizaLista)

    actions.resetForm()
    
  }

  const validationSchema:Yup.AnySchema = Yup.object({

    usuarioId : Yup.number().required("O ID do usuário é obrigatório"),
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
          <span>Usuário ID</span>
          <Field type="number" name="usuarioId" />
          <ErrorMessage component="div" name="usuarioId"/>
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
