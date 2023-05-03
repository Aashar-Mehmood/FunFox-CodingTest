import Login from "./Login";
import { render, screen } from "@testing-library/react";
describe("Login Page Rendering Correctly", () => {
  beforeEach(() => {
    render(<Login />);
  });
  const container = screen.getByTestId("container");
  const image = screen.getByRole("img");
  const heading = screen.getByRole("heading");

  const loginForm = screen.getByRole("form", { name: /login/i });
  const email = screen.getByLabelText("Email");
  const password = screen.getByLabelText("Password");
  const loginBtn = screen.getByRole("button", { name: /login/i });

  test("container rendering correctly", () => {
    expect(container).toContainElement(image);
    expect(container).toContainElement(heading);
    expect(container).toContainElement(loginForm);
  });

  test("login form rendering correctly", () => {
    expect(loginForm).toContainElement(email);
    expect(loginForm).toContainElement(password);
    expect(loginForm).toContainElement(loginBtn);
  });
});
