
import { useContext } from 'react'
import styles from './CadastroUsuario.module.css'
import { UsuarioContext } from '../../context/UsuarioContext'
import { Usuario } from '../../types/Usuario'
import { cadastrarUsuario, editarUsuario } from '../../service/UsuarioService'
import { ErrorMessage, Field, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'


interface Props{
    setNovoUsuario: React.Dispatch<React.SetStateAction<boolean>>
}

const CadastroUsuario = ({setNovoUsuario}:Props) => {

    const context = useContext(UsuarioContext);

    if (!context) {
        throw new Error("Erro no context");
    }

    const { usuario, setUsuario, atualizaLista, setAtualizaLista, editar, setEditar, erro, setErro } = context;

    const usuarioPadrao:Usuario = {
        id:0,
        nome: "",
        email:"",
        dataCadastro: new Date().toLocaleDateString('pt-BR'),
        telefone:""
    }


      const handleFechar = ()=>{
        setNovoUsuario(false) 
        setEditar(false)
        setErro("")

        atualizaLista ? setAtualizaLista(false) : setAtualizaLista(true)

        setUsuario(usuarioPadrao)
      }


    const handleSubmit =  async (usuario: Usuario, actions:FormikHelpers<Usuario>)=>{

        try{

            
        if(editar){

            const response = await editarUsuario(usuario)

            const json = await response.json()

            if(response.ok){
                alert("usuario editado com sucesso")
            }else{
                alert(json.message)
            }


        }else{

            const response = await cadastrarUsuario(usuario)

            const json = await response.json()

            if(response.ok){
                alert("usuario cadastrado com sucesso")
                actions.resetForm()
            }else{
                alert(json.message)
            }

        }

    }catch(error: any){
        setErro(error.message)
        }

    }

    const valorInicial = editar? usuario : usuarioPadrao;

    const validationSchema:Yup.AnySchema = Yup.object({
        
        nome: Yup.string().required("O nome é obrigatório")
            .min(5, "O nome deve ter no minimo 5 caracteres"),

        email: Yup.string().required("O email é obrigatório").email("E-mail invalido"),

        dataCadastro: Yup.date().required("A data é obrigatória"),

        telefone: Yup.string().required("O telefone é obrigatório").length(11, "O telefone deve ter 11 digitos")

    })


  return (
    <div className={styles.cadastro_usuario}>
    
    <Formik
    initialValues={valorInicial}

    onSubmit={(values, actions)=>{handleSubmit(values, actions)}}

    validationSchema={validationSchema}
    
    >
    {({ handleSubmit }) => (
      <form className={styles.usuario_form} onSubmit={handleSubmit}>
        <h1>Cadastro de usuário</h1>
        {editar && (
        <label>
            <span>Id</span>
            <Field type="text" name="id" disabled/>
        </label>)}
        <label>
            <span>Nome:</span>
            <Field type="text" name="nome" placeholder="Digite o nome do usuário"/>
            <ErrorMessage component="div" name="nome"/>
        </label>
        <label>
            <span>E-mail:</span>
            <Field type="text" name="email" placeholder="Digite o e-mail do usuário"/>
            <ErrorMessage component="div" name="email"/>
         </label>
        <label>
            <span>Data cadastro:</span>
            <Field type="date" name="dataCadastro"/>
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

export default CadastroUsuario
