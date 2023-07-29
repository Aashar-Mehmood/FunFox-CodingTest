import { render } from "@testing-library/react";
import AppFooter from "./AppFooter";

describe("App Footer component", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<AppFooter />);
    const footer = getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});
