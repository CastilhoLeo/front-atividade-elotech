import { Usuario } from "./Usuario"

export type UsuarioContextInicial = {
    dados: Array<Usuario>;
    setDados:(novoState:Array<Usuario>)=> void;
    pesquisa: string;
    setPesquisa:(novoState: string)=> void;
    usuario: Usuario;
    setUsuario:(novoState:any)=> void;
    atualizaLista:boolean;
    setAtualizaLista:(novoState: boolean)=> void;
    editar:boolean;
    setEditar:(novoState:boolean)=> void;
    erro:String;
    setErro:(novoState:string)=> void;
}