import React from "react";
import { render, screen } from "@testing-library/react";
import EmailForm from "./EmailForm";

describe("EmailForm", () => {
  it("render Email component", () => {
    render(<EmailForm />);
    screen.debug();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/назад/i)).toBeInTheDocument();
    expect(screen.getByText(/назад/i)).toHaveClass('MuiButton-label');
    expect(screen.getByText(/подтвердить/i)).toBeInTheDocument();
    expect(screen.getByText(/подтвердить/i)).toHaveClass('MuiButton-label');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
