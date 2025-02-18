import {  render, screen } from "@testing-library/react"
import CadastroUsuario from "../CadastroUsuario"
import { UsuarioContextProviderMocked } from "../../../context/UsuarioContext"

describe("CadastroUsuario", ()=>{
    it("Deve renderizar o component corretamente",()=>{

        const setNovoUsuario = jest.fn()

        render(
           
            <UsuarioContextProviderMocked>
                <CadastroUsuario setNovoUsuario={setNovoUsuario}/>
            </UsuarioContextProviderMocked>

        )

        expect(screen.getByText("Cadastro de usuário")).toBeInTheDocument()
    })
})