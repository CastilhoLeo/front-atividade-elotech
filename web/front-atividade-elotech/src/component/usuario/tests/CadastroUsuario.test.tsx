import {  act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import CadastroUsuario from "../CadastroUsuario"
import { UsuarioContext, UsuarioContextProvider } from "../../../context/UsuarioContext"
import { editarUsuario } from "../../../service/UsuarioService";


jest.mock("../../../service/UsuarioService", () => ({
  editarUsuario: jest.fn().mockResolvedValue({
    status: 200,
    data: { message: "Usuário editado com sucesso" },
  }),
}));


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

        render(
           
            <UsuarioContextProvider>

                <CadastroUsuario setNovoUsuario={jest.fn()}/>

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
             usuario: { id: 1, nome: "Leonardo", email: "leonardo@email.com", dataCadastro: "2024-10-01", telefone: "44998240563" }}
      
        render(
          <UsuarioContext.Provider value={mockedContextAjustado}>
            <CadastroUsuario setNovoUsuario={jest.fn()} />
          </UsuarioContext.Provider>
        );
      
        expect(screen.getByText("Cadastro de usuário")).toBeInTheDocument();

        expect(screen.getByPlaceholderText("Digite o nome do usuário")).toHaveValue("Leonardo");

    });

    it("Deve chamar as funções corretas ao editar", async () => {


      const mockedContextAjustado = {...mockedContext,
           editar:true,
           usuario: {id: 1, nome: "Leonardo", email: "leonardo@email.com", dataCadastro: "2024-10-01", telefone: "44998240563" }}

           const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
      render(
        <UsuarioContext.Provider value={mockedContextAjustado}>
          <CadastroUsuario setNovoUsuario={jest.fn()} />
        </UsuarioContext.Provider>
      );
    
      
      fireEvent.click(screen.getByRole("button", {name: "Enviar"}))

      await waitFor(() => {
        expect(editarUsuario).toHaveBeenCalledTimes(1);
        expect(alertMock).toHaveBeenCalledTimes(1);
        expect(alertMock).toHaveBeenCalledWith("usuario editado com sucesso");
      });



  
  });
})