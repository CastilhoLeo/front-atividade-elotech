import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import ListaClientes from "../ListaClientes"
import { ClienteContext } from "../../../context/ClienteContext"
import { excluirCliente, pesquisarCliente } from "../../../service/ClienteService";


jest.mock("../../../service/ClienteService",()=>({
    excluirCliente: jest.fn(),
    pesquisarCliente: jest.fn().mockResolvedValue({
        status:200,
        data:{},
    })
}))

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

beforeEach(() => {
    jest.clearAllMocks(); // Limpa contadores antes de cada teste
  });


describe("ListaCliente", ()=>{
    it("Deve renderizar o componente corretamente", ()=>{

        render(

            <ClienteContext.Provider value={mockedContext}>
                <ListaClientes setNovoCliente={jest.fn()}/>
            </ClienteContext.Provider>
        )

        expect(screen.getByRole('columnheader',{name: "Telefone"})).toBeInTheDocument()
    })

    it("Deve renderizar a lsitagem de clientes ao receber dados", ()=>{

        const mockeContextAjustado = {...mockedContext, 
            dados: [{id: 1, nome: "Leonardo", email: "leonardo@email.com", dataCadastro: "2025-02-20", telefone: "44998240563"}]
        }

        render(
            <ClienteContext.Provider value={mockeContextAjustado}>
                <ListaClientes setNovoCliente={jest.fn()}/>
            </ClienteContext.Provider>
        )

        expect(screen.getByRole('cell',{name: "Leonardo"})).toBeInTheDocument()

    })

    it("Deve excluir cliente ao clicar em excluir", async ()=>{

        const mockeContextAjustado = {...mockedContext, 
            dados: [{id: 1, nome: "Leonardo", email: "leonardo@email.com", dataCadastro: "2025-02-20", telefone: "44998240563"}]
        }

        const alertMock = jest.spyOn(window, 'confirm').mockImplementation(() => true);



        render(
            <ClienteContext.Provider value={mockeContextAjustado}>
                <ListaClientes setNovoCliente={jest.fn()}/>
            </ClienteContext.Provider>
        )

        expect(screen.getByRole('cell',{name: "Leonardo"})).toBeInTheDocument()

        await fireEvent.click(screen.getByRole('button', {name:"Excluir"}))

        await waitFor(()=>{
            expect(alertMock).toHaveBeenCalledTimes(1)
            expect(excluirCliente).toHaveBeenCalledTimes(1)
            expect(pesquisarCliente).toHaveBeenCalledTimes(1)
        })

    })
})