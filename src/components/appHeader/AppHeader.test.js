import { render } from "@testing-library/react";
import AppHeader from "./AppHeader";
import cmpndText from "../../assets/cmpnd_text.png";

test("AppHeader has logo image", () => {
  const { getByTestId } = render(<AppHeader />);
  const logoImage = getByTestId("logo image");
  expect(logoImage).toHaveAttribute("src", cmpndText);
});
