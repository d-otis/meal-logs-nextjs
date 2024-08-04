import { render } from "@testing-library/react";
import MealTextArea from "./MealTextArea";
import { text } from "stream/consumers";

describe("MealTextArea", () => {
  it("renders the textarea", () => {
    const { getByTestId } = render(
      <MealTextArea
        name="snack"
        content="bowl of popcorn"
        setValue={jest.fn()}
      />
    );

    const textarea = getByTestId("snack-textarea");

    expect(textarea).toBeInTheDocument();
  });
});
