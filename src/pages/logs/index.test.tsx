import { render } from "@testing-library/react";
import NewLog from "../components/NewLog";

describe("Logs", () => {
  it("mounts NewLog", () => {
    const { getByTestId } = render(<NewLog />);

    const newLogContainer = getByTestId("new-log-container");

    expect(newLogContainer).toBeInTheDocument();
  });
});
