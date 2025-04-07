import {  fireEvent, render, screen } from "@testing-library/react"
import Cliente from "../Cliente"
import '@testing-library/jest-dom';


describe("Cliente", ()=>{

    it("Deve rendereza o page Cliente corretamente",()=>{      

        render(
            <Cliente/>
        )
 
        expect(screen.getByRole("button", {name:"Novo Cliente"})).toBeInTheDocument()

        expect(screen.getByPlaceholderText("Digite o nome do cliente")).toBeInTheDocument()

        expect(screen.getByRole("columnheader", {name:"Telefone"})).toBeInTheDocument()

        expect(screen.queryByText("Cadastro de cliente")).not.toBeInTheDocument()
    })

    it("Deve rendereziar form de cadastro de cliente ao clicar em Novo Cliente",  ()=>{

        render(
            <Cliente/>
        )

        fireEvent.click(screen.getByText("Novo Cliente"))

        expect(screen.getByText("Cadastro de cliente")).toBeInTheDocument()

    })

    it("Deve fechar form de cadastro de cliente ao clicar em fechar",  ()=>{

        render(
            <Cliente/>
        )

        fireEvent.click(screen.getByText("Novo Cliente"))

        fireEvent.click(screen.getByRole('button', {name: "Fechar"}))

        expect(screen.queryByText("Cadastro de cliente")).not.toBeInTheDocument()

    })
})