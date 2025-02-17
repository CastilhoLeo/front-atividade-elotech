import {  fireEvent, render, screen } from "@testing-library/react"
import Usuario from "../Usuario"
import '@testing-library/jest-dom';


describe("Usuario", ()=>{
    it("Deve rendereza o page Usuario corretamente",()=>{
        render(
            <Usuario/>
        )

        expect(screen.getByRole("button", {name:"Novo Usuario"})).toBeInTheDocument()

        expect(screen.getByPlaceholderText("Digite o nome do usuário")).toBeInTheDocument()

        expect(screen.getByRole("columnheader", {name:"Telefone"})).toBeInTheDocument()

        expect(screen.queryByText("Cadastro de usuário")).not.toBeInTheDocument()
    })

    it("Deve rendereziar form de cadastro de usuário ao clicar em Novo Usuario",  ()=>{

        render(
            <Usuario/>
        )

        fireEvent.click(screen.getByText("Novo Usuario"))

        expect(screen.getByText("Cadastro de usuário")).toBeInTheDocument()

    })
})