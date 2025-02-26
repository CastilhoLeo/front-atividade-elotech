import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { UsuarioContext } from "../../../context/UsuarioContext"
import PesquisaUsuario from "../PesquisaUsuario"
import userEvent from "@testing-library/user-event"



const mockedContext = {
    editar: false, 
    setEditar: jest.fn(),
    dados: [],
    setDados: jest.fn(),
    pesquisa: "",
    setPesquisa: jest.fn(),
    usuario: { id: 0, nome: "", email: "", dataCadastro: new Date().toDateString(), telefone: "" },
    setUsuario: jest.fn(),
    atualizaLista: false,
    setAtualizaLista: jest.fn(),
    erro: "",
    setErro: jest.fn(),
}

describe("PesquisaUsuario", ()=>{
    it("deve rederizar componente corretamente", ()=>{

        render(
            <UsuarioContext.Provider value={mockedContext}>
                <PesquisaUsuario/>
            </UsuarioContext.Provider>
        )

        expect(screen.getByRole("button", {name:"Pesquisar"}))
    })

    it("deve conter valor correto ao pesquisar", async ()=>{

        render(
            <UsuarioContext.Provider value={mockedContext}>
                <PesquisaUsuario/>
            </UsuarioContext.Provider>
        )


        await userEvent.type(screen.getByPlaceholderText("Digite o nome do usuário"), "Leonardo");

        fireEvent.submit(screen.getByRole("form"))
        

        await waitFor(()=>{
            expect(mockedContext.setPesquisa).toHaveBeenCalledWith("Leonardo")
        })

    })

})