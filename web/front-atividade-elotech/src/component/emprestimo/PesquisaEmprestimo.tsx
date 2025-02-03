import { useContext } from 'react'
import style from './PesquisaEmprestimo.module.css'
import { EmprestimoContext } from '../../context/EmprestimoContext'
import { Field, Formik } from 'formik'


const PesquisaEmprestimo = () => {

  const context = useContext(EmprestimoContext)

 if(!context){
  throw new Error("Erro no context")
 }

  const { setPesquisa } = context


  const handleSubmit = async (values:any)=>{

    setPesquisa(values)

  }

  
  return (
    <> 
    <Formik
    initialValues={{
      tipo:"usuario",
      texto:""

    }}

    onSubmit={(values)=>{handleSubmit(values)}}
    >

    {({handleSubmit})=>(

        <form className={style.input_pesquisa} onSubmit={handleSubmit}>
            <Field as="select" name="tipo">
                 <option value="usuario">Usuario</option>
                <option value="titulo">Titulo</option>
            </Field>

        <label>
            <Field type="text" placeholder="Digite a pesquisa..." name="texto"/>
        </label>

        <button type="submit">Pesquisar</button>
        
      </form>
      )}
      </Formik>
    </>
  )
}

export default PesquisaEmprestimo
