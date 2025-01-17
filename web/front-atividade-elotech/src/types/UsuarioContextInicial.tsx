import { Usuario } from "./Usuario"

export type UsuarioContextInicial {
    dados: Array<Usuario>;
    setDados:(novoState:Array<Usuario>)=> void;
    pesquisa: String;
    setPesquisa:(novoState: String)=> void;
    usuario: Usuario;
    setUsuario:(novoState:Usuario)=> void;
    atualizaLista:boolean;
    setAtualizaLista:(novoState: boolean)=> void;
    editar:boolean;
    setEditar:(novoState:boolean)=> void;
    erro:String;
    setErro:(novoState:String)=> void;
}