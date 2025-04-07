
import { useContext } from 'react'
import styles from './CadastroCliente.module.css'
import { ClienteContext } from '../../context/ClienteContext'
import { Cliente } from '../../types/Cliente'
import { cadastrarCliente, editarCliente } from '../../service/ClienteService'
import { ErrorMessage, Field, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'


interface Props{
    setNovoCliente: React.Dispatch<React.SetStateAction<boolean>>
}

const CadastroCliente = ({setNovoCliente}:Props) => {

    const context = useContext(ClienteContext);

    if (!context) {
        throw new Error("Erro no context");
    }

    const { cliente, setCliente, atualizaLista, setAtualizaLista, editar, setEditar, erro, setErro } = context;

    const clientePadrao:Cliente = {
        id:0,
        nome: "",
        email:"",
        dataCadastro: new Date().toLocaleDateString('pt-BR'),
        telefone:""
    }


      const handleFechar = ()=>{
        setNovoCliente(false) 
        setEditar(false)
        setErro("")

        atualizaLista ? setAtualizaLista(false) : setAtualizaLista(true)

        setCliente(clientePadrao)
      }


    const handleSubmit =  async (cliente: Cliente, actions:FormikHelpers<Cliente>)=>{

        try{

        
        if(editar){

            const response = await editarCliente(cliente)

            if(response.status === 200){

                alert("cliente editado com sucesso")

            }else{

                alert(response.data.message)
            }


        }else{

            const response = await cadastrarCliente(cliente)

            if(response.status === 200){

                alert("cliente cadastrado com sucesso")
                
                actions.resetForm()

            }

        }

    }catch(error: any){
        
        alert(error.response.data.message)
    }

    }

    const valorInicial = editar? cliente : clientePadrao;

    const validationSchema:Yup.AnySchema = Yup.object({
        
        nome: Yup.string().required("O nome é obrigatório")
            .min(5, "O nome deve ter no minimo 5 caracteres"),

        email: Yup.string().required("O email é obrigatório").email("E-mail invalido"),

        dataCadastro: Yup.date().required("A data é obrigatória"),

        telefone: Yup.string().required("O telefone é obrigatório").length(11, "O telefone deve ter 11 digitos")

    })


  return (
    <div className={styles.cadastro_cliente}>
    
    <Formik
    initialValues={valorInicial}

    onSubmit={(values, actions)=>{handleSubmit(values, actions)}}

    validationSchema={validationSchema}
    
    >
    {({ handleSubmit }) => (
      <form className={styles.cliente_form} onSubmit={handleSubmit}>
        <h1>Cadastro de cliente</h1>
        {editar && (
        <label>
            <span>Id</span>
            <Field type="text" name="id" disabled/>
        </label>)}
        <label>
            <span>Nome:</span>
            <Field type="text" name="nome" placeholder="Digite o nome do cliente"/>
            <ErrorMessage component="div" name="nome"/>
        </label>
        <label>
            <span>E-mail:</span>
            <Field type="text" name="email" placeholder="Digite o e-mail do cliente"/>
            <ErrorMessage component="div" name="email"/>
         </label>
        <label>
            <span>Data cadastro:</span>
            <Field data-testid="dataCadastro" type="date" name="dataCadastro"/>
            <ErrorMessage component="div" name="dataCadastro"/>
        </label>
        <label>
            <span>Telefone:</span>
            <Field type="tel" name="telefone"  placeholder="(00)00000-0000" maxLength={11}/>
            <ErrorMessage component="div" name="telefone"/>
        </label>
        <div>
            {(erro != "") && <h1>{erro}</h1> }
        <button className="btn_salvar" type='submit'>Enviar</button>
        <button className="btn_fechar" type="button" onClick={handleFechar}>Fechar</button>
        </div>
      </form>
    )}
      </Formik>
      
    </div>
  )
}

export default CadastroCliente
