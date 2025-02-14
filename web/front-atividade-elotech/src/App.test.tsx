import { render, screen } from "@testing-library/react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

describe("App", ()=>{
    it("Deve renderizar App corretamente", ()=>{
        render(<App/>, {wrapper:BrowserRouter})
        const elemento = screen.getByText(/biblioteca elotech/i)
        expect(elemento).toBeInTheDocument()
    })

    jest.fn
})