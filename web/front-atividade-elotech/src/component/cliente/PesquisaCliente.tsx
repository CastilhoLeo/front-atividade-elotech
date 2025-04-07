import {  useContext } from "react"
import { ClienteContext } from "../../context/ClienteContext"
import styles from "./PesquisaCliente.module.css"
import { Field, Formik } from "formik"

const PesquisaCliente = () => {

  const context = useContext(ClienteContext)
  if(!context){
    throw new Error ("Erro no contexto")
  }

    const {setPesquisa} = context


    const handleSubmit =(nome:string)=>{
        setPesquisa(nome)
    }
    
  return (
    <>
    <Formik
    
    initialValues={{nome:""}}

    onSubmit={(values)=>{handleSubmit(values.nome)}}
    >

    {({handleSubmit})=>(

    <form className={styles.input_pesquisa} onSubmit={handleSubmit} role="form">
      <label>
        <Field type="text" name="nome" placeholder="Digite o nome do cliente"/>
      </label>
      <button type="submit">Pesquisar</button>
      </form>
      )}
    </Formik>
  
    </>
  )
}

export default PesquisaCliente
