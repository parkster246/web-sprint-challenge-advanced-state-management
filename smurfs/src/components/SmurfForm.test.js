import React from "react";
import ReactDOM from 'react-dom'
import { render, fireEvent, findByTestId } from "@testing-library/react";
import App from './App'
import SmurfForm from "./SmurfForm";
import '@testing-library/jest-dom/extend-expect'

it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
})

test("form header renders", () => {
    const {getByText}= render(<SmurfForm/>)
    const header = getByText(/Smurf Form/i)
    expect(header).toBeInTheDocument
});
