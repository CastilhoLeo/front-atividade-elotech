import { useContext, useState } from 'react'
import style from './PesquisaEmprestimo.module.css'
import { EmprestimoContext } from '../../context/EmprestimoContext'
import { pesquisarEmprestimo } from '../../service/EmprestimoService'
import { Field, Formik, FormikHelpers } from 'formik'
import { RequestEmprestimoDTO } from '../../types/RequestEmprestimoDTO'


const PesquisaEmprestimo = () => {

  const context = useContext(EmprestimoContext)

 if(!context){
  throw new Error("Erro no context")
 }

  const {setDados, atualizaLista, setAtualizaLista} = context


  const handleSubmit = async (values:any)=>{

    const res = await pesquisarEmprestimo(values.tipo, values.texto)

    setDados(res.content)

    setAtualizaLista(!atualizaLista)

  }


  
  return (
    <> 
    <Formik
    initialValues={{
      campoPesquisa:"usuario",
      texto:""

    }}

    onSubmit={(values)=>{handleSubmit(values)}}
    >

    {({handleSubmit})=>(

        <form className={style.input_pesquisa} onSubmit={handleSubmit}>
            <Field as="select" name="campoPesquisa">
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
