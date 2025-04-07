import { Cliente } from "./Cliente"

export type ClienteContextInicial = {
    dados: Array<Cliente>;
    setDados:(novoState:Array<Cliente>)=> void;
    pesquisa: string;
    setPesquisa:(novoState: string)=> void;
    cliente: Cliente;
    setCliente:(novoState:any)=> void;
    atualizaLista:boolean;
    setAtualizaLista:(novoState: boolean)=> void;
    editar:boolean;
    setEditar:(novoState:boolean)=> void;
    erro:String;
    setErro:(novoState:string)=> void;
}