import { ReactEventHandler, useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import styles from "./PesquisaUsuario.module.css"
import { Field, Formik } from "formik"

const PesquisaUsuario = () => {

  const context = useContext(UsuarioContext)
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

    <form className={styles.input_pesquisa} onSubmit={handleSubmit}>
      <label>
        <Field type="text" name="nome" placeholder="Digite o nome do usuário"/>
      </label>
      <button type="submit">Pesquisar</button>
      </form>
      )}
    </Formik>
  
    </>
  )
}

export default PesquisaUsuario
