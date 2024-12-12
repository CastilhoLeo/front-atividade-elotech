
import { useState } from 'react'
import styles from './CadastroUsuario.module.css'
const CadastroUsuario = ({setNovoUsuario}) => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [dataCadastro, setDataCadastro] = useState("")
    const [telefone, setTelefone] = useState("")
    const [usuario, setUsuario] = useState({
        nome:{nome},
        email:{email},
        dataCadastro:{dataCadastro},
        telefone:{telefone}
    })

    console.log(nome)




    const handleSubmit = (e)=>{
        e.preventDefault()

        const cadastroFetch = async ()=>{

            const usuarioFetch = await fetch(`http://localhost:8080/usuario`, 
                {method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(usuario)})
    
        }
        
        cadastroFetch()

    }
  return (
    <div className={styles.cadastro_usuario}>
      <form onSubmit={handleSubmit} className={styles.usuario_form}>
        <h1>Cadastro de usuário</h1>
        <label>
            <span>Nome:</span>
            <input 
                type="text"
                name="nome"
                required 
                value={nome} 
                onChange={(e)=>setNome(e.target.value)}
                placeholder="Digite o nome do usuário"
            />
        </label>
        <label>
            <span>E-mail:</span>
            <input 
                type="text"
                name="email"
                required 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Digite o e-mail do usuário"
            />
        </label>
        <label>
            <span>Data cadastro:</span>
            <input 
                type="date"
                name="dataCadastro"
                required 
                value={dataCadastro} 
                onChange={(e)=>setDataCadastro(e.target.value)}
            />
        </label>
        <label>
            <span>Telefone:</span>
            <input 
                type="tel"
                name="telefone"
                required 
                value={telefone} 
                onChange={(e)=>setTelefone(e.target.value)}
                placeholder="(00)00000-0000"
                maxLength={11}
            />
        </label>
        <div>
        <button className="btn_salvar">Enviar</button>
        <button className="btn_fechar" type="button" onClick={()=>setNovoUsuario(false)}>Fechar</button>
        </div>
      </form>
      
    </div>
  )
}

export default CadastroUsuario
