import { useEffect, useState } from 'react'
import { GeraRecomendacoes } from '../../service/RecomendacaoService'
import { pesquisarUsuario } from '../../service/UsuarioService'
import { Livro } from '../../types/Livro'
import BuscaUsuario from '../global/BuscaUsuario'
import styles from './PesquisaRecomendacao.module.css'
import { Field, Formik } from 'formik'
import { Usuario } from '../../types/Usuario'
import Usuario from '../../pages/Usuario'

interface Props {
    setRecomendacoes:React.Dispatch<React.SetStateAction<Array<Livro>>>
}

const PesquisaRecomendacao = ({setRecomendacoes}:Props) => {

    const [nomeUsuario, setNomeUsuario] = useState("")
    const [listaUsuarios, setListaUsuarios] = useState<Array<Usuario>>([])


    const handleSubmit =  async (values:any)=>{

        const dados = await GeraRecomendacoes(values.usuarioId)

        setRecomendacoes(dados.data)
    }


    const handleChange = (values:string)=>{
        setNomeUsuario(values)
        console.log(values)
    }


    useEffect(()=>{

        if(nomeUsuario!==""){
        const buscarUsuarios = async (nomeUsuario:string)=>{
        
            const usuarios = await  pesquisarUsuario(nomeUsuario)

            setListaUsuarios(usuarios.data)
    
        }

        buscarUsuarios(nomeUsuario)
    }

    },[nomeUsuario])


  return (
    <>
    <Formik
    initialValues={{nomeUsuario:""}}

    onSubmit={handleSubmit}


    >
        {({handleSubmit})=>(
       
        <form onSubmit={handleSubmit} className={styles.input_recomendacao}>
            <label>
                <span>Nome Usuario: </span>
                <Field type="text" name='nomeUsuario'  onChange={(e)=>{handleChange(e.target.value)}} value={nomeUsuario}/>
                <BuscaUsuario listaUsuarios={listaUsuarios}/>
            </label>
            <button>Gerar</button>
        </form>
         )}

    </Formik>
    </>
  )
}

export default PesquisaRecomendacao
