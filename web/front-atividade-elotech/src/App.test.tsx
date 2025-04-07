import {  render, screen } from "@testing-library/react"
import App from "./App"
import {  MemoryRouter } from "react-router-dom"
import '@testing-library/jest-dom';



describe("App", ()=>{
    it("Deve renderizar App corretamente", ()=>{

        render(
        <MemoryRouter>
            <App/>
        </MemoryRouter>
    )

        expect(screen.getByText(/biblioteca elotech/i)).toBeInTheDocument()
    })

    it("deve renderizar o component sobre ao utilizar a rota", async ()=>{

        const route = '/sobre'

        render(
            <MemoryRouter initialEntries={[route]}> 
                <App/>
            </MemoryRouter>
        )

        expect(screen.getByText(/sobre o projeto/i)).toBeInTheDocument()

    })

    it("deve renderizar o component cliente ao utilizar a rota", async()=>{
        const route = '/clientes'

        render(
            <MemoryRouter initialEntries={[route]}>
                <App/>
            </MemoryRouter>
        )

        expect(screen.getByRole('button',{name:'Novo Cliente'})).toBeInTheDocument()
  
    })

    it("deve renderizar o component livro ao utilizar a rota", async()=>{
        const route = '/livros'

        render(
            <MemoryRouter initialEntries={[route]}>
                <App/>
            </MemoryRouter>
        )

        expect(screen.getByRole('button',{name:'Novo Livro'})).toBeInTheDocument()
  
    })

    it("deve renderizar o component emprestimo ao utilizar a rota", async()=>{
        const route = '/emprestimos'

        render(
            <MemoryRouter initialEntries={[route]}>
                <App/>
            </MemoryRouter>
        )

        expect(screen.getByRole('button',{name:'Novo Empréstimo'})).toBeInTheDocument()
  
    })

    it("deve renderizar o component inicio ao utilizar a rota", async()=>{
        const route = '/'

        render(
            <MemoryRouter initialEntries={[route]}>
                <App/>
            </MemoryRouter>
        )

        expect(screen.getByText('Gerar recomendações para o cliente')).toBeInTheDocument()
  
    })

})