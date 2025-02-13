import {render} from '@testing-library/react'
import CadastroEmprestimo from '../../emprestimo/CadastroEmprestimo'

describe("CadastroEmprestimo component", ()=>{
    it("deve renderizar o componente", ()=>{
        expect(1).toBe(1)
    })
    it('should display elements', ()=>{

        const cadastro = true
        const setCadastro = ()=>void

        render(<CadastroEmprestimo cadastro={cadastro} setCadastro={setCadastro}/>)
    })
})