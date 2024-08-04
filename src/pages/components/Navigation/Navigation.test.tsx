import { render } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation", () => {
  it("renders the app name", () => {
    const { getByText } = render(<Navigation />);

    const appTitle = getByText(/Daily Meal Logs/);

    expect(appTitle).toBeInTheDocument();
  });
});
