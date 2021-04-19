import React from "react";
import { render, screen } from "@testing-library/react";
import Confirm from "./Confirm";

describe("Confirm", () => {
  it("render Confirm component", () => {
    render(<Confirm />);
    screen.debug();
    expect(screen.getByText(/Примите поздравления!/i)).toBeInTheDocument();
    expect(screen.getByText(/Вы успешно заполнили все поля./i)).toBeInTheDocument();
    expect(screen.getByText(/Имя/i)).toBeInTheDocument();
    expect(screen.getByText(/Фамилия/i)).toBeInTheDocument();
    expect(screen.getByText(/Отчество/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /назад/i })).toBeInTheDocument();
    expect(screen.getByRole("button",{name:/вернуться в начало/i})).toBeInTheDocument();
  });
});