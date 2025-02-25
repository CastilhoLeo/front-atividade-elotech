import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import ListaUsuarios from "../ListaUsuarios"
import { UsuarioContext } from "../../../context/UsuarioContext"
import { excluirUsuario, pesquisarUsuario } from "../../../service/UsuarioService";


jest.mock("../../../service/UsuarioService",()=>({
    excluirUsuario: jest.fn(),
    pesquisarUsuario: jest.fn().mockResolvedValue({
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
    usuario: { id: 0, nome: "", email: "", dataCadastro: new Date().toDateString(), telefone: "" },
    setUsuario: jest.fn(),
    atualizaLista: false,
    setAtualizaLista: jest.fn(),
    erro: "",
    setErro: jest.fn(),
}

describe("ListaUsuario", ()=>{
    it("Deve renderizar o componente corretamente", ()=>{

        render(

            <UsuarioContext.Provider value={mockedContext}>
                <ListaUsuarios setNovoUsuario={jest.fn()}/>
            </UsuarioContext.Provider>
        )

        expect(screen.getByRole('columnheader',{name: "Telefone"})).toBeInTheDocument()
    })

    it("Deve renderizar a lsitagem de usuarios ao receber dados", ()=>{

        const mockeContextAjustado = {...mockedContext, 
            dados: [{id: 1, nome: "Leonardo", email: "leonardo@email.com", dataCadastro: "2025-02-20", telefone: "44998240563"}]
        }

        render(
            <UsuarioContext.Provider value={mockeContextAjustado}>
                <ListaUsuarios setNovoUsuario={jest.fn()}/>
            </UsuarioContext.Provider>
        )

        expect(screen.getByRole('cell',{name: "Leonardo"})).toBeInTheDocument()

    })

    it("Deve excluir usuario ao clicar em excluir", async ()=>{

        const mockeContextAjustado = {...mockedContext, 
            dados: [{id: 1, nome: "Leonardo", email: "leonardo@email.com", dataCadastro: "2025-02-20", telefone: "44998240563"}]
        }

        const alertMock = jest.spyOn(window, 'confirm').mockImplementation(() => true);



        render(
            <UsuarioContext.Provider value={mockeContextAjustado}>
                <ListaUsuarios setNovoUsuario={jest.fn()}/>
            </UsuarioContext.Provider>
        )

        expect(screen.getByRole('cell',{name: "Leonardo"})).toBeInTheDocument()

        await fireEvent.click(screen.getByRole('button', {name:"Excluir"}))

        await waitFor(()=>{
            expect(alertMock).toHaveBeenCalledTimes(1)
            expect(excluirUsuario).toHaveBeenCalledTimes(1)
            expect(pesquisarUsuario).toHaveBeenCalledTimes(1)
        })

    })
})