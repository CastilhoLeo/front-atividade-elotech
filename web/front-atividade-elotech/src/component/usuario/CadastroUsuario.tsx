
import { useContext, useState } from 'react'
import styles from './CadastroUsuario.module.css'
import { UsuarioContext } from '../../context/UsuarioContext'
import { Usuario } from '../../types/Usuario'
import { cadastrarUsuario, editarUsuario } from '../../service/UsuarioService'
const CadastroUsuario = ({setNovoUsuario}) => {

    const { usuario, setUsuario, atualizaLista, setAtualizaLista, editar, setEditar, error, setError} = useContext(UsuarioContext)

    const usuarioPadrao:Usuario = {
        id:0,
        nome: "",
        email:"",
        dataCadastro: new Date(),
        telefone:""
    }


    const handleChange = (campo: any, valor: any)=>{

        setUsuario((prevUsuario: Usuario)=>({
            ...prevUsuario,
            [campo]:valor,
        }));
    
      }


      const handleFechar = ()=>{
        setNovoUsuario(false) 
        setEditar(false)

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
                setUsuario(usuarioPadrao)
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
        alert(error.message)

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
        <button className="btn_salvar">Enviar</button>
        <button className="btn_fechar" type="button" onClick={handleFechar}>Fechar</button>
        </div>
      </form>
      
    </div>
  )
}

export default CadastroUsuario
