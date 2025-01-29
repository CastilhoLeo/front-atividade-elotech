import { useContext, useState } from 'react'
import { LivroContext } from '../../context/LivroContext'
import style from './PesquisaLivro.module.css'
import { Field, Formik } from 'formik'

const PesquisaLivro = () => {

  const context = useContext(LivroContext)

  if(!context){
    throw new Error("Erro no contexto")
  }

  const {setPesquisa} = context

    const handleSubmit = (titulo:string)=>{
        setPesquisa(titulo)
    }

  return (
    <>
    <Formik 

  initialValues={{titulo:""}}

  onSubmit={(values)=>{handleSubmit(values.titulo)}}

>
  {({handleSubmit})=>(

    <form className={style.input_pesquisa} onSubmit={handleSubmit}>
      <label>
        <Field type="text" name="titulo" placeholder="Digite o título do livro"/>
      </label>
      <button type='submit'>Pesquisar</button>
    </form>
  )}
    </Formik>
    </>
  )
}

export default PesquisaLivro
