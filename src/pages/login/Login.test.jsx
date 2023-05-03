import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Login from "./Login";
import useAuth from "../../hooks/useAuth";

describe("Login component", () => {
  it("should render login form", () => {
    useAuth.mockReturnValue({
      user: null,
      setUser: jest.fn(),
    });

    const { getByLabelText, getByText } = render(<Login />);

    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    const loginButton = getByText("Login");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
});

// describe("Login component", () => {
//   it("displays error message when email and password are not entered", async () => {
//     render(<Login />);
//     fireEvent.click(screen.getByRole("button", { name: /login/i }));
//     expect(
//       await screen.findByText(/enter email and password/i)
//     ).toBeInTheDocument();
//   });

//   it("displays error message when email is not entered", async () => {
//     render(<Login />);
//     fireEvent.change(screen.getByLabelText(/password/i), {
//       target: { value: "password" },
//     });
//     fireEvent.click(screen.getByRole("button", { name: /login/i }));
//     expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
//   });

//   it("displays error message when password is not entered", async () => {
//     render(<Login />);
//     fireEvent.change(screen.getByLabelText(/email/i), {
//       target: { value: "test@test.com" },
//     });
//     fireEvent.click(screen.getByRole("button", { name: /login/i }));
//     expect(
//       await screen.findByText(/password is required/i)
//     ).toBeInTheDocument();
//   });

//   it("displays error message when email is invalid", async () => {
//     render(<Login />);
//     fireEvent.change(screen.getByLabelText(/email/i), {
//       target: { value: "test" },
//     });
//     fireEvent.change(screen.getByLabelText(/password/i), {
//       target: { value: "password" },
//     });
//     fireEvent.click(screen.getByRole("button", { name: /login/i }));
//     expect(await screen.findByText(/invalid email/i)).toBeInTheDocument();
//   });

//   it("calls handleLogin function when email and password are entered correctly", async () => {
//     const setUserMock = jest.fn();
//     const handleLoginMock = jest.fn();

//     jest.mock("../../hooks/useAuth", () => {
//       return () => ({ setUser: setUserMock });
//     });

//     jest
//       .spyOn(Login.prototype, "handleLogin")
//       .mockImplementation(handleLoginMock);

//     render(<Login />);
//     fireEvent.change(screen.getByLabelText(/email/i), {
//       target: { value: "test@test.com" },
//     });
//     fireEvent.change(screen.getByLabelText(/password/i), {
//       target: { value: "password" },
//     });
//     fireEvent.click(screen.getByRole("button", { name: /login/i }));

//     expect(handleLoginMock).toHaveBeenCalledWith("test@test.com", "password");
//     expect(setUserMock).toHaveBeenCalledWith(true);
//   });
// });
