import { Emprestimo } from "./Emprestimo";

export type EmprestimoContextInicial = {
    dados:Array<Emprestimo>;
    setDados:(novoState:Array<Emprestimo>)=>void;
    atualizaLista: boolean;
    setAtualizaLista:(novoState:boolean)=>void;
    pesquisa: {
        tipo:string,
        texto:string
    };
    setPesquisa: (novoState:{tipo:string, texto:string})=>void
}