import { useEffect, useState } from 'react'
import { pesquisarCliente } from '../../service/ClienteService'
import { Livro } from '../../types/Livro'
import BuscaCliente from  '../global/BuscaCliente'
import styles from './PesquisaRecomendacao.module.css'
import { Cliente } from '../../types/Cliente'
import { GeraRecomendacoes } from '../../service/RecomendacaoService'

interface Props {
    setRecomendacoes:React.Dispatch<React.SetStateAction<Array<Livro>>>
}

const PesquisaRecomendacao = ({setRecomendacoes}:Props) => {

    const [nomeCliente, setNomeCliente] = useState("")
    const [listaClientes, setListaClientes] = useState<Array<Cliente>>([])
    const [clienteSelecionado, setClienteSelecionado] = useState<Cliente>()


    useEffect(()=>{

        const recomendacao =  async (cliente:Cliente)=>{

        const dados = await GeraRecomendacoes(cliente.id)

        setRecomendacoes(dados.data)
    }

    if(clienteSelecionado)

    recomendacao(clienteSelecionado)

    },[clienteSelecionado])
    


    const handleChange = (values:string)=>{
        setNomeCliente(values)
        console.log(values)
    }


    useEffect(()=>{

        
        const listarClientes = async ()=>{

        if(nomeCliente.length > 0){

        const res = await pesquisarCliente(nomeCliente)

        setListaClientes(res.data)
        }else{
            setListaClientes([])
        }

    }

    listarClientes()

    },[nomeCliente])


  return (
    <>
    <div className={styles.recomendacoes}>
        <label>
            <input type="text" name='nomeCliente' placeholder='Nome do cliente' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleChange(e.target.value)}} value={nomeCliente}/>
            <BuscaCliente listaClientes={listaClientes} setClienteSelecionado={setClienteSelecionado}/>
        </label>
        </div>
    
    </>
  )
}

export default PesquisaRecomendacao
