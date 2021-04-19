import React from "react";
import { render, screen } from "@testing-library/react";
import PersonalDataForm from "./PersonalDataForm";

describe("PersonalDataForm", () => {
  it("render PersonalDataForm component", () => {
    render(<PersonalDataForm />);
    screen.debug();
    expect(screen.getByText(/Имя/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Имя/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Фамилия/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Отчество/i)).toBeInTheDocument();
    expect(screen.getByText(/подтвердить/i)).toBeInTheDocument();
    expect(screen.getByText(/подтвердить/i)).toHaveClass('MuiButton-label');
  });
});
