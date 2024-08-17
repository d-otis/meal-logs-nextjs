import { render } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation", () => {
  it("renders the app name", () => {
    const { getByTestId } = render(<Navigation />);

    const navbar = getByTestId("navbar");

    expect(navbar).toBeInTheDocument();
  });
});
