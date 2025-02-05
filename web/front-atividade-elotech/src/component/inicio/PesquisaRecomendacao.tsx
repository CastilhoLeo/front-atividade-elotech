import { GeraRecomendacoes } from '../../service/RecomendacaoService'
import { Livro } from '../../types/Livro'
import styles from './PesquisaRecomendacao.module.css'
import { Field, Formik } from 'formik'

interface Props {
    setRecomendacoes:React.Dispatch<React.SetStateAction<Array<Livro>>>
}

const PesquisaRecomendacao = ({setRecomendacoes}:Props) => {


    const handleSubmit =  async (values:any)=>{

        const dados = await GeraRecomendacoes(values.usuarioId)

        setRecomendacoes(dados.data)
    }

  return (
    <>
    <Formik
    initialValues={{usuarioId:0}}

    onSubmit={handleSubmit}
    >
        {({handleSubmit})=>(
       
        <form onSubmit={handleSubmit} className={styles.input_recomendacao}>
            <label>
                <span>Usuario ID: </span>
                <Field type="number" name='usuarioId' />
            </label>
            <button>Gerar</button>
        </form>
         )}

    </Formik>
    </>
  )
}

export default PesquisaRecomendacao
