import { render } from "@testing-library/react";
import Logs from ".";
import NewLog from "../components/NewLog";

describe("Logs", () => {
  it("mounts Navigation", () => {
    const { getByTestId } = render(<Logs />);

    const navbar = getByTestId("navbar");

    expect(navbar).toBeInTheDocument();
  });

  it("mounts NewLog", () => {
    const { getByTestId } = render(<NewLog />);

    const newLogContainer = getByTestId("new-log-container");

    expect(newLogContainer).toBeInTheDocument();
  });
});
