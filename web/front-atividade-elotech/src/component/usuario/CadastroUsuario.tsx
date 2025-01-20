
import { useContext } from 'react'
import styles from './CadastroUsuario.module.css'
import { UsuarioContext } from '../../context/UsuarioContext'
import { Usuario } from '../../types/Usuario'
import { cadastrarUsuario, editarUsuario } from '../../service/UsuarioService'

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
        dataCadastro: new Date(),
        telefone:""
    }


    const handleChange = (campo: string, valor: number | Date | String)=>{

        setUsuario((prevUsuario: Usuario)=>({
            ...prevUsuario,
            [campo]:valor,
        }));
    
      }


      const handleFechar = ()=>{
        setNovoUsuario(false) 
        setEditar(false)
        setErro("")

        atualizaLista ? setAtualizaLista(false) : setAtualizaLista(true)

        setUsuario(usuarioPadrao)
      }


    const handleSubmit =  async (e:React.FormEvent)=>{
        e.preventDefault()

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
                setUsuario(usuarioPadrao)
            }else{
                alert(json.message)
            }

        }
    }catch(error: any){
        setErro(error.message)
    }

    }


  return (
    <div className={styles.cadastro_usuario}>
      <form onSubmit={handleSubmit} className={styles.usuario_form}>
        <h1>Cadastro de usuário</h1>
        {editar &&
        <label>
            <span>Id</span>
            <input 
                type="text"
                name="id"
                disabled 
                value={usuario.id} 
                onChange={(e)=>handleChange("id", e.target.value )}
            />
        </label>}
        <label>
            <span>Nome:</span>
            <input 
                type="text"
                name="nome"
                required 
                value={usuario.nome} 
                onChange={(e)=>handleChange("nome", e.target.value )}
                placeholder="Digite o nome do usuário"
            />
        </label>
        <label>
            <span>E-mail:</span>
            <input 
                type="text"
                name="email"
                required 
                value={usuario.email} 
                onChange={(e)=>handleChange("email", e.target.value )}
                placeholder="Digite o e-mail do usuário"
            />
        </label>
        <label>
            <span>Data cadastro:</span>
            <input 
                type="date"
                name="dataCadastro"
                required 
                value={usuario.dataCadastro}
                onChange={(e)=>handleChange("dataCadastro", e.target.value )}
            />
        </label>
        <label>
            <span>Telefone:</span>
            <input 
                type="tel"
                name="telefone"
                required 
                value={usuario.telefone} 
                onChange={(e)=>handleChange("telefone", e.target.value )}
                placeholder="(00)00000-0000"
                maxLength={11}
            />
        </label>
        <div>
            {(erro != "") && <h1>{erro}</h1> }
        <button className="btn_salvar">Enviar</button>
        <button className="btn_fechar" type="button" onClick={handleFechar}>Fechar</button>
        </div>
      </form>
      
    </div>
  )
}

export default CadastroUsuario
