import {  render, screen } from "@testing-library/react"
import CadastroUsuario from "../CadastroUsuario"
import { UsuarioContext, UsuarioContextProvider } from "../../../context/UsuarioContext"

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
  };


describe("CadastroUsuario", ()=>{
    it("Deve renderizar o component corretamente",()=>{

        const setNovoUsuario = jest.fn()


        render(
           
            <UsuarioContextProvider>

                <CadastroUsuario setNovoUsuario={setNovoUsuario}/>

            </UsuarioContextProvider>

        )

        expect(screen.getByText("Cadastro de usuário")).toBeInTheDocument()
    })

    it("Deve renderizar o formulário de cadastro sem informações quando editar é false", () => {
       
      
        render(
          <UsuarioContext.Provider value={mockedContext}>
            <CadastroUsuario setNovoUsuario={jest.fn()} />
          </UsuarioContext.Provider>
        );
      
        expect(screen.getByText("Cadastro de usuário")).toBeInTheDocument();

        expect(screen.getByPlaceholderText("Digite o nome do usuário")).toHaveValue("");

      });

      it("Deve renderizar o formulário de cadastro quando editar é true", () => {

        const mockedContextAjustado = {...mockedContext,
             editar:true,
             usuario: {...mockedContext.usuario, nome:"Leonardo"}}
      
        render(
          <UsuarioContext.Provider value={mockedContextAjustado}>
            <CadastroUsuario setNovoUsuario={jest.fn()} />
          </UsuarioContext.Provider>
        );
      
        expect(screen.getByText("Cadastro de usuário")).toBeInTheDocument();

        expect(screen.getByPlaceholderText("Digite o nome do usuário")).toHaveValue("Leonardo");
    });
})