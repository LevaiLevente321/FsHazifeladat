import React from 'react'
import CreateProductPage from './pages/CreateProductPage'
import {render, fireEvent, getByText, getByLabelText} from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe("CreateProductPage", () => {
    describe("Valid inputs", () => {
        it('calls the onSubmit function', async () => {
            const mockOnSubmit = jest.fn()
            const {getByLabelText, getByRole} = render(<CreateProductPage onSubmit={mockOnSubmit}/>)

            await act(async () => {

            
            fireEvent.change(getByLabelText("Név *"), {target: {value: "Teszt telefon"}})
            fireEvent.change(getByLabelText("Kategória *"), {target: {value: "telefon"}})
            fireEvent.change(getByLabelText("Ár *"), {target: {value: "150000"}})
            fireEvent.change(getByLabelText("Termék leírása *"), {target: {value: "Teszt leírás"}})
            fireEvent.change(getByLabelText("Kép *"), {target: {value: "../server/images/t3z3rrPimEly66Ehr1Ip6.jpeg"}})
        })
        await act(async () => {
            fireEvent.click(getByRole("button"))
        })

        expect(mockOnSubmit).toHaveBeencalled()
    })
})
})