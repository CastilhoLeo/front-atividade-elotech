
const PesquisaLocacao = () => {
  return (
    <div>
        
        <form>
            <select name="campoPesquisa" onChange={(e)=>console.log(e.target.value)}>
                 <option value="Usuario">Usuario</option>
                <option value="Livro">Livro</option>
            </select>

        <label>
            <input type="text" placeholder="Digite a pesquisa..."/>
        </label>

        <button>Pesquisar</button>
        
      </form>
    </div>
  )
}

export default PesquisaLocacao
