import { render, waitFor } from "@testing-library/react";
import NewLog from "./NewLog";

describe("NewLog", () => {
  it("renders NewLog container", () => {
    const { getByTestId } = render(<NewLog />);

    const newLogContainer = getByTestId("new-log-container");

    expect(newLogContainer).toBeInTheDocument();
  });

  it("renders InputForm", () => {
    const { getByTestId } = render(<NewLog />);

    const form = getByTestId("form-container");

    expect(form).toBeInTheDocument();
  });
});
