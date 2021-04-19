import React from "react";
import { render, screen } from "@testing-library/react";
import PasswordForm from "./PasswordForm";

describe("PasswordForm", () => {
  it("render Password component", () => {
    render(<PasswordForm />);
    screen.debug();
    expect(screen.getByLabelText(/Пароль/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Проверка пароля/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /назад/i })).toBeInTheDocument();
    expect(screen.getByRole("button",{name:/подтвердить/i})).toBeInTheDocument();
  });
});