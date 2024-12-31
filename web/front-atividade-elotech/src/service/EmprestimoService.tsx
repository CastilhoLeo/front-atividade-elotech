
const urlBase = `http://localhost:8080/emprestimo`

export const pesquisarEmprestimo = async (tipo, texto)=>{

    const response = await fetch(`${urlBase}?${tipo}=${texto}`)

    return  await response.json()
}
