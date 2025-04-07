import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { ClienteContext } from "../../../context/ClienteContext"
import PesquisaCliente from "../PesquisaCliente"
import userEvent from "@testing-library/user-event"



const mockedContext = {
    editar: false, 
    setEditar: jest.fn(),
    dados: [],
    setDados: jest.fn(),
    pesquisa: "",
    setPesquisa: jest.fn(),
    cliente: { id: 0, nome: "", email: "", dataCadastro: new Date().toDateString(), telefone: "" },
    setCliente: jest.fn(),
    atualizaLista: false,
    setAtualizaLista: jest.fn(),
    erro: "",
    setErro: jest.fn(),
}

describe("PesquisaCliente", ()=>{
    it("deve rederizar componente corretamente", ()=>{

        render(
            <ClienteContext.Provider value={mockedContext}>
                <PesquisaCliente/>
            </ClienteContext.Provider>
        )

        expect(screen.getByRole("button", {name:"Pesquisar"}))
    })

    it("deve conter valor correto ao pesquisar", async ()=>{

        render(
            <ClienteContext.Provider value={mockedContext}>
                <PesquisaCliente/>
            </ClienteContext.Provider>
        )


        await userEvent.type(screen.getByPlaceholderText("Digite o nome do cliente"), "Leonardo");

        fireEvent.submit(screen.getByRole("form"))
        

        await waitFor(()=>{
            expect(mockedContext.setPesquisa).toHaveBeenCalledWith("Leonardo")
        })

    })

})