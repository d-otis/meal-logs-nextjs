import { render } from "@testing-library/react";
import InputForm from "./InputForm";

describe("InputForm", () => {
  it("renders the main form", () => {
    const { getByTestId } = render(<InputForm />);

    const form = getByTestId("form-container");

    expect(form).toBeInTheDocument();
  });

  // todo: deal with this when i've sorted firebase rtdb mocks
  // it("renders 3x meal textareas", () => {
  //   const { getByTestId } = render(<InputForm />);

  //   const breakfastTextArea = getByTestId("breakfast-textarea");
  //   const lunchTextArea = getByTestId("lunch-textarea");
  //   const dinnerTextArea = getByTestId("dinner-textarea");

  //   expect(breakfastTextArea).toBeInTheDocument();
  //   expect(lunchTextArea).toBeInTheDocument();
  //   expect(dinnerTextArea).toBeInTheDocument();
  // });
});
