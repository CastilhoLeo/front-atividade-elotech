import { useEffect, useState } from 'react'
import { pesquisarUsuario } from '../../service/UsuarioService'
import { Livro } from '../../types/Livro'
import BuscaUsuario from '../global/BuscaUsuario'
import styles from './PesquisaRecomendacao.module.css'
import { Usuario } from '../../types/Usuario'
import { GeraRecomendacoes } from '../../service/RecomendacaoService'

interface Props {
    setRecomendacoes:React.Dispatch<React.SetStateAction<Array<Livro>>>
}

const PesquisaRecomendacao = ({setRecomendacoes}:Props) => {

    const [nomeUsuario, setNomeUsuario] = useState("")
    const [listaUsuarios, setListaUsuarios] = useState<Array<Usuario>>([])
    const [usuarioSelecionado, setUsuarioSelecionado] = useState<Usuario>()


    useEffect(()=>{

        const recomendacao =  async (usuario:Usuario)=>{

        const dados = await GeraRecomendacoes(usuario.id)

        setRecomendacoes(dados.data)
    }

    if(usuarioSelecionado)

    recomendacao(usuarioSelecionado)

    },[usuarioSelecionado])
    


    const handleChange = (values:string)=>{
        setNomeUsuario(values)
        console.log(values)
    }


    useEffect(()=>{

        {
        const buscarUsuarios = async (nomeUsuario:string)=>{
        
            const usuarios = await  pesquisarUsuario(nomeUsuario)

            if(nomeUsuario.length >=3){

            setListaUsuarios(usuarios.data)
            } else {
                setListaUsuarios([])
            }
    
        }

        buscarUsuarios(nomeUsuario)

    }

    },[nomeUsuario])


  return (
    <>
    <div className={styles.recomendacoes}>
       
        <label>
            <span>Nome Usuario: </span>
            <input type="text" name='nomeUsuario'  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleChange(e.target.value)}} value={nomeUsuario}/>
        </label>

    </div>
    <BuscaUsuario listaUsuarios={listaUsuarios} setUsuarioSelecionado={setUsuarioSelecionado}/>
    </>
  )
}

export default PesquisaRecomendacao
