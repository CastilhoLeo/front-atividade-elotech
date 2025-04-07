import {  cleanup, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import CadastroCliente from "../CadastroCliente"
import { ClienteContext, ClienteContextProvider } from "../../../context/ClienteContext"
import { cadastrarCliente, editarCliente } from "../../../service/ClienteService";
import userEvent from "@testing-library/user-event";


jest.mock("../../../service/ClienteService", () => ({
  editarCliente: jest.fn().mockResolvedValue({
    status: 200,
    data: { message: "Cliente editado com sucesso" }
  }),
  cadastrarCliente: jest.fn().mockResolvedValue({
    status: 200,
    data: { message: "Cliente cadastrado com sucesso" }
  }),
}));




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
  };


  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });


describe("CadastroCliente", ()=>{
    it("Deve renderizar o component corretamente",()=>{

        render(
           
            <ClienteContextProvider>

                <CadastroCliente setNovoCliente={jest.fn()}/>

            </ClienteContextProvider>

        )

        expect(screen.getByText("Cadastro de cliente")).toBeInTheDocument()
    })

    it("Deve renderizar o formulário de cadastro sem informações quando editar é false", () => {
       
      
        render(
          <ClienteContext.Provider value={mockedContext}>
            <CadastroCliente setNovoCliente={jest.fn()} />
          </ClienteContext.Provider>
        );
      
        expect(screen.getByText("Cadastro de cliente")).toBeInTheDocument();

        expect(screen.getByPlaceholderText("Digite o nome do cliente")).toHaveValue("");

      });

      it("Deve renderizar o formulário de cadastro quando editar é true", () => {

        const mockedContextAjustado = {...mockedContext,
             editar:true,
             cliente: { id: 1, nome: "Leonardo", email: "leonardo@email.com", dataCadastro: "2024-10-01", telefone: "44998240563" }}
      
        render(
          <ClienteContext.Provider value={mockedContextAjustado}>
            <CadastroCliente setNovoCliente={jest.fn()} />
          </ClienteContext.Provider>
        );
      
        expect(screen.getByText("Cadastro de cliente")).toBeInTheDocument();

        expect(screen.getByPlaceholderText("Digite o nome do cliente")).toHaveValue("Leonardo");

    });

    it("Deve chamar as funções corretas ao editar", async () => {


      const mockedContextAjustado = {...mockedContext,
           editar:true,
           cliente: {id: 1, nome: "Leonardo", email: "leonardo@email.com", dataCadastro: "2024-10-01", telefone: "44998240563" }}

           const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
      render(
        <ClienteContext.Provider value={mockedContextAjustado}>
          <CadastroCliente setNovoCliente={jest.fn()} />
        </ClienteContext.Provider>
      );
    
      
      fireEvent.click(screen.getByRole("button", {name: "Enviar"}))

      await waitFor(() => {
        expect(editarCliente).toHaveBeenCalledTimes(1);
        expect(alertMock).toHaveBeenCalledTimes(1);
        expect(alertMock).toHaveBeenCalledWith("cliente editado com sucesso");
      });
  
  });


  it("Deve chamar as funções corretas ao criar novo cadastro", async () => {


    const mockedContextAjustado = {...mockedContext,
         editar:false,
         cliente: {id: 0, nome: "", email: "", dataCadastro: "", telefone: "" }}

         const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  
    render(
      <ClienteContext.Provider value={mockedContextAjustado}>
        <CadastroCliente setNovoCliente={jest.fn()} />
      </ClienteContext.Provider>
    );
  
    await userEvent.type(screen.getByPlaceholderText("Digite o nome do cliente"), "Leonardo")
    await userEvent.type(screen.getByPlaceholderText("Digite o e-mail do cliente"), "leonardo@email.com")
    await userEvent.type(screen.getByText("Data cadastro:"), "2025-02-20")
    await userEvent.type(screen.getByPlaceholderText("(00)00000-0000"), "44998240563")

  
    expect(screen.getByPlaceholderText("Digite o nome do cliente")).toHaveValue("Leonardo")
    expect(screen.getByPlaceholderText("Digite o e-mail do cliente")).toHaveValue("leonardo@email.com")
    expect(screen.getByTestId("dataCadastro")).toHaveValue("2025-02-20")


    fireEvent.click(screen.getByRole("button", {name: "Enviar"}))

    await waitFor(() => {
      expect(cadastrarCliente).toHaveBeenCalledTimes(1);
      expect(alertMock).toHaveBeenCalledTimes(1);
      expect(alertMock).toHaveBeenCalledWith("cliente cadastrado com sucesso");
    });
})

  
it("Deve chamar as funções corretas ao fechar tela de cadastro", async ()=>{

  const setNovoClienteMock = jest.fn()



  render(
    <ClienteContext.Provider value={mockedContext}>
      <CadastroCliente setNovoCliente={setNovoClienteMock}/>
    </ClienteContext.Provider>
  )

  await fireEvent.click(screen.getByRole("button", {name:"Fechar"}))

  await waitFor(()=>{

    expect(setNovoClienteMock).toHaveBeenCalledWith(false);
    
  })
  

  })

})