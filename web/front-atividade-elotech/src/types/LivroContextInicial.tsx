import { Livro } from "./Livro";

export type LivroContextInicial{
        dados: Array<Livro>;
        setDados:(novoState:Array<Livro>)=> void;
        pesquisa: string;
        setPesquisa:(novoState: string)=> void;
        livro: Livro;
        setLivro:(novoState:any)=> void;
        atualizaLista:boolean;
        setAtualizaLista:(novoState: boolean)=> void;
        editar:boolean;
        setEditar:(novoState:boolean)=> void;
        erro:String;
        setErro:(novoState:string)=> void;
}